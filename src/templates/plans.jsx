import React from 'react';
import { graphql } from 'gatsby';

import ThankYou from '../components/ThankYou';
import Layout from '../components/Layout';

export const PlansPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const PlansPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <PlansPageTemplate data={frontmatter} />
       </Layout>)
};

export default PlansPage;

export const pageQuery = graphql`
  query PlansPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
