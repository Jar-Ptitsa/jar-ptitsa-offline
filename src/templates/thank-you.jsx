import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

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
