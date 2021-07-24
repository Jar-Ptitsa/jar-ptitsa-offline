import React from 'react';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const renderTelList = (list) => {
  return list.map((item) => {
    return (
      <a
        className='d-block text-decoration-none link-dark'
        href={`tel:${item.phone}`}
        key={item.phone}>
        {item.phone}
      </a>
    );
  });
};

const Contacts = ({ email, telephones }) => {
  return (
    <div className='row p-0 m-0'>
      <div className='row p-0 m-0 align-items-center'>
        <div className='col-12 col-sm-6 p-0'>
          <h4 className='text-center text-sm-start mb-3 p-0'>Телефоны</h4>
          <div className='  d-flex justify-content-center justify-content-sm-start align-items-center'>
            <TelephoneFill className='me-3' size={20} />
            <div>{renderTelList(telephones)}</div>
          </div>
        </div>
        <div className='col-12 col-sm-6 p-0 mt-3 mt-sm-0 '>
          <h4 className='text-center text-sm-start mb-3 p-0'>Email</h4>
          <div className='d-flex justify-content-center justify-content-sm-start align-items-center '>
            <EnvelopeFill className='me-3' size={20} />
            <a
              className='text-decoration-none link-dark'
              href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
