import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

export const ClassesSchedulePageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const ClassesSchedulePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <ClassesSchedulePageTemplate data={frontmatter} />
       </Layout>)
};

export default ClassesSchedulePage;

export const pageQuery = graphql`
  query ClassesSchedulePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
