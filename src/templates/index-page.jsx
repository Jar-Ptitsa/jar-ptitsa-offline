import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bonus from '../components/Bonus';
import Advantages from '../components/Advantages';
import Section from '../components/Section';

export const IndexPageTemplate = ({ data }) => {
  const { header, bonus, advantages, secret, treasure, plans, freeLesson } =
    data;

  return (
    <React.Fragment>
      <Header {...header} />
      <Section {...bonus} />
      <Advantages {...advantages} />
      <Bonus {...secret} />
      <Bonus {...treasure} />
      <Bonus {...plans} />
      <Bonus {...freeLesson} />
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
        bonus {
          title
          description
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
      }
    }
  }
`;
