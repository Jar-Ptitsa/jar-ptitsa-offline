import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import AlignContent from './AlignContent';

const Bonus = ({ title, description, image, alignImage, list }) => {
  const content = { title, description, image, alignImage };
  console.log(content);
  const align = (alignImage && alignImage[0]) || 'center';

  const renderContent = (content) => {
    return (
      <div className='block'>
        <h2 className='title is-4 has-text-weight-semibold'>{content.title}</h2>
        {content.description && (
          <ReactMarkdown className='block m-1' children={content.description} />
        )}
      </div>
    );
  };

  const renderImage = (image) => {
    if (!image) return '';
    return !!image.childImageSharp ? (
      <Img fluid={image.childImageSharp.fluid} alt='' />
    ) : (
      <img src={image.url} alt='' />
    );
  };

  const renderAlignContent = (content) => {
    const align = (content.alignImage && content.alignImage[0]) || 'center';

    if (align === 'center')
      return (
        <div className='block'>
          {content.image && (
            <div className='pb-6'>{renderImage(content.image)}</div>
          )}
          <h2 className='title is-4 has-text-weight-semibold'>
            {content.title}
          </h2>
          {content.description && (
            <div className='block'>
              <ReactMarkdown
                className='block m-1'
                children={content.description}
              />
            </div>
          )}
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
              {content.description && (
                <div className='block'>
                  <ReactMarkdown
                    className='block m-1'
                    children={content.description}
                  />
                </div>
              )}
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
              {content.description && (
                <div className='block'>
                  <ReactMarkdown
                    className='block m-1'
                    children={content.description}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      );
  };

  const renderedList = (list) => {
    return list.map((item) => renderAlignContent(item));
  };

  return (
    <section className='pt-6'>
      <AlignContent
        align={align}
        content={renderContent(content)}
        image={renderImage(content.image)}
      />
      <div>{list && renderedList(list)}</div>
    </section>
  );
};

export default Bonus;
