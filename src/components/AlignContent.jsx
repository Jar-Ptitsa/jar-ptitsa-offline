import React from 'react';

const AlignContent = ({ align = 'center', leftContent, rightContent }) => {
  if (align === 'center')
    return (
      <React.Fragment>
        {leftContent && leftContent}
        {rightContent && rightContent}
      </React.Fragment>
    );

  if (align === 'left') {
    const rightClass = !leftContent ? 'col offset-sm-4' : 'col mt-3 mt-sm-0';

    return (
      <div className='row align-items-center'>
        {leftContent && <div className='col-sm-4'>{leftContent}</div>}
        <div className={rightClass}>{rightContent}</div>
      </div>
    );
  }

  if (align === 'right') {
    return (
      <div className='row align-items-center'>
        <div className='col-sm-8 order-2 order-sm-1 mt-3 mt-sm-0'>
          {leftContent}
        </div>
        {rightContent && (
          <div className='col-sm-4 order-1 order-sm-2'>{rightContent}</div>
        )}
      </div>
    );
  }
};

export default AlignContent;
