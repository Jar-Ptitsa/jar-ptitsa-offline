import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormInput from './FormInput';

const Form = ({ title, formInputs }) => {
  const renderInputs = (formInputs) => {
    return formInputs.map((input) => <FormInput {...input} key={uuidv4()} />);
  };

  return (
    <section className='mb-3'>
      <h2 className='fw-normal'>{title}</h2>

      <div className='row'>
        <form
          className='col-12 col-sm-8 col-md-6 mx-auto'
          name='contact'
          method='POST'
          action='/thanks/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'>
          {renderInputs(formInputs)}
          <input type='hidden' name='form-name' value='contact' />
          <div className='text-center'>
            <button type='submit' className='btn btn-success btn-lg'>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
