import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
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
            ...Object.assign({}, getImage('image', data.bonus.image)),
          },
          advantages: {
            ...data.advantages,
            ...Object.assign({}, getImage('image', data.advantages.image)),
          },
          secret: {
            ...data.secret,
            ...Object.assign({}, getImage('image', data.secret.image)),
          },
          treasure: {
            ...data.treasure,
            ...Object.assign({}, getImage('image', data.treasure.image)),
          },
          plans: {
            ...data.plans,
            ...Object.assign({}, getImage('image', data.plans.image)),
          },
          freeLesson: {
            ...data.freeLesson,
            ...Object.assign({}, getImage('image', data.freeLesson.image)),
          },
          formData: {
            ...data.formData,
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
