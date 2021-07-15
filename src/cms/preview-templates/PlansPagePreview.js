import React from 'react';
import PropTypes from 'prop-types';

import { PlansPageTemplate } from '../../templates/plans'

const PlansPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PlansPageTemplate
        data={{
          ...data,
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

PlansPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PlansPagePreview;
