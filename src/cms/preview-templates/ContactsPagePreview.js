import React from 'react';
import PropTypes from 'prop-types';

import { ContactsPageTemplate } from '../../templates/contacts'

const ContactsPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ContactsPageTemplate
        data={{
          ...data,
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
