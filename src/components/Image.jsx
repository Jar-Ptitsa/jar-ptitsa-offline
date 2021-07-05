import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, className = '' }) => {
  if (!image) return null;

  return !!image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} className={className} alt='' />
  ) : (
    <img src={image.url} className={className} alt='' />
  );
};

export default Image;
