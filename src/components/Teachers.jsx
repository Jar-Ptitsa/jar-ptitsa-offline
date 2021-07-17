import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import { AwardFill, KeyFill, PersonBadgeFill } from 'react-bootstrap-icons';

import Image from './Image';

const renderTeachersGroupList = (list, getAsset) => {
  return list.map((group, index) => {
    return (
      <Link
        to={`${window.location.pathname}#${group.group_name}`}
        className='col-6 border rounded p-1 text-decoration-none row flex-column flex-sm-row flex-md-column'
        key={index}>
        <Image
          image={group.image}
          getAsset={getAsset}
          className='img-fluid col-8 col-sm-4 col-md-8 mx-auto mb-1 mb-sm-0'
        />
        <div className='col text-uppercase text-center'>{group.group_name}</div>
      </Link>
    );
  });
};

const renderTeachersList = (list, getAsset) => {
  return list.map((teacher, index) => {
    return (
      <div
        className='col-11 mx-auto row border rounded shadow mt-2 pt-3'
        key={index}>
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
        <div className='col d-flex flex-column flex-sm-row align-items-center'>
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
                  <KeyFill />
                </div>
                <div>{teacher.specialization}</div>
              </div>
            )}
          </div>
          <div className='col-12 col-sm-6 my-3 my-sm-0'>
            <h6 className='text-center'>Классы</h6>
            <div className='row justify-content-between px-1'>
              {renderTeachersGroupList(teacher.groups, getAsset)}
            </div>
          </div>
        </div>
        <ReactMarkdown className='' children={teacher.bio} />
      </div>
    );
  });
};

const Teachers = ({ getAsset = '', ...teachers }) => {
  const { title, teachers: teachersList } = teachers;

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row mb-3'>
          {renderTeachersList(teachersList, getAsset)}
        </div>
      </div>
      <div id={`1ый класс`}>12</div>
    </section>
  );
};

export default Teachers;
