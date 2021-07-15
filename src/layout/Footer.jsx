import React from 'react';
import { Link } from 'gatsby';
// icons
// https://www.npmjs.com/package/react-bootstrap-icons
import {
  EnvelopeFill,
  TelephoneFill,
  Youtube,
  Facebook,
  Instagram,
  ArrowUpCircleFill,
  PinMapFill,
} from 'react-bootstrap-icons';

// import * as Icon from 'react-bootstrap-icons';
// <Icon.ArrowRight />
// <ArrowRight color="royalblue" size={96} />

const renderTelList = (list) => {
  return list.map((item) => {
    return (
      <a
        className='d-block text-decoration-none link-light'
        href={`tel:${item.phone}`}
        key={item.phone}>
        {item.phone}
      </a>
    );
  });
};

const Footer = ({
  title,
  address,
  telephones,
  email,
  youtube,
  facebook,
  instagram,
}) => {
  const { street, city, zip, country } = address;

  return (
    <footer style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <Link
              className='ms-0 ms-sm-1 mb-5 mb-sm-3 mb-md-0 d-flex flex-column flex-md-row align-items-center text-decoration-none link-light'
              to='/contacts'>
              <PinMapFill
                className='me-0 me-md-4 mb-md-1 mt-md-0 mb-3 mt-3'
                size={40}
              />
              <div className='d-flex flex-column align-items-center align-items-sm-start'>
                <div>{street}</div>
                <div>{city}</div>
                <div>{zip}</div>
                <div>{country}</div>
              </div>
            </Link>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className='d-flex justify-content-center justify-content-sm-start align-items-center '>
              <TelephoneFill className='me-3' size={20} />
              <div>{renderTelList(telephones)}</div>
            </div>
            <div className='mt-5 mt-sm-3 d-flex justify-content-center justify-content-sm-start align-items-center '>
              <EnvelopeFill className='me-3' size={20} />
              <a
                className='text-decoration-none link-light'
                href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div className='pt-3 fw-bold d-none d-sm-block'>Мы в соцсетях:</div>
            <div className='mt-5 mt-sm-0 me-0 me-sm-5 d-flex align-items-center justify-content-around justify-content-md-start'>
              <a
                className='text-decoration-none link-light'
                target='_blank'
                rel='noreferrer'
                href={youtube}>
                <Youtube className='mt-3 me-5' size={35} />
              </a>
              <a
                className='text-decoration-none link-light'
                target='_blank'
                rel='noreferrer'
                href={facebook}>
                <Facebook className='mt-3 me-5' size={35} />
              </a>
              <a
                className='text-decoration-none link-light'
                target='_blank'
                rel='noreferrer'
                href={instagram}>
                <Instagram className='mt-3' size={35} />
              </a>
            </div>
          </div>

          <div className='col'>
            <button
              className='d-flex align-items-center justify-content-center justify-content-md-end my-5 my-sm-3 my-md-0'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                cursor: 'pointer',
                border: 'none',
                padding: '0',
                backgroundColor: '#000',
                color: '#fff',
              }}>
              <ArrowUpCircleFill className='me-3' size={25} />
              <div className='me-1'>ВВЕРХ</div>
            </button>
          </div>
        </div>
        <div className='text-center mt-0 mt-md-3'>
          {title} &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
