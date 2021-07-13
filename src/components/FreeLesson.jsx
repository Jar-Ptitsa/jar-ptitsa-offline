import React from 'react';
import ReactMarkdown from 'react-markdown';

const FreeLesson = ({ title, description }) => {
  return (
    <section style={{ backgroundColor: '#e5eae1' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal'>{title}</h2>
        {description && <ReactMarkdown className='' children={description} />}
      </div>
    </section>
  );
};

export default FreeLesson;
