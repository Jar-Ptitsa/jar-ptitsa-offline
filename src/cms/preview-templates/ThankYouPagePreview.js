import React from 'react';
import PropTypes from 'prop-types';

import { ThankYouPageTemplate } from '../../templates/thank-you';

const ThankYouPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ThankYouPageTemplate
        data={{
          ...data,
          getAsset
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ThankYouPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ThankYouPagePreview;
