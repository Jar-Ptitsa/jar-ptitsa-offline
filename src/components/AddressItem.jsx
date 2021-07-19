import React from 'react';

import ShowGoogleMap from './GoogleMap';

const AddressItem = ({ title, street, city, zip, country, coords }) => {
  const latLngObj = (coords) => {
    const coordsArr = coords.split(', ');
    return {
      lat: +coordsArr[0],
      lng: +coordsArr[1],
    };
  };

  return (
    <div className='col-12 p-1 mb-3 border rounded'>
      <div className='row m-0 p-0'>
        <div className='col-12 col-sm-5 p-0'>
          <h5 className='text-center text-sm-start'>{title}</h5>
        </div>
        <div className='col-12 col-sm-7'>
          <div className='d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0 mb-sm-3'>
            <div>{street}</div>
            <div>{city}</div>
            <div>{zip}</div>
            <div>{country}</div>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <ShowGoogleMap coords={latLngObj(coords)} />
      </div>
    </div>
  );
};

export default AddressItem;
