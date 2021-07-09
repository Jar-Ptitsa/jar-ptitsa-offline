import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';
import Layout from '../components/Layout';

export const ThankYouPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const ThankYouPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <ThankYouPageTemplate data={frontmatter} />
       </Layout>)
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "thank-you" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
