import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const Route = ({ routes, getAsset = '' }) => {
  const { title, image, steps } = routes;

  const renderOptions = (list) => {
    return list.map((option, index) => {
      return (
        <li key={index + option.option}>
          <ReactMarkdown
            disallowedElements={['p']}
            unwrapDisallowed={true}
            className=''
            children={option.option}
          />
        </li>
      );
    });
  };

  const renderList = (list) => {
    return list.map((step, index) => {
      return (
        <div className='row m-0 p-0' key={index + step.title}>
          <div className='col-12 d-flex justify-content-center justify-content-sm-start p-0 align-items-center mb-3'>
            <div
              className='bg-secondary rounded-circle d-flex justify-content-center align-items-center text-light fs-5 me-3'
              style={{ width: '32px' }}>
              <div>{index + 1}</div>
            </div>
            <h5 className='m-0'>{step.title}</h5>
          </div>
          <ul className='col ms-3 mb-3 px-3'>{renderOptions(step.options)}</ul>
        </div>
      );
    });
  };

  return (
    <div className='row p-0 m-0'>
      <h4 className='text-center text-sm-start mb-3 p-0 pt-3 pt-sm-0'>
        {title}
      </h4>
      {renderList(steps)}
      {image && (
        <div className='row m-0 p-0 pb-3'>
          <div className='col-12 d-flex justify-content-center justify-content-sm-start p-0 align-items-center mb-3'>
            <div
              className='bg-secondary rounded-circle d-flex justify-content-center align-items-center text-light fs-5 me-3'
              style={{ width: '32px' }}>
              <div>3</div>
            </div>
            <h5 className=''>Как добраться от остановок</h5>
          </div>
          <div className='col-10 mx-auto p-0'>
            <Image image={image} getAsset={getAsset} className='img-fluid' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Route;
