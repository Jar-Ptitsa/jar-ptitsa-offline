import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

import Image from './Image';
import VideoDetail from './VideoDetail';

// render teachers photos
const renderList = (list, getAsset) => {
  return list.map((image) => {
    const keyId = image.image.childImageSharp
      ? image.image.childImageSharp.fluid.src
      : image.image.url; // TODO when getAsset will be involved - check

    return (
      <div className='col-6 col-sm-4' key={keyId}>
        <Image
          image={image.image}
          getAsset={getAsset}
          className='img-fluid w-75 mx-auto d-block'
        />
      </div>
    );
  });
};

const Treasure = ({ title, teachers, dance, getAsset = null }) => {
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start'>{title}</h2>
        <ReactMarkdown className='' children={teachers.description} />
        <div className='row mb-3'>{renderList(teachers.list, getAsset)}</div>
        <div className='row'>
          <div className='col-md-4 pt-3 order-2 order-md-1'>
            <VideoDetail videoId={dance.video} />
          </div>
          <div className='col order-md-2'>
            <ReactMarkdown className='' children={dance.description} />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center pb-3'>
        <Link
          to='/teachers-groups'
          className='btn btn-md btn-outline-secondary'>
          Подробнее
        </Link>
      </div>
    </section>
  );
};

export default Treasure;
