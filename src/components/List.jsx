import React from 'react';
import ListItem from './ListItem';

const List = ({ list, listType }) => {
  const renderedList = (list) => {
    return list.map((item) => <ListItem item={item} />);
  };

  const result = (listType) => {
    return (
      <div className='content'>
        {listType === 'bulleted' && <ul>{renderedList(list, listType)}</ul>}
        {listType === 'numbered' && (
          <ol type='1'>{renderedList(list, listType)}</ol>
        )}
        {listType === 'none' && <div>{renderedList(list, listType)}</div>}
      </div>
    );
  };

  return result(listType);
};

export default List;
