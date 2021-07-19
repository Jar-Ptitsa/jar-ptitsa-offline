import React from 'react';

import AddressItem from './AddressItem';

const Address = ({ address }) => {
  const { title, address: addressList } = address;

  const renderAddressList = (list) => {
    return list.map((address, index) => {
      return <AddressItem {...address} key={index} />;
    });
  };

  return (
    <div className='row p-0 m-0 mb-3'>
      <h4 className='col-12 text-center text-sm-start mb-3 p-0 pt-3 pt-sm-0'>
        {title}
      </h4>
      <div className='row m-0 p-0'>{renderAddressList(addressList)}</div>
    </div>
  );
};

export default Address;
