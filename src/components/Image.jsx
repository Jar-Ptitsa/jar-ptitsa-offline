import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, getAsset, className = '' }) => {
  if (!image) return null;

  if (getAsset) {
    const imageObj = getAsset(image);
    return <img src={imageObj.url} className={className} alt='' />;
  }

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
