import React from 'react';
import { navigate } from 'gatsby-link';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const renderInputs = (formInputs, handleChange) => {
  const renderInput = ({ inputType, inputLabel }) => {
    return (
      <div className='mb-3' key={inputLabel}>
        <label className='form-label'>{inputLabel}</label>
        <input
          className='form-control'
          type={inputType}
          name={inputLabel}
          onChange={handleChange}
          required
        />
      </div>
    );
  };

  return formInputs.map((input) => renderInput({ ...input }));
};

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
        subject: 'JAR-PTITSA LENDING PAGE - New request',
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    // <section className='mb-3'>
    <section style={{ backgroundColor: '#e5eae1' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal'>{title}</h2>

        <div className='row'>
          <form
            className='col-12 col-sm-8 col-md-6 mx-auto'
            name='contact'
            method='POST'
            action='/thank-you'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={handleSubmit}>
            {renderInputs(formInputs, handleChange)}
            <input type='hidden' name='form-name' value='contact' />
            <input
              type='hidden'
              name='subject'
              value='JAR-PTITSA LENDING PAGE - New request'
            />
            <div className='text-center'>
              <button type='submit' className='btn btn-success btn-lg'>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
