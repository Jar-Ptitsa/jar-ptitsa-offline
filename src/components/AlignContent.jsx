import React from 'react';

const AlignContent = ({ align, content, image }) => {
  const hasImage = image && image.props.image;

  if (align === 'center')
    return (
      <div className='block'>
        {hasImage && <div className='pb-6'>{image}</div>}
        {content && <div className='block'>{content}</div>}
      </div>
    );

  if (align === 'right')
    return (
      <div className='columns is-align-items-center'>
        <div className='column'>
          {content && <div className='block'>{content}</div>}
        </div>
        {image && <div className='column is-4'>{image}</div>}
      </div>
    );

  if (align === 'left')
    return (
      <div className='columns is-align-items-center'>
        {image && <div className='column is-4'>{image}</div>}
        <div className='column'>
          <div className='block'>
            {content && <div className='block'>{content}</div>}
          </div>
        </div>
      </div>
    );

  return <div></div>;
};

export default AlignContent;
