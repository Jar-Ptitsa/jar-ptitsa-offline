import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import DirectorSpeech from '../components/DirectorSpeech';
import Enroll from '../components/Enroll';
import Form from '../components/Form';

export const EnrollSchoolPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <DirectorSpeech {...data} />
      <Enroll {...data} />
      <Form
        formData={data.formData}
        formName='contact'
        formSubject='JAR-PTITSA OFFLINE - New request'
        className='col-12 col-sm-8 col-md-6 mx-auto'
      />
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
        principal {
          signature
          description
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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
