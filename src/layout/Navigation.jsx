import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  const activeClass = 'active border-bottom border-danger border-5';

  return (
    <nav className='navbar navbar-expand-md navbar-light'>
      <div className='container-fluid justify-content-end justify-content-md-center p-0'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#toggleNav'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='toggleNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-center'>
            <li className='nav-item d-table'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0 d-table-cell align-middle px-3'
                activeClassName={activeClass}
                to='/'
                style={{
                  height: '53px',
                  borderBottom: '5px solid transparent',
                }}>
                Главная
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/classes-schedule'>
                Предметы и расписание
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/teachers-groups'>
                Учителя и классы
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/plans'>
                Тарифы и Цены
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/sunday-club'>
                Воскресный клуб
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/enroll-school'>
                Запись в школу
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-uppercase py-3 py-md-0'
                activeClassName={activeClass}
                to='/contacts'>
                Адреса и Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
