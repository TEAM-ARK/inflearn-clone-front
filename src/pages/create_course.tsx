import React, { useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import AppLayout from 'src/layouts/AppLayout';

const InputTitle = styled.input`
  padding: 0 10px;
  width: 450px;
  height: 50px;
  border-radius: 3px;
  box-shadow: none;
  background: #f6f6f6;
  color: #5f5f5f;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--color-light-grey);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--color-light-green);
  }
`;

const BtnMakeCourse = styled.button`
  color: #fff;
  font-weight: 800;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 24%);
  background-color: var(--color-light-green);
  margin-top: 48px;
  width: 126px;
  height: 48px;
`;

const CreateCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 13px;
`;

const CreateCourse = () => {
  const router = useRouter();
  const inputTitle = useRef<HTMLInputElement>(null);
  const getLectureId = async (title: string) => {
    console.log('title', title);
    const param = {
      title,
    };
    const result = await axios.post('http://localhost:4000/create_course', param);
    return result;
  };

  const onClickBtnCreate = async () => {
    const title = inputTitle?.current?.value;
    if (!title) {
      alert('제목을 입력해 주세요');
      return;
    }
    const result = await getLectureId(title);
    const { id } = result?.data;
    console.log('onClickBtnCreate result', result);
    router.push(`/course/${id}/edit/course_info`);
  };
  return (
    <AppLayout>
      <CreateCourseWrapper>
        <div>
          <SectionTitle>
            제목을 입력해주세요! <br />
            너무 고민하지마세요. 제목은 언제든 수정 가능해요 :)
          </SectionTitle>
          <InputTitle ref={inputTitle} type="text" placeholder="제목을 입력해주세요." />
        </div>
        <BtnMakeCourse type="button" onClick={onClickBtnCreate}>
          강의 만들기
        </BtnMakeCourse>
      </CreateCourseWrapper>
    </AppLayout>
  );
};

export default CreateCourse;
