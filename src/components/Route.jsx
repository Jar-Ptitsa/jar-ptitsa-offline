import React from 'react';
import ReactMarkdown from 'react-markdown';

const Route = ({ routes }) => {
  const { title, steps } = routes;

  const renderOptions = (list) => {
    return list.map((option, index) => {
      return (
        <li key={index + option.option}>
          <ReactMarkdown
            disallowedElements={['p']}
            unwrapDisallowed={true}
            className=''
            children={option.option}
          />
        </li>
      );
    });
  };

  const renderList = (list) => {
    return list.map((step, index) => {
      return (
        <React.Fragment key={index + step.title}>
          <div className='col-12 p-0 mb-3'>
            <h5 className='m-0 mb-3'>{step.title}</h5>
            <ul className='col m-0 ms-1 px-3'>{renderOptions(step.options)}</ul>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className='row p-0 m-0'>
      <h4 className='col-12 text-center text-sm-start mb-3 p-0'>{title}</h4>
      {renderList(steps)}
    </div>
  );
};

export default Route;
