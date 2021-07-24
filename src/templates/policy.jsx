import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Policy from '../components/Policy';

export const PlansPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Policy {...data} />
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
  query PolicyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "policy" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
