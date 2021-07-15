import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';
import Layout from '../components/Layout';

export const EnrollSchoolPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const EnrollSchoolPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <EnrollSchoolPageTemplate data={frontmatter} />
       </Layout>)
};

export default EnrollSchoolPage;

export const pageQuery = graphql`
  query EnrollSchoolPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
