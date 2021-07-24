import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

const Policy = ({ title, description }) => {
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div>
          <ReactMarkdown className='' children={description} />
        </div>
        <div className='d-flex justify-content-center'>
          <Link to='/' className='btn btn-md btn-success'>
            Я СОГЛАСЕН
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Policy;
