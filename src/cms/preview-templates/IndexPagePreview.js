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

    const dataProcessing = (obj) => {
      console.log('object in', obj);
      const newObj = { ...obj };

      if (obj.image) {
        newObj.image = getAsset(newObj.image);
      }

      // if (obj.list) {
      //   newObj.list = obj.list.map((item) => {
      //     return { ...item, image: getAsset(item.image) };
      //   });
      // }

      console.log('object exit', newObj);
      return newObj;
    };

    return (
      <IndexPageTemplate
        data={{
          ...data,
          header: {
            ...dataProcessing(data.header),
            // ...Object.assign({}, getImage('image', data.header.image)),
          },
          reasons: {
            ...data.reasons,
          },
          advantages: {
            ...data.advantages,
          },
          // wednesday: {
          //   ...data.wednesday,
          // },
          // treasure: {
          //   ...dataProcessing(data.treasure),
          // },
          testimonials: {
            ...data.testimonials,
          },
          plans: {
            ...dataProcessing(data.plans),
          },
          freeLesson: {
            ...data.freeLesson,
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
