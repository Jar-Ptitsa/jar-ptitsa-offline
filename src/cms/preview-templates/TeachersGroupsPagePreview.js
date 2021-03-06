import React from 'react';
import PropTypes from 'prop-types';

import {TeachersGroupsPageTemplate} from '../../templates/teachers-groups'

const TeachersGroupsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <TeachersGroupsPageTemplate
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

TeachersGroupsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TeachersGroupsPagePreview;
