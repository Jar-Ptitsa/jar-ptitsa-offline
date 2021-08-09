import React from 'react';
import { Link } from 'gatsby';

const IndexLinks = () => {
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-5' style={{ maxWidth: '960px' }}>
        <div className='d-flex justify-content-center'>
          <Link to='/plans' className='btn btn-lg btn-secondary me-3 me-sm-5'>
            Стоимость обучения
          </Link>
          <Link to='/enroll-school' className='btn btn-lg btn-secondary'>
            Записаться в школу
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndexLinks;
