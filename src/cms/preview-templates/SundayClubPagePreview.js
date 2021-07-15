import React from 'react';
import PropTypes from 'prop-types';

import { SundayClubPageTemplate } from '../../templates/sunday-club'

const SundayClubPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <SundayClubPageTemplate
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

SundayClubPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default SundayClubPagePreview;
