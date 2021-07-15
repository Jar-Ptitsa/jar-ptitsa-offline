import React from 'react';
import ReactMarkdown from 'react-markdown';
// icons
// https://www.npmjs.com/package/react-bootstrap-icons
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

// import * as Icon from 'react-bootstrap-icons';
// <Icon.ArrowRight />
// <ArrowRight color="royalblue" size={96} />

const Footer = ({
  title,
  description,
  address,
  telephones,
  email,
  youtube,
  twitter,
  facebook,
  instagram,
}) => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className='container pt-3' style={{ maxWidth: '960px' }}>
        <div className='row'>
          <div className='col-12 col-sm-6'>{address}</div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className='d-flex align-items-center'>
              <TelephoneFill className='me-3' />
              <div>
                <ReactMarkdown className='' children={telephones} />
              </div>
            </div>
            <div className='d-flex align-items-center w-100'>
              <EnvelopeFill className='me-3' />
              <a className='text-decoration-none' href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
          <div className='col'>TOP</div>
        </div>
        <div className='text-center mt-3'>
          Copyright &copy; {title} {new Date().getFullYear()}
        </div>
      </div>

      <p>{address}</p>
      <ReactMarkdown className='' children={telephones} />
      <p>{youtube}</p>
      <p>{twitter}</p>
      <p>{facebook}</p>
      <p>{instagram}</p>
      <ReactMarkdown className='' children={description} />
    </footer>
  );
};

export default Footer;
