import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import useSiteMetadata from '../components/SiteMetadata';
import { HeaderLayoutTemplate } from '../templates/header-layout';
import { FooterLayoutTemplate } from '../templates/footer-layout';

// bootstrap and custom scss
import '../styles/styles.scss';

const TemplateWrapper = ({ children }) => {
  // get data in component due to export query works only for page components
  const data = useStaticQuery(graphql`
    query HeaderAndFooterQuery {
      header: markdownRemark(
        frontmatter: { templateKey: { eq: "header-layout" } }
      ) {
        frontmatter {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      footer: markdownRemark(
        frontmatter: { templateKey: { eq: "footer-layout" } }
      ) {
        frontmatter {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          address
          telephones
          email
          youtube
          twitter
          facebook
          instagram
        }
      }
    }
  `);

  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link rel='manifest' href={`${withPrefix('/')}img/site.webmanifest`} />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <HeaderLayoutTemplate data={data.header.frontmatter} />

      <React.Fragment>{children}</React.Fragment>

      <FooterLayoutTemplate data={data.footer.frontmatter} />
    </React.Fragment>
  );
};

export default TemplateWrapper;