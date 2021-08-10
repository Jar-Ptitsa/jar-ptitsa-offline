import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import ContactDirector from '../components/ContactDirector';
import Contacts from '../components/Contacts';
import Route from '../components/Route';
import AddressList from '../components/AddressList';

export const ContactsPageTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <section style={{ backgroundColor: '#f0f0f0' }}>
        <div className='container' style={{ maxWidth: '960px' }}>
          <div className='row m-0 p-0'>
            <div className='col-12 p-0'>
              <div className='py-3' style={{ backgroundColor: '#f0f0f0' }}>
                <ContactDirector {...data} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container' style={{ maxWidth: '960px' }}>
          <div className='row m-0 p-0'>
            <h2 className='col-12 px-0 fw-normal text-center text-sm-start text-uppercase py-3 mb-0'>
              {data.title}
            </h2>
          </div>
          <div className='col-12 p-0'>
            <div className='pb-3'>
              <Contacts {...data} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container pt-3' style={{ maxWidth: '960px' }}>
          <Route {...data} />
        </div>
      </section>

      <AddressList {...data} />
    </React.Fragment>
  );
};

const ContactsPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <ContactsPageTemplate data={frontmatter} />
    </Layout>
  );
};

export default ContactsPage;

export const pageQuery = graphql`
  query ContactsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contacts" } }) {
      frontmatter {
        principal {
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          signature
          tabs {
            tab_label
            form_name
            formInputs {
              inputType
              inputLabel
              required
            }
          }
        }
        title
        email
        telephones {
          phone
        }
        address {
          title
          address {
            title
            street
            city
            zip
            country
            coords
            steps {
              title
              options {
                option
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        routes {
          title
          steps {
            title
            options {
              option
            }
          }
        }
      }
    }
  }
`;
