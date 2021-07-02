import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image }) => {
  // empty string required to fill-in column in AlignContent component
  if (!image) return '';

  return !!image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt='' />
  ) : (
    <img src={image.url} alt='' />
  );
};

export default Image;
