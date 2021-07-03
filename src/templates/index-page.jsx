import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Section from '../components/Section';
import Form from '../components/Form';

export const IndexPageTemplate = ({ data }) => {
  const {
    header,
    reasons,
    advantages,
    secret,
    treasure,
    plans,
    freeLesson,
    formData,
  } = data;

  return (
    <React.Fragment>
      <Header {...header} />
      <Section {...reasons} />
      <Section {...advantages} />
      <Section {...secret} listContentType='video' />
      <Section {...treasure} />
      <Section {...plans} listContentType='card' />
      <Section {...freeLesson} />
      <Form {...formData} />
    </React.Fragment>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default IndexPage;

// image {
//   childImageSharp {
//     fluid(maxWidth: 2048, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        header {
          title
          description
          logo {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        reasons {
          title
          listType
          list {
            title
            description
            alignImage
          }
        }
        advantages {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alignImage
          listType
          list {
            title
            description
            alignImage
          }
        }
        secret {
          title
          description
          list {
            alignImage
            title
            description
          }
        }
        treasure {
          title
          list {
            alignImage
            title
            description
          }
        }
        plans {
          title
          list {
            alignImage
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        freeLesson {
          title
          description
          list {
            alignImage
            title
            description
          }
        }
        formData {
          title
          description
          formInputs {
            inputType
            inputLabel
          }
        }
      }
    }
  }
`;
