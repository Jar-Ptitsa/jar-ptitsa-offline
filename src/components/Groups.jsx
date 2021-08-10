import React from 'react';
import { PersonLinesFill } from 'react-bootstrap-icons';

import Image from './Image';

const Groups = ({ getAsset = '', ...groups }) => {
  const { title, groups: groupsList } = groups;

  const renderBooks = (list, getAsset) => {
    return list.map((book, index) => {
      return (
        <div
          className='col-6 col-md-12 row mx-0 my-2 p-0 align-items-md-center'
          key={index}>
          <div className='col-8 col-md-4 mx-auto'>
            <Image
              image={book.image}
              getAsset={getAsset}
              className='img-fluid my-1'
            />
          </div>
          <div className='col text-center'>
            <div>{book.book_title}</div>
            {book.book_authors && (
              <div className='d-flex justify-content-center my-1 text-muted'>
                <div className='me-2'>
                  <PersonLinesFill />
                </div>
                <div>{book.book_authors}</div>
              </div>
            )}
            <a
              href={book.link}
              target='_blank'
              rel='noopener, noreferrer'
              className='btn btn-outline-success btn-sm my-1'>
              {book.button_label}
            </a>
          </div>
        </div>
      );
    });
  };

  const renderGroupsList = (list, getAsset) => {
    return list.map((group, index) => {
      return (
        <div
          className='col-11 mx-auto p-0 row mb-3 border rounded'
          id={group.group}
          key={index}>
          <div
            className='col-12 col-md-3 row m-0 p-0 rounded'
            style={{ backgroundColor: '#E5EAE1' }}>
            <div className='row flex-md-column m-0 p-0 align-items-center justify-content-md-center'>
              <Image
                image={group.image}
                getAsset={getAsset}
                className='col-3 col-md-10 mx-auto img-fluid my-1 rounded'
              />
              <h4 className='col-8 col-md-12 text-uppercase text-center mt-md-2'>
                {group.group}
              </h4>
            </div>
          </div>
          <div className='col row m-0 p-0 mx-md-3'>
            <h4 className='text-uppercase text-center mt-2'>
              Портфель школьника
            </h4>
            {group.books && renderBooks(group.books, getAsset)}
            <h6 className='text-uppercase text-center mt-2'>
              Также потребуется:
            </h6>
            <div>{group.other_items}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row'>{renderGroupsList(groupsList, getAsset)}</div>
      </div>
    </section>
  );
};

export default Groups;
