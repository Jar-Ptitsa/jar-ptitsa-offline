import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';
import Form from './Form';

const DirectorForm = ({ principal, getAsset = null }) => {
  const { image, description, contactForm } = principal;

  const leftContent = (
    <Image
      image={image}
      getAsset={getAsset}
      className='img-fluid rounded col-8 col-sm-10 mx-auto d-block'
    />
  );

  const rightContent = <ReactMarkdown className='' children={description} />;

  const rightClass = !leftContent ? 'col offset-sm-4' : 'col mt-3 mt-sm-0';
  return (
    <div className='row m-0 p-0 flex-column flex-sm-row'>
      <div className='col-12 col-sm-6'>
        <div className='d-flex flex-column align-items-center'>
          {leftContent && <div className='col-sm-4'>{leftContent}</div>}
          <div className={rightClass}>{rightContent}</div>
        </div>
      </div>
      <div className='col-12 col-sm-6'>
        <Form formData={contactForm} />
      </div>
    </div>
  );
};

export default DirectorForm;
