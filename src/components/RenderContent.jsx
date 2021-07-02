import React from 'react';
import ReactMarkdown from 'react-markdown';

const RenderContent = ({
  title,
  description,
  titleClass = '',
  descriptionClass = '',
}) => {
  console.log(title);
  console.log(description);
  return (
    <div className='block'>
      {title && <h2 className={titleClass}>{title}</h2>}
      {description && (
        <ReactMarkdown className={descriptionClass} children={description} />
      )}
    </div>
  );
};

export default RenderContent;
