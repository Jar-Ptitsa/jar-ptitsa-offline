import React from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import Image from './Image';

const Plans = ({ title, description, list, afterwords }) => {
  const renderList = (list) => {
    return list.map(({ title, description, image }) => {
      return (
        <div className='col-6 col-md-4 mb-3' key={uuid()}>
          <div className='card rounded'>
            {image && (
              <Image
                image={image}
                className='card-img-top img-fluid d-flex mx-auto w-50 mt-3'
              />
            )}
            <div className='card-body text-center'>
              <h4 className='card-title'>{title}</h4>
              <ReactMarkdown className='lead' children={description} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <h2 className='fw-normal'>{title}</h2>
      {description && <ReactMarkdown className='' children={description} />}
      <div className='row justify-content-evenly mt-3'>{renderList(list)}</div>
      {afterwords && <ReactMarkdown className='' children={afterwords} />}
    </React.Fragment>
  );
};

export default Plans;
