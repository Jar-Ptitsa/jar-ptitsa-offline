import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

const Header = ({ title, description, logo }) => {
  const image = !!logo.childImageSharp ? (
    <Img fluid={logo.childImageSharp.fluid} alt='' />
  ) : (
    <img src={logo.url} alt='' />
  );

  return (
    <React.Fragment>
      <div className='columns is-justify-content-center is-align-items-center'>
        <div className='column is-4'>{image}</div>
        <div className='column has-text-centered-touch'>
          <h1 className='title is-2'>{title}</h1>
        </div>
      </div>
      <ReactMarkdown children={description} />
    </React.Fragment>
  );
};

export default Header;
