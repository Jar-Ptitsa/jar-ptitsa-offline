import React from 'react';
import { navigate } from 'gatsby-link';
// import { v4 as uuidv4 } from 'uuid';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
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
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
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
          <div className='mb-3'>
            <label className='form-label' htmlFor='name'>
              Имя *
            </label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='surname'>
              Фамилия *
            </label>
            <input
              className='form-control'
              type='text'
              name='surname'
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              Email *
            </label>
            <input
              className='form-control'
              type='text'
              name='email'
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='phone'>
              Телефон *
            </label>
            <input
              className='form-control'
              type='text'
              name='phone'
              onChange={handleChange}
              required
            />
          </div>

          <input type='hidden' name='form-name' value='contact' />
          <input
            type='hidden'
            name='subject'
            value='[JAR-PTITSA LENDING PAGE] New request from'
          />
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
