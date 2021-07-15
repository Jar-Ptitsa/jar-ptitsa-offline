import React from 'react';
import PropTypes from 'prop-types';

import { HeaderLayoutTemplate } from '../../templates/header-layout';

const HeaderLayoutPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <HeaderLayoutTemplate
        data={{
            ...data,
            getAsset,
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

HeaderLayoutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HeaderLayoutPreview;
