import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    //   image={getAsset(data.image)}
    console.log(data.advantages);

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
          advantages: {
            ...data.advantages,
            ...Object.assign({}, getImage('logo', data.advantages.image)),
          },
          secret: {
            ...data.secret,
            ...Object.assign({}, getImage('logo', data.secret.image)),
          },
          treasure: {
            ...data.treasure,
            ...Object.assign({}, getImage('logo', data.treasure.image)),
          },
          plans: {
            ...data.plans,
            ...Object.assign({}, getImage('logo', data.plans.image)),
          },
          freeLesson: {
            ...data.freeLesson,
            ...Object.assign({}, getImage('logo', data.freeLesson.image)),
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
