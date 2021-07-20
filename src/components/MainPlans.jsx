import React from 'react';

import Image from './Image';

const MainPlans = ({ title, main_plans, getAsset }) => {
  const { title: plansTitle, plans, footnotes } = main_plans;

  const renderPlansList = (list, getAsset) => {
    return list.map((plan, index) => {
      return (
        <div
          className='col-11 mx-auto col-sm-6 col-md-4 mb-3 mb-md-0'
          key={index + plan.price}>
          <div className='card border-dark text-center'>
            <h5
              class='card-header d-flex justify-content-center align-items-center'
              style={{ height: '50px' }}>
              <div>{plan.title}</div>
            </h5>
            <Image
              image={plan.image}
              getAsset={getAsset}
              className='card-image-top w-50 mx-auto mt-2'
            />
            <div className='card-body '>
              <h6 className='card-subtitle mb-2 text-muted'>{plan.hours}</h6>
              {plan.description && (
                <div
                  className='card-text d-flex justify-content-center align-items-center'
                  style={{ height: '50px' }}>
                  {plan.description}
                </div>
              )}
              {!plan.description && (
                <div
                  className='d-none d-md-block card-text d-flex justify-content-center align-items-center'
                  style={{ height: '50px' }}>
                  &nbsp;
                </div>
              )}

              <div
                className='rounded p-2 mt-3 fw-bold'
                style={{ backgroundColor: '#E5EAE1' }}>
                {plan.price} {plan.currency}
              </div>
            </div>
            <div
              class='card-footer text-muted d-flex justify-content-center align-items-center'
              style={{ height: '50px', fontSize: '1rem' }}>
              {plan.discounts}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase p-y'>
          {title}
        </h2>
        <div className='row m-0 p-0 mb-3'>
          <h3 className='col-12 text-center text-sm-start mb-md-3 p-0'>
            {plansTitle}
          </h3>
          {renderPlansList(plans, getAsset)}
          <div className='col-12 text-center text-sm-start'>{footnotes}</div>
        </div>
      </div>
    </section>
  );
};

export default MainPlans;
