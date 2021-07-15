import React from 'react';
import PropTypes from 'prop-types';

import { ContactsPageTemplate } from '../../templates/contacts'

const ContactsPagePreview = ({ entry,getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ContactsPageTemplate
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

ContactsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ContactsPagePreview;
