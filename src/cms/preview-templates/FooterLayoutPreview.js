import React from 'react';
import PropTypes from 'prop-types';

import { FooterLayoutTemplate } from '../../templates/footer-layout';

const FooterLayoutPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <FooterLayoutTemplate
        data={{
          ...data,
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

FooterLayoutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FooterLayoutPreview;
