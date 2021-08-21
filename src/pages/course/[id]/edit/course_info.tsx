import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CourseLayout from 'src/layouts/CourseLayout';
import { RootState } from 'src/redux/reducers';

const BoxInput = styled.input`
  border: 0;
  border-radius: 3px;
  padding: 0 12px;
  width: 450px;
  max-width: 450px;
  height: 45px;
  box-shadow: none;
  font-size: 1rem;
  color: var(--color-dark-grey);
  background: var(--color-dark-white);
  &:focus {
    outline: none;
    border: 1px solid var(--color-light-green);
  }
`;

const CourseInfo = () => {
  const {
    createLectureData: { title },
  } = useSelector((state: RootState) => state.lecture);

  return (
    <CourseLayout>
      <div>course_info</div>
      <BoxInput type="text" placeholder="제목을 입력해주세요" value={title} />
    </CourseLayout>
  );
};

export default CourseInfo;
