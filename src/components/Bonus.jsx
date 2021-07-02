import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

const Bonus = ({ title, description, image, alignImage, list }) => {
  const content = { title, description, image, alignImage };
  const alignContent = (alignImage && alignImage[0]) || 'center';

  const renderAlignContent = (content) => {
    console.log(content);
    const align = (content.alignImage && content.alignImage[0]) || 'center';
    console.log(align);

    const renderImage = (image) => {
      if (!image) return '';
      return !!image.childImageSharp ? (
        <Img fluid={image.childImageSharp.fluid} alt='' />
      ) : (
        <img src={image.url} alt='' />
      );
    };
    console.log(renderImage(content.image));

    if (align === 'center')
      return (
        <div className='block'>
          <h2 className='title is-4 has-text-weight-semibold'>
            {content.title}
          </h2>
          {renderImage(content.image)}
          <div className='block'>
            <ReactMarkdown
              className='block m-1'
              children={content.description}
            />
          </div>
        </div>
      );

    if (align === 'right')
      return (
        <div className='columns'>
          <div className='column'>
            <div className='block'>
              <h2 className='title is-4 has-text-weight-semibold'>
                {content.title}
              </h2>
              <div className='block'>
                <ReactMarkdown
                  className='block m-1'
                  children={content.description}
                />
              </div>
            </div>
          </div>
          <div className='column is-4'>{renderImage(content.image)}</div>
        </div>
      );

    if (align === 'left')
      return (
        <div className='columns'>
          <div className='column is-4'>{renderImage(content.image)}</div>
          <div className='column'>
            <div className='block'>
              <h2 className='title is-4 has-text-weight-semibold'>
                {content.title}
              </h2>
              <div className='block'>
                <ReactMarkdown
                  className='block m-1'
                  children={content.description}
                />
              </div>
            </div>
          </div>
        </div>
      );
  };

  const renderedList = (list) => {
    return list.map((item) => renderAlignContent(item));
  };

  return (
    <React.Fragment>
      <div>{renderAlignContent(content, alignContent)}</div>
      <div>{renderedList(list)}</div>
    </React.Fragment>
  );
};

export default Bonus;
