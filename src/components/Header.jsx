import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const Header = ({ title, description, image, getAsset = null }) => {
  const renderedImage = (
    <Image image={image} getAsset={getAsset} className='img-fluid' />
  );

  return (
    <header>
      <div className='container mt-2' style={{ maxWidth: '960px' }}>
        <div className='row'>
          <div className='col-sm-4'>{renderedImage}</div>
          <div className='col d-flex align-items-center'>
            <h1 className='text-center display-5 fw-normal'>{title}</h1>
          </div>
        </div>
        <div>
          <ReactMarkdown className='' children={description} />
        </div>
      </div>
    </header>
  );
};

export default Header;
