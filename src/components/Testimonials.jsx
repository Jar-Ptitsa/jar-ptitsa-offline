import React from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import Image from './Image';

const Testimonials = ({ title, description, list }) => {
  const renderList = (list) => {
    return list.map(({ image, author, quote }) => {
      return (
        <div className='col-12 col-md-6 mb-3' key={uuid()}>
          <div className='row align-items-sm-top'>
            <div className='col-12 col-sm-4'>
              <Image image={image} className='img-fluid w-50 mx-auto d-block' />
            </div>
            <div className='col'>
              <figure>
                <blockquote className='blockquote'>
                  <ReactMarkdown className='' children={quote} />
                </blockquote>
                <figcaption className='blockquote-footer text-center'>
                  <cite title={author}>{author}</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2 className='fw-normal'>{title}</h2>
      <ReactMarkdown className='' children={description} />
      <div className='row mb-3'>{renderList(list)}</div>
    </div>
  );
};

export default Testimonials;
