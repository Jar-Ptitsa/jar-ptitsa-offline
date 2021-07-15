import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';
import Layout from '../components/Layout';

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
