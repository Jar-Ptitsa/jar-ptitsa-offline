import React from 'react';
import ReactMarkdown from 'react-markdown';
import { AwardFill, Book, PersonBadgeFill } from 'react-bootstrap-icons';

import Image from './Image';

const Teachers = ({ getAsset = '', teachers }) => {
  const renderTeachersGroupList = (list, getAsset) => {
    const isOneElement = list.length === 1;

    const groupsStyles = isOneElement ? 'col-6 offset-3' : 'col-6';

    return list.map((group, index) => {
      return (
        <div
          className={`${groupsStyles} border rounded p-1 text-decoration-none row flex-column flex-sm-row flex-md-column`}
          key={index}>
          <Image
            image={group.image}
            getAsset={getAsset}
            className='img-fluid col-8 col-sm-5 col-md-8 mx-auto mb-1 mb-sm-0 w-100'
          />
          <div className='col text-uppercase text-center'>
            {group.group_name}
          </div>
        </div>
      );
    });
  };

  const renderTeachersList = (list, getAsset) => {
    return list.map((teacher, index) => {
      return (
        <div
          className='col-11 mx-auto row border rounded shadow mb-3 pt-3'
          key={index}
          style={{ backgroundColor: '#fff' }}>
          <h5 className='fw-bold text-center text-md-start text-uppercase'>
            {teacher.name}
          </h5>
          <div className='col-12 col-md-4 d-flex flex-column'>
            <Image
              image={teacher.image}
              getAsset={getAsset}
              className='img-fluid col-8 col-sm-6 col-md-10 mx-auto'
            />
          </div>
          <div className='col row flex-column flex-sm-row align-items-center m-0 p-0'>
            <div className='col-12 col-sm-6 d-flex flex-column align-items-start  ps-sm-5 ps-md-0'>
              {teacher.status && (
                <div className='d-flex'>
                  <div className='me-2'>
                    <AwardFill />
                  </div>
                  <div>{teacher.status}</div>
                </div>
              )}
              {teacher.position && (
                <div className='d-flex'>
                  <div className='me-2'>
                    <PersonBadgeFill />
                  </div>
                  <div>{teacher.position}</div>
                </div>
              )}
              {teacher.specialization && (
                <div className='d-flex'>
                  <div className='me-2'>
                    <Book />
                  </div>
                  <div>{teacher.specialization}</div>
                </div>
              )}
            </div>
            <div className='col-12 col-sm-6 my-3 my-sm-0'>
              <h6 className='text-center'>Классы</h6>
              <div className='row justify-content-between px-1 m-0'>
                {teacher.groups &&
                  renderTeachersGroupList(teacher.groups, getAsset)}
              </div>
            </div>
          </div>
          <ReactMarkdown className='' children={teacher.bio} />
        </div>
      );
    });
  };

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <div className='row mb-3'>
          {renderTeachersList(teachers.list, getAsset)}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
