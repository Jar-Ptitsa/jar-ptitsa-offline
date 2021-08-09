import React from 'react';
import { Link } from 'gatsby';

import Image from './Image';

const MainPlans = ({ additional_plans, afterwords, getAsset }) => {
  const { title: plansTitle, plans, footnotes } = additional_plans;

  const renderPlansList = (list, getAsset) => {
    return list.map((plan, index) => {
      return (
        <div
          className='col-11 mx-auto col-sm-6 col-md-4 mb-3 mb-md-0'
          key={index + plan.price}>
          <div className='card border-dark text-center'>
            <h5
              className='card-header d-flex justify-content-center align-items-center'
              style={{ height: '50px' }}>
              <div>{plan.title}</div>
            </h5>
            <Image
              image={plan.image}
              getAsset={getAsset}
              className='card-image-top w-50 mx-auto mt-2'
            />

            <div className='card-body '>
              {plan.hours && (
                <h6
                  className='card-subtitle mb-2 text-muted d-flex justify-content-center align-items-center'
                  style={{ height: '50px' }}>
                  {plan.hours}
                </h6>
              )}
              {!plan.hours && (
                <h6
                  className='d-none d-md-block card-subtitle mb-2 text-mutedd-flex justify-content-center align-items-center'
                  style={{ height: '50px' }}>
                  &nbsp;
                </h6>
              )}

              {plan.price && (
                <div
                  className='rounded p-2 mt-3 fw-bold border'
                  style={{ borderColor: '#E5EAE1' }}>
                  {plan.price} {plan.currency}
                </div>
              )}
              {!plan.price && (
                <div
                  className='rounded p-2 mt-3 fw-bold border'
                  style={{ borderColor: '#E5EAE1' }}>
                  {plan.discounts}
                </div>
              )}
            </div>

            {plan.price && (
              <div
                className='card-footer text-muted d-flex justify-content-center align-items-center'
                style={{ height: '50px', fontSize: '1rem' }}>
                {plan.discounts}
              </div>
            )}
            {!plan.price && (
              <div
                className='card-footer text-muted d-flex justify-content-center align-items-center'
                style={{ height: '50px', fontSize: '1rem' }}>
                <Link to='/sunday-club' className='text-decoration-none'>
                  Подробнее
                </Link>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className='container pt-3' style={{ maxWidth: '960px' }}>
        <div className='row m-0 p-0 mb-3'>
          <h3 className='col-12 text-center text-sm-start mb-md-3 p-0'>
            {plansTitle}
          </h3>
          {renderPlansList(plans, getAsset)}
          <div className='col-12 text-center text-sm-start'>{footnotes}</div>
          <div className='d-flex justify-content-center'>
            <Link to='/contacts' className='btn btn-md btn-secondary mt-2'>
              В дирекцию
            </Link>
          </div>
        </div>
        <p>{afterwords}</p>
      </div>
    </section>
  );
};

export default MainPlans;
