import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Classes from '../components/Classes';
import Schedule from '../components/Schedule';
import GoogleCalendar from '../components/GoogleCalendar';

export const ClassesSchedulePageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <Classes {...data} />
      <Schedule {...data} />
      <GoogleCalendar />
    </React.Fragment>
  );
};

const ClassesSchedulePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ClassesSchedulePageTemplate data={frontmatter} />
    </Layout>
  );
};

export default ClassesSchedulePage;

export const pageQuery = graphql`
  query ClassesSchedulePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "classes-schedule" } }) {
      frontmatter {
        classes {
          title
          list {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link
          }
        }
        schedule {
          title
          days {
            day
            time_blocks {
              time
              classes {
                class
              }
            }
          }
        }
      }
    }
  }
`;
