import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    //   image={getAsset(data.image)}

    const getImage = (name, image) => {
      if (image) {
        return { [name]: getAsset(image) };
      }

      return { [name]: null };
    };

    return (
      <IndexPageTemplate
        data={{
          ...data,
          header: {
            ...data.header,
            ...Object.assign({}, getImage('logo', data.header.logo)),
          },
          bonus: {
            ...data.bonus,
            ...Object.assign({}, getImage('logo', data.bonus.image)),
          },
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
