import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';
import ShowGoogleMap from './ShowGoogleMap';

const AddressItem = ({
  title,
  street,
  city,
  zip,
  country,
  coords,
  steps,
  getAsset = '',
}) => {
  const latLngObj = (coords) => {
    const coordsArr = coords.split(', ');
    return {
      lat: +coordsArr[0],
      lng: +coordsArr[1],
    };
  };

  const renderOptions = (list) => {
    return list.map((option, index) => {
      return (
        <li key={index + option.option}>
          <ReactMarkdown
            disallowedElements={['p']}
            unwrapDisallowed={true}
            className=''
            children={option.option}
          />
        </li>
      );
    });
  };

  const renderSteps = (list, getAsset = '') => {
    const style = { height: '300px', objectFit: 'fill' };

    return list.map((step, index) => {
      return (
        <React.Fragment key={index + step.title}>
          <div className='col-12 p-0 mb-3'>
            <h6 className='m-0 pb-2 text-uppercase'>{step.title}</h6>
            <ul className='col m-0 ms-1 px-3'>{renderOptions(step.options)}</ul>

            <Image
              image={step.image}
              getAsset={getAsset}
              className='col-12 col-sm-10 mt-3 w-100 rounded'
              style={style}
            />
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className='col-12 p-0'>
      <div className='row m-0 p-0'>
        <div className='col-12 col-sm-6 p-0'>
          <h4 className='text-center text-sm-start'>{title}</h4>

          <div className='d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0 mb-sm-3'>
            <div>{street}</div>
            <div>{city}</div>
            <div>{zip}</div>
            <div>{country}</div>
          </div>

          <div className='col-12 d-none d-sm-block'>
            <h5 className='text-center text-sm-start'>Как добраться</h5>
            {renderSteps(steps, getAsset)}
          </div>
        </div>

        <div className='col-12 col-sm-6 pb-3' style={{ minHeight: '300px' }}>
          <ShowGoogleMap coords={latLngObj(coords)} />
        </div>

        <div className='col-12 d-block d-sm-none'>
          <h5 className='text-center text-sm-start'>Как добраться</h5>
          {renderSteps(steps, getAsset)}
        </div>
      </div>
    </div>
  );
};

export default AddressItem;
