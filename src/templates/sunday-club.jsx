import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

export const SundayClubPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const SundayClubPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <SundayClubPageTemplate data={frontmatter} />
       </Layout>)
};

export default SundayClubPage;

export const pageQuery = graphql`
  query SundayClubPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
