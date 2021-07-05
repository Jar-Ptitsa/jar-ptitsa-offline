import React from 'react';
import ReactMarkdown from 'react-markdown';

const FreeLesson = ({ title, description }) => {
  return (
    <section>
      <h2 className='fw-normal'>{title}</h2>
      {description && <ReactMarkdown className='' children={description} />}
    </section>
  );
};

export default FreeLesson;
