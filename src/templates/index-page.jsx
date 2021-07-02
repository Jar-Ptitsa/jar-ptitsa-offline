import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ data }) => {
  const { header } = data;

  return <Header {...header} />;
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default IndexPage;

// image {
//   childImageSharp {
//     fluid(maxWidth: 2048, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        header {
          title
          description
          logo {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
