import React from 'react';

import Image from './Image';

const CardListItem = ({ item }) => {
  const renderCardItem = ({ title, description, image = null }) => {
    return (
      <div className='card is-primary m-2 py-2'>
        <div className='card-image'>{image && <Image image={image} />}</div>

        <p className='card-header-title'>{title}</p>

        <div className='has-text-centered'>{description}</div>
      </div>
    );
  };

  return <React.Fragment>{renderCardItem(item)}</React.Fragment>;
};

export default CardListItem;
