import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Teachers from '../components/Teachers';

export const TeachersGroupsPageTemplate = ({ data }) => {
  return <Teachers {...data.teachers} />;
};

const TeachersGroupsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeachersGroupsPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default TeachersGroupsPage;

export const pageQuery = graphql`
  query TeachersGroupsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "teachers-groups" } }) {
      frontmatter {
        teachers {
          title
          teachers {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            status
            position
            specialization
            bio
            groups {
              group_name
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
        groups {
          title
          groups {
            group
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            books {
              book_title
              image {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              link
            }
          }
        }
      }
    }
  }
`;
