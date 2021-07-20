import React from 'react';
import ReactMarkdown from 'react-markdown';

const Enroll = ({ steps }) => {
  const { title, steps: stepsList } = steps;

  // linkTarget = ''

  const renderList = (list) => {
    return list.map((step, index) => {
      return (
        <div className='row m-0 p-0' key={index + step.description.length}>
          <div className='col-12 d-flex justify-content-start p-0 align-items-center mb-3'>
            <div
              className='bg-secondary rounded-circle d-flex justify-content-center align-items-center text-light fs-5 me-3'
              style={{ minWidth: '32px' }}>
              <div>{index + 1}</div>
            </div>
            <ReactMarkdown
              disallowedElements={['p']}
              unwrapDisallowed={true}
              linkTarget='_blank'
              className='m-0 fs-5 flex-shrink-1'
              children={step.description}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row m-0'>{renderList(stepsList)}</div>
      </div>
    </section>
  );
};

export default Enroll;
