import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import SchoolRules from '../components/SchoolRules';

export const SchoolRulesTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <SchoolRules {...data} />
    </React.Fragment>
  );
};

const SchoolRulesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SchoolRulesTemplate data={frontmatter} />
    </Layout>
  );
};

export default SchoolRulesPage;

export const pageQuery = graphql`
  query SchoolRulesTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "school-rules" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
