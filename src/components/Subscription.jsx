import React from 'react';
import { navigate } from 'gatsby-link';
import { ArrowRight } from 'react-bootstrap-icons';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Subscription = ({ className }) => {
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
        subject: 'JAR-PTITSA OFFLINE - subscription',
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <div className={className}>
      <div className='col-12 p-0'>
        <h6 className='text-center text-sm-start'>Оставайтесь с нами</h6>
      </div>
      <form
        className='col-12 col-sm-10 p-0'
        name='subscription'
        method='POST'
        action='/thank-you'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}>
        <input type='hidden' name='form-name' value='subscription' />
        <input type='hidden' name='subject' />

        <div class='input-group mb-3'>
          <input
            type='text'
            class='form-control'
            placeholder='Email'
            onChange={handleChange}
          />
          <button class='btn btn-outline-secondary' type='submit'>
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
