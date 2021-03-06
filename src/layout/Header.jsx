import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

import Image from '../components/Image';
import Navigation from './Navigation';

const Header = ({ title, description, image, getAsset = null }) => {
  const renderedImage = (
    <Image image={image} getAsset={getAsset} className='img-fluid' />
  );

  return (
    <header>
      <div className='container mt-2' style={{ maxWidth: '960px' }}>
        <div className='row'>
          <div className='col-12 order-2 order-md-1'>
            <div className='row'>
              <div className='col-sm-4'>
                <Link to='/'>{renderedImage}</Link>
              </div>
              <div className='col d-flex align-items-center'>
                <h1 className='text-center display-5 fw-normal'>{title}</h1>
              </div>
            </div>
            <div>
              <ReactMarkdown className='' children={description} />
            </div>
          </div>
          <div className='col-12 order-1 order-md-2'>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
