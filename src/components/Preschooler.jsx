import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowRightShort } from 'react-bootstrap-icons';

import AlignContent from './AlignContent';
import Image from './Image';

const Preschooler = ({
  title,
  image,
  description,
  by_age,
  alignImage = 'left',
  getAsset = '',
}) => {
  const renderClassesList = (list) => {
    return list.map((item, index) => {
      return (
        <div className='d-flex align-items-baseline' key={index}>
          <ArrowRightShort size={15} className='me-2 flex-shrink-0' />
          <div className='text-break flex-shrink-1'>{item.class}</div>
        </div>
      );
    });
  };

  const renderAgeList = (list) => {
    return list.map((item, index) => {
      const colClass =
        item.age === '5-6 лет'
          ? 'col-12 col-sm-9 col-md-8 mx-auto px-3'
          : 'col-12 col-sm-9 col-md-6 mx-auto px-3';

      return (
        <div className={`${colClass} mt-2`} key={index}>
          <div className='d-flex flex-column border border-dark rounded p-1'>
            <div
              className='d-flex align-items-center justify-content-center p-0 rounded'
              style={{ backgroundColor: '#000000', height: '40px' }}>
              <h4 className='fw-bold text-light'>{item.age}</h4>
            </div>
            <div className='d-flex border-top' key={index}>
              <div className='col'>
                {renderClassesList(item.classes_blocks)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderImage = (
    <Image
      image={image}
      getAsset={getAsset}
      className='img-fluid rounded col-sm-10 mx-auto d-block'
    />
  );

  const content = (
    <React.Fragment>
      <ReactMarkdown className='' children={description} />
    </React.Fragment>
  );
  // set content alignment
  const leftContent = alignImage === 'left' ? renderImage : content;
  const rightContent = alignImage === 'right' ? renderImage : content;

  return (
    <section style={{ backgroundColor: '#E5EAE1' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div>
          <AlignContent
            align={alignImage}
            leftContent={leftContent}
            rightContent={rightContent}
          />
        </div>
        <div className='row mb-3'>{renderAgeList(by_age)}</div>
      </div>
    </section>
  );
};

export default Preschooler;
