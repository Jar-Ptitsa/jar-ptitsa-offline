import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image, getAsset, className = '', style }) => {
  style = style || {};

  if (!image) return null;

  if (getAsset) {
    const imageObj = getAsset(image);
    return (
      <img src={imageObj.url} className={className} alt='' style={style} />
    );
  }

  if (!!image.childImageSharp) {
    return (
      <Img
        fluid={image.childImageSharp.fluid}
        className={className}
        alt=''
        style={style}
      />
    );
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} className={className} alt='' style={style} />;
  }
};

export default Image;
