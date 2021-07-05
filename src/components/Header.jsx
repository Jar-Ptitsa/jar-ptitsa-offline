import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const Header = ({ title, description, image }) => {
  const renderedImage = <Image image={image} className='img-fluid' />;

  return (
    <header>
      <div className='row'>
        <div className='col-sm-4'>{renderedImage}</div>
        <div className='col d-flex align-items-center'>
          <h1 className='text-center display-5 fw-normal'>{title}</h1>
        </div>
      </div>
      <div>
        <ReactMarkdown className='' children={description} />
      </div>
    </header>
  );
};

export default Header;
