import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Sunday from '../components/Sunday';
import JarPtenchiki from '../components/JarPtenchiki';
import SundayClubLinks from '../components/SundayClubLinks';

export const SundayClubPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Sunday {...data} />
      <JarPtenchiki {...data} />
      <SundayClubLinks />
    </React.Fragment>
  );
};

const SundayClubPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SundayClubPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default SundayClubPage;

export const pageQuery = graphql`
  query SundayClubPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sunday-club" } }) {
      frontmatter {
        title
        sunday {
          title
          description
          videos {
            title
            video
          }
        }
        jar_ptenchiki {
          title
          description
          photos {
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
