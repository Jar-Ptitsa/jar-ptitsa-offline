import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

export const TeachersGroupsPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const TeachersGroupsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <TeachersGroupsPageTemplate data={frontmatter} />
       </Layout>)
};

export default TeachersGroupsPage;

export const pageQuery = graphql`
  query TeachersGroupsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
