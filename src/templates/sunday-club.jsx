import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';
import Layout from '../components/Layout';

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
