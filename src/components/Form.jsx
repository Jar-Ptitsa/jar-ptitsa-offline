import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormInput from './FormInput';
import AlignContent from './AlignContent';
import RenderContent from './RenderContent';

const Form = ({ title, description, formInputs }) => {
  const renderInputs = (formInputs) => {
    return formInputs.map((input) => <FormInput {...input} key={uuidv4()} />);
  };

  const content = { title, description };

  return (
    <section className='pt-6'>
      <AlignContent
        align='center'
        content={
          <RenderContent
            {...content}
            titleClass='title is-4 has-text-weight-semibold'
            descriptionClass='block m-1'
          />
        }
      />

      <div className='columns'>
        <form className='column is-8 is-offset-2' name="contact" method="POST" data-netlify="true">
          {renderInputs(formInputs)}
          <div className='has-text-centered'>
            <button type='submit' className='button is-success is-large'>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
