import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CourseCommonButton from '@components/courseEdit/CourseCommonButton';
import CourseTitle from '@components/courseEdit/CourseTitle';
import CourseTitleLabel from '@components/courseEdit/CourseTitleLabel';
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

const Label = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #929292;
  margin-bottom: 0.2rem;
`;

const FirstFieldDiv = styled.div`
  margin-bottom: 0.75rem;
`;

const FieldDiv = styled.div`
  margin-top: 24px;
  margin-bottom: 0.75rem;
`;

const AddButton = styled.button`
  display: block;
  border: 0;
  border-radius: 1px;
  margin-top: 0.5rem;
  height: 45px;
  width: 450px;
  max-width: 450px;
  background: #1dc078;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
`;

const WarnMessage = styled.div`
  margin-top: 4px;
  max-width: 450px;
  text-align: right;
  color: #fb6351;
  font-size: 12px;
`;

const OptionalText = styled.span`
  color: #fb6351;
  font-weight: 400;
`;

const CourseInfo = () => {
  const {
    createLectureData: { title },
  } = useSelector((state: RootState) => state.lecture);

  return (
    <CourseLayout>
      <CourseTitleLabel title="강의제작" />
      <CourseTitle title="강의 정보" />
      <FirstFieldDiv>
        <Label>강의 제목</Label>
        <BoxInput type="text" placeholder="제목을 입력해주세요" value={title} />
      </FirstFieldDiv>
      <FieldDiv>
        <Label>이런 걸 배울 수 있어요</Label>
        <BoxInput type="text" placeholder="ex) 리액트 네이티브 개발" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
      </FieldDiv>
      <FieldDiv>
        <Label>이런 분들에게 추천해요</Label>
        <BoxInput type="text" placeholder="ex) 코딩을 처음 접하는 사람" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
      </FieldDiv>
      <FieldDiv>
        <Label>
          선수지식이 필요하다면 무엇인가요?<OptionalText>(선택)</OptionalText>
        </Label>
        <BoxInput type="text" placeholder="ex) 코딩을 처음 접하는 사람" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
      </FieldDiv>
      <FieldDiv>
        <Label>카테고리</Label>
        <CourseCommonButton key="1" text="개발, 프로그래밍" />
        <CourseCommonButton key="2" text="보안, 네트워크" />
        <CourseCommonButton key="3" text="데이터 사이언스" />
      </FieldDiv>
    </CourseLayout>
  );
};

export default CourseInfo;
