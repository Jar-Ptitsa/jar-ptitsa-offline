import React from 'react';
import { v4 as uuid } from 'uuid';

const FormInput = ({ inputType, inputLabel }) => {
  const inputId = uuid();

  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor={inputId}>
        {inputLabel}
      </label>
      <input className='form-control' type={inputType} id={inputId} onChange={handleChange} required />
    </div>
  );
};

export default FormInput;
