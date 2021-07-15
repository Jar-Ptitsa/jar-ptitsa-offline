import React from 'react';
import PropTypes from 'prop-types';

import { ClassesSchedulePageTemplate } from '../../templates/classes-schedule';

const ClassesSchedulePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ClassesSchedulePageTemplate
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

ClassesSchedulePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ClassesSchedulePagePreview;
