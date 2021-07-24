import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';

import Reasons from '../components/Reasons';
import Advantages from '../components/Advantages';
import Wednesday from '../components/Wednesday';
import Treasure from '../components/Treasure';
import Testimonials from '../components/Testimonials';
import Links from '../components/Links';

export const IndexPageTemplate = ({ data }) => {
  const { reasons, advantages, wednesday, treasure, testimonials } = data;

  return (
    <React.Fragment>
      <Reasons {...reasons} />
      <Advantages {...advantages} />
      <Wednesday {...wednesday} />
      <Treasure {...treasure} />
      <Testimonials {...testimonials} />
      <Links />
    </React.Fragment>
  );
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

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        reasons {
          title
          list {
            title
            description
            alignImage
            image {
              childImageSharp {
                fluid(maxWidth: 960, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        advantages {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alignImage
          listType
          list {
            description
          }
        }
        wednesday {
          title
          description
          list {
            title
            video
          }
        }
        treasure {
          title
          teachers {
            description
            list {
              image {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          dance {
            description
            video
          }
        }
        testimonials {
          title
          description
          list {
            author
            quote
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
