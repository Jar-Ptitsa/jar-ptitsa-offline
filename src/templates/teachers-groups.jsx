import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import TeachersGallery from '../components/TeachersGallery';
import Teachers from '../components/Teachers';
import Groups from '../components/Groups';

export const TeachersGroupsPageTemplate = ({ data, location = '' }) => {
  return (
    <React.Fragment>
      <TeachersGallery teachers={data.teachers} className='col-6 col-sm-3' />
      <Teachers teachers={data.teachers} location={location} />
      <Groups {...data.groups} />
    </React.Fragment>
  );
};

const TeachersGroupsPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeachersGroupsPageTemplate data={frontmatter} location={location} />
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
          list {
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
              book_authors
              image {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              button_label
              link
            }
            other_items
          }
        }
      }
    }
  }
`;
