import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, className = '' }) => {
  if (!image) return null;

  if (!!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} className={className} alt='' />
    );
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} className={className} alt='' />;
    // <img src={image.url} className={className} alt='' />
  }
};

export default Image;
