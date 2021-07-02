import React from 'react';
import RenderContent from './RenderContent';

const ListItem = ({ item }) => {
  console.log(item);

  return <li><RenderContent {...item} /></li>;
};

export default ListItem;
