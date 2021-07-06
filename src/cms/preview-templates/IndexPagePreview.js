import React from 'react';
import PropTypes from 'prop-types';

import { IndexPageTemplate } from '../../templates/index-page';

// const IndexPagePreview = ({ entry, getAsset }) => {

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        data={{
          // ...data,
          header: {
            ...data.header,
          },
          reasons: {
            ...data.reasons,
          },
          advantages: {
            ...data.advantages,
          },
          wednesday: {
            ...data.wednesday,
          },
          treasure: {
            ...data.treasure,
          },
          testimonials: {
            ...data.testimonials,
          },
          plans: {
            ...data.plans,
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
