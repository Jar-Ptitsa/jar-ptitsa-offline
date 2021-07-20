const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// create pages based on
// - slug
// - template key in frontmatter
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // remove files (md) that are not pages
    // like header and footer from layout
    // 1 -> create exceptions array
    const exceptionSlugs = ['/header/', '/footer/'];

    posts.forEach((edge) => {
      const id = edge.node.id;

      // 2 -> check if slug in exceptions array => skip further processing
      if (exceptionSlugs.includes(edge.node.fields.slug)) return;

      console.log('slug >>> ', edge.node.fields.slug);

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

// create slugs for each MD node
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
