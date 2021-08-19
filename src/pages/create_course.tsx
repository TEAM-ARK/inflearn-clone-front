import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AppLayout from 'src/layouts/AppLayout';
import { RootState } from 'src/redux/reducers';
import { CREATE_LECTURE_REQUEST } from 'src/redux/reducers/lecture';

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

interface IBtnProps {
  loading: boolean;
}

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
  pointer-events: ${(props: IBtnProps) => (props.loading ? 'none' : 'auto')};
  opacity: ${(props: IBtnProps) => (props.loading ? 0.7 : 1)};
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

const Message = styled.div`
  color: var(--color-red);
  padding: 10px;
  font-weight: 600;
`;

const CreateCourse = () => {
  const [isTitle, setIsTitle] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const inputTitle = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { createLectureLoading, createLectureData, createLectureDone } = useSelector(
    (state: RootState) => state.lecture
  );

  useEffect(() => {
    console.log('create_course useEffect');
    if (createLectureDone) {
      const { id } = createLectureData;
      router.push(`/course/${id}/edit/course_info`);
    }
  }, [createLectureDone]);
  const onClickBtnCreate = async () => {
    const title = inputTitle?.current?.value;
    if (!title) {
      setMessage('제목을 입력해 주세요');
      setIsTitle(true);
      return;
    }
    dispatch({
      type: CREATE_LECTURE_REQUEST,
    });

    // const result = await getLectureId(title);
    // const { id } = result?.data;
    // console.log('onClickBtnCreate result', result);
    // router.push(`/course/${id}/edit/course_info`);
  };

  const watchingInputText = () => {
    const title = inputTitle?.current?.value;
    if (!title) {
      setMessage('제목을 입력해 주세요');
      setIsTitle(true);
      return;
    }
    setMessage('');
    setIsTitle(false);
  };
  return (
    <AppLayout>
      <CreateCourseWrapper>
        <div>
          <SectionTitle>
            제목을 입력해주세요! <br />
            너무 고민하지마세요. 제목은 언제든 수정 가능해요 :)
          </SectionTitle>
          <InputTitle onKeyUp={watchingInputText} ref={inputTitle} type="text" placeholder="제목을 입력해주세요." />
          {isTitle && <Message>{message}</Message>}
        </div>
        <BtnMakeCourse loading={createLectureLoading} type="button" onClick={onClickBtnCreate}>
          강의 만들기
        </BtnMakeCourse>
      </CreateCourseWrapper>
    </AppLayout>
  );
};

export default CreateCourse;
