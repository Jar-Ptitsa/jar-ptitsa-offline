import React from 'react';
import { Link } from 'gatsby';

import Image from './Image';

const renderList = (list, getAsset) => {
  return list.map((item) => {
    const keyId = item.title;

    return (
      <div className='col-6 col-sm-4 col-md-3' key={keyId}>
        <div className='row py-2 align-items-center flex-column flex-sm-row'>
          <div className='col-6 col-sm-4'>
            <Image
              image={item.image}
              getAsset={getAsset}
              className='img-fluid'
            />
          </div>
          <div className='col text-center text-sm-start'>
            <div className='lh-1 flex-shrink-1 text-break pt-3 pt-sm-0'>
              {item.title}
            </div>
            {item.link && (
              <Link to={`/${item.link}`} className='text-decoration-none'>
                Подробнее
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  });
};

const Classes = ({ classes, getAsset = '' }) => {
  const { title, list } = classes;

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row mb-3'>{renderList(list, getAsset)}</div>
      </div>
    </section>
  );
};

export default Classes;
