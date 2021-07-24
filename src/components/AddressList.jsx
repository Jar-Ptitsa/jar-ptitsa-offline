import React from 'react';

import AddressItem from './AddressItem';

const Address = ({ address }) => {
  const { title, address: addressList } = address;

  const renderAddressList = (list) => {
    return list.map((address, index) => {
      const bgColor = index === 0 || index % 2 === 0 ? '#E5EAE1' : '#ffffff';

      return (
        <section style={{ backgroundColor: `${bgColor}` }} key={index}>
          <div className='container pt-3' style={{ maxWidth: '960px' }}>
            <div className='row p-0 m-0'>
              <AddressItem {...address} key={index} />
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <React.Fragment>
      <section style={{ backgroundColor: '#E5EAE1' }}>
        <div className='container' style={{ maxWidth: '960px' }}>
          <h3 className='text-center text-sm-start m-0 p-0 pt-3'>{title}</h3>
        </div>
      </section>

      {renderAddressList(addressList)}
    </React.Fragment>
  );
};

export default Address;
