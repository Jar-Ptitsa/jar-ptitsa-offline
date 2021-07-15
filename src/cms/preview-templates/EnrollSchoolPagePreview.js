import React from 'react';
import PropTypes from 'prop-types';

import { EnrollSchoolPageTemplate } from '../../templates/enroll-school'

const EnrollSchoolPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <EnrollSchoolPageTemplate
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

EnrollSchoolPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default EnrollSchoolPagePreview;
