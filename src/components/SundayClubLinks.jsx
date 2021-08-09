import React from 'react';
import { Link } from 'gatsby';

const SundayClubLinks = () => {
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-5' style={{ maxWidth: '960px' }}>
        <div className='d-flex justify-content-center'>
          <Link to='/enroll-school' className='btn btn-lg btn-danger'>
            Стать членом клуба
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SundayClubLinks;
