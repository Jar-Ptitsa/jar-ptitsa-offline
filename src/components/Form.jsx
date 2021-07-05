import React from 'react';
import { navigate } from 'gatsby-link';
import { v4 as uuidv4 } from 'uuid';

import FormInput from './FormInput';

const Form = ({ title, formInputs }) => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

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
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}>
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
