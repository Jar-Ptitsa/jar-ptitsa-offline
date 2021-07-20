import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

const ThankYou = ({ title, description, getAsset = null }) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 '>
      <div className='d-flex flex-column align-items-center col-10 col-md-6 mx-auto alert alert-success shadow'>
        <h3 className='fw-normal text-center'>{title}</h3>
        {description && (
          <ReactMarkdown className='lead' children={description} />
        )}
        <Link to='/enroll-school' className='btn btn-md btn-outline-success'>
          Назад
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
