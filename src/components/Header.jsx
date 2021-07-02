import React from 'react';

import { HTMLContent } from './Content';
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
        <div className='column'>
          <h1 className='title is-2'>{title}</h1>
        </div>
      </div>
      <HTMLContent className='block' content={description} />
    </React.Fragment>
  );
};

export default Header;
