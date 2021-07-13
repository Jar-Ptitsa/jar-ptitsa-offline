import React from 'react';
import PropTypes from 'prop-types';

import { IndexPageTemplate } from '../../templates/index-page';

// const IndexPagePreview = ({ entry, getAsset }) => {

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        data={{
          // ...data,
          header: {
            ...data.header,
            getAsset,
          },
          reasons: {
            ...data.reasons,
            getAsset,
          },
          advantages: {
            ...data.advantages,
            getAsset,
          },
          wednesday: {
            ...data.wednesday,
          },
          treasure: {
            ...data.treasure,
            getAsset,
          },
          testimonials: {
            ...data.testimonials,
            getAsset,
          },
          plans: {
            ...data.plans,
            getAsset,
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
