import React from 'react';

const FormInput = ({ inputType, inputLabel }) => {
  return (
    <div className='field'>
      <label className='label'>{inputLabel}</label>
      <div className='control'>
        <input className='input' type={inputType} required />
      </div>
    </div>
  );
};

export default FormInput;
