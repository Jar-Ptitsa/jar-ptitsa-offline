import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';

export const ThankYouPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const ThankYouPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <ThankYouPageTemplate data={frontmatter} />;
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "thank-you" } }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
