import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';
import TabsComponent from './TabsComponent';

const ContactDirector = ({ principal, getAsset = '' }) => {
  const { image, description, tabs } = principal;

  return (
    <div className='row m-0 p-0 flex-column flex-sm-row'>
      <div className='col-12 col-md-4'>
        <div className='row flex-row flex-md-column m-0 p-0 align-items-center pb-sm-3 pb-md-0'>
          <div className='col-12 col-sm-4 col-md-8'>
            <Image
              image={image}
              getAsset={getAsset}
              className='img-fluid rounded col-8 col-sm-10 mx-auto d-block'
            />
          </div>
          <div className='col mt-3 mt-sm-0'>
            <figure>
              <blockquote className='blockquote'>
                <ReactMarkdown className='' children={description} />
              </blockquote>
              <figcaption className='blockquote-footer text-end'>
                <cite title={principal.signature}>{principal.signature}</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-8'>
        <TabsComponent tabsContent={tabs} />
      </div>
    </div>
  );
};

export default ContactDirector;
