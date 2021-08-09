import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Enroll from '../components/Enroll';
import Form from '../components/Form';

export const EnrollSchoolPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Enroll {...data} />
      <Form {...data} className='col-12 col-sm-8 col-md-6 mx-auto' />
    </React.Fragment>
  );
};

const EnrollSchoolPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EnrollSchoolPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default EnrollSchoolPage;

export const pageQuery = graphql`
  query EnrollSchoolPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "enroll-school" } }) {
      frontmatter {
        title
        steps {
          title
          steps {
            description
          }
        }
        formData {
          title
          formInputs {
            inputType
            inputLabel
            required
          }
        }
      }
    }
  }
`;
