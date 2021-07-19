import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Contacts from '../components/Contacts';
import Route from '../components/Route';
import AddressList from '../components/AddressList';

export const ContactsPageTemplate = ({ data }) => {
  const sectionWrapper = ({ contacts, address, routes }) => {
    return (
      <React.Fragment>
        <section
          className='d-none d-sm-block'
          style={{ backgroundColor: '#f0f0f0' }}>
          <div className='container pb-3' style={{ maxWidth: '960px' }}>
            <h2 className='fw-normal text-center text-sm-start text-uppercase py-3 mb-0'>
              {data.title}
            </h2>
            <div className='row m-0 p-0'>
              <div className='col-12 col-sm-6 p-0'>
                <div className='pb-3'>{contacts}</div>
                <div>{routes}</div>
              </div>
              <div className='col-12 col-sm-6'>{address}</div>
            </div>
          </div>
        </section>

        <section className='d-sm-none'>
          <div className='container p-0' style={{ maxWidth: '960px' }}>
            <h2
              className='fw-normal text-center text-sm-start text-uppercase py-3 mb-0'
              style={{ backgroundColor: '#f0f0f0' }}>
              {data.title}
            </h2>
            <div className='row m-0 p-0'>
              <div className='col-12 col-sm-6 p-0'>
                <div className='pb-3' style={{ backgroundColor: '#f0f0f0' }}>
                  {contacts}
                </div>
              </div>
              <div className='col-12 col-sm-6 p-0'>{address}</div>
              <div style={{ backgroundColor: '#E5EAE1' }}>{routes}</div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {sectionWrapper({
        contacts: <Contacts {...data} />,
        address: <AddressList {...data} />,
        routes: <Route {...data} />,
      })}
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
          }
        }
        routes {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
