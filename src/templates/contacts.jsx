import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ThankYou from '../components/ThankYou';

export const ContactsPageTemplate = ({ data }) => {
  return <ThankYou {...data} />;
};

const ContactsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (<Layout>
           <ContactsPageTemplate data={frontmatter} />
       </Layout>)
};

export default ContactsPage;

export const pageQuery = graphql`
  query ContactsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
