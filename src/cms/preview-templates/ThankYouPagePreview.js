import React from 'react';
import PropTypes from 'prop-types';

import { ThankYouPageTemplate } from '../../templates/thank-you';

const ThankYouPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ThankYouPageTemplate
        data={{
          ...data,
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
