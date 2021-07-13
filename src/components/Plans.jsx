import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const renderList = (list, getAsset) => {
  return list.map(({ title, description, image }) => {
    return (
      <div className='col-6 col-md-4 mb-3' key={title}>
        <div className='card rounded shadow'>
          {image && (
            <Image
              image={image}
              getAsset={getAsset}
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

const Plans = ({ title, description, list, afterwords, getAsset = null }) => {
  return (
    <section>
      <div className='container' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal'>{title}</h2>
        {description && <ReactMarkdown className='' children={description} />}
        <div className='row justify-content-evenly mt-3'>
          {renderList(list, getAsset)}
        </div>
        {afterwords && <ReactMarkdown className='' children={afterwords} />}
      </div>
    </section>
  );
};

export default Plans;
