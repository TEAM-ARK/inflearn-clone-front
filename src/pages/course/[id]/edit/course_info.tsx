import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import CourseCommonButton from '@components/courseEdit/CourseCommonButton';
import CourseTitle from '@components/courseEdit/CourseTitle';
import CourseTitleLabel from '@components/courseEdit/CourseTitleLabel';
import TextListBox from '@components/courseEdit/TextListBox';
import CourseLayout from 'src/layouts/CourseLayout';
import { RootState } from 'src/redux/reducers';
import {
  DELETE_ITEM_EXPECTEDSTUDENTS,
  DELETE_ITEM_REQUIREDKNOWLEDGE,
  DELETE_ITEM_WHATYOUCANLEARN,
} from 'src/redux/reducers/lecture';

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

function CourseInfo() {
  const { createLectureData, lectureData } = useSelector((state: RootState) => state.lecture);
  const title = createLectureData?.title;
  const [selectedId, setSelectedId] = useState<string>('');
  const dispatch = useDispatch();
  const onClickTextBoxDelete =
    (textList: string[], index: number, boxType: 'whatYouCanLearn' | 'expectedStudents' | 'requiredKnowledge') =>
    () => {
      const textArray = [...textList];
      textArray.splice(index, 1);
      switch (boxType) {
        case 'whatYouCanLearn':
          dispatch({
            type: DELETE_ITEM_WHATYOUCANLEARN,
            data: textArray,
          });
          break;
        case 'expectedStudents':
          dispatch({
            type: DELETE_ITEM_EXPECTEDSTUDENTS,
            data: textArray,
          });
          break;
        case 'requiredKnowledge':
          dispatch({
            type: DELETE_ITEM_REQUIREDKNOWLEDGE,
            data: textArray,
          });
          break;
        default:
          console.error('boxType is wrong');
      }
    };
  const [whatYouCanLearn, setWhatYouCanLearn] = useState<string[]>([...lectureData?.courseInfo.whatYouCanLearn]);
  const [expectedStudents, setExpectedStudents] = useState<string[]>([...lectureData?.courseInfo.expectedStudents]);
  const [requiredKnowledge, setRequiredKnowledge] = useState<string[]>([...lectureData?.courseInfo.requiredKnowledge]);
  useEffect(() => {
    setWhatYouCanLearn([...lectureData?.courseInfo.whatYouCanLearn]);
    setExpectedStudents([...lectureData?.courseInfo.expectedStudents]);
    setRequiredKnowledge([...lectureData?.courseInfo.requiredKnowledge]);
    console.log('whatYouCanLearn', whatYouCanLearn); // 처음에 undefined인데 가져오면서 데이터 다시 넣고 렌더링
  }, [lectureData]);
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
        <BoxInput type="text" placeholder="e.g., 리액트 네이티브 개발" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        {/* <TextListBox list={lectureData?.courseInfo.whatYouCanLearn} /> */}
        {/* <TextListBox list={textArray} setTextArray={setTextArray} /> */}
        <ReactSortable list={whatYouCanLearn} setList={setWhatYouCanLearn} animation={200} handle=".handle">
          {whatYouCanLearn.map((item, index) => (
            <TextListBox
              key={`k${index}`}
              item={item}
              onClickDelete={onClickTextBoxDelete(lectureData?.courseInfo.whatYouCanLearn, index, 'whatYouCanLearn')}
            />
          ))}
        </ReactSortable>
      </FieldDiv>
      <FieldDiv>
        <Label>이런 분들에게 추천해요</Label>
        <BoxInput type="text" placeholder="e.g., 코딩을 처음 접하는 사람" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        <ReactSortable list={expectedStudents} setList={setExpectedStudents} animation={200} handle=".handle">
          {expectedStudents.map((item, index) => (
            <TextListBox
              key={`k${index}`}
              item={item}
              onClickDelete={onClickTextBoxDelete(lectureData?.courseInfo.expectedStudents, index, 'expectedStudents')}
            />
          ))}
        </ReactSortable>
      </FieldDiv>
      <FieldDiv>
        <Label>
          선수지식이 필요하다면 무엇인가요?<OptionalText>(선택)</OptionalText>
        </Label>
        <BoxInput type="text" placeholder="e.g., 코딩을 처음 접하는 사람" />
        <AddButton>추가하기</AddButton>
        <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        <ReactSortable list={requiredKnowledge} setList={setRequiredKnowledge} animation={200} handle=".handle">
          {requiredKnowledge.map((item, index) => (
            <TextListBox
              key={`k${index}`}
              item={item}
              onClickDelete={onClickTextBoxDelete(
                lectureData?.courseInfo.requiredKnowledge,
                index,
                'requiredKnowledge'
              )}
            />
          ))}
        </ReactSortable>
      </FieldDiv>
      <FieldDiv>
        <Label>카테고리</Label>
        <CourseCommonButton id="1" text="개발, 프로그래밍" selectedId={selectedId} setSelectedId={setSelectedId} />
        <CourseCommonButton id="2" text="보안, 네트워크" selectedId={selectedId} setSelectedId={setSelectedId} />
        <CourseCommonButton id="3" text="데이터 사이언스" selectedId={selectedId} setSelectedId={setSelectedId} />
      </FieldDiv>
    </CourseLayout>
  );
}

export default CourseInfo;
