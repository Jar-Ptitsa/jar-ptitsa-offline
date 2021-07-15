import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

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
