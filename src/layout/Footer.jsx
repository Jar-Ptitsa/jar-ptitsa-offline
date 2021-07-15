import React from 'react';
import ReactMarkdown from 'react-markdown';
// icons
// https://www.npmjs.com/package/react-bootstrap-icons
import { EnvelopeFill } from 'react-bootstrap-icons';

// import * as Icon from 'react-bootstrap-icons';
// <Icon.ArrowRight />
// <ArrowRight color="royalblue" size={96} />


// import Image from '../components/Image';
import Navigation from './Navigation';

const Footer = ({
  title,
  description,
  image,
  address,
  telephones,
  email,
  youtube,
  twitter,
  facebook,
  instagram,
  getAsset = null,
}) => {
  // const renderedImage = (
  //   <Image image={image} getAsset={getAsset} className='img-fluid' />
  // );

  return (
    <footer>
      <p>{title}</p>
      <p>{address}</p>
      <Navigation />
      <ReactMarkdown className='' children={telephones} />
      <EnvelopeFill className="ml-4" />
      <p>{email}</p>
      <p>{youtube}</p>
      <p>{twitter}</p>
      <p>{facebook}</p>
      <p>{instagram}</p>
      <ReactMarkdown className='' children={description} />
    </footer>
  );
};

export default Footer;
