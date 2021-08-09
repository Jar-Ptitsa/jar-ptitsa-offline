import React from 'react';
import ReactMarkdown from 'react-markdown';

const SchoolRules = ({ title, description }) => {
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div>
          <ReactMarkdown className='' children={description} />
        </div>
      </div>
    </section>
  );
};

export default SchoolRules;
