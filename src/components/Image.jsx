import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, className = '' }) => {
  // empty string required to fill-in column in AlignContent component
  if (!image) return '';

  return !!image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} className={className} alt='' />
  ) : (
    <img src={image.url} className={className} alt='' />
  );
};

export default Image;
