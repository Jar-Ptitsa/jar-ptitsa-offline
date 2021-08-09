import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Policy from '../components/Policy';

export const PolicyPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Policy {...data} />
    </React.Fragment>
  );
};

const PolicyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PolicyPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default PolicyPage;

export const pageQuery = graphql`
  query PolicyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "policy" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
