import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import MainPlans from '../components/MainPlans';
import AdditionalPlans from '../components/AdditionalPlans';

export const PlansPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <MainPlans {...data} />
      <AdditionalPlans {...data} />
    </React.Fragment>
  );
};

const PlansPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PlansPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default PlansPage;

export const pageQuery = graphql`
  query PlansPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "plans" } }) {
      frontmatter {
        title
        main_plans {
          title
          plans {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            hours
            price
            currency
            discounts
          }
          footnotes
        }
        additional_plans {
          title
          plans {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hours
            price
            currency
            discounts
          }
          footnotes
        }
        afterwords
      }
    }
  }
`;
