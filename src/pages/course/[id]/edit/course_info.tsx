import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ItemInterface, ReactSortable } from 'react-sortablejs';
import shortid from 'shortid';
import styled from 'styled-components';
import CourseCommonButtons, { IHandleIdParams } from '@components/courseEdit/CourseCommonButtons';
import CourseTitle from '@components/courseEdit/CourseTitle';
import CourseTitleLabel from '@components/courseEdit/CourseTitleLabel';
import SaveButton from '@components/courseEdit/SaveButton';
import TextListBox from '@components/courseEdit/TextListBox';
import CourseLayout from 'src/layouts/CourseLayout';
import { RootState } from 'src/redux/reducers';
import { SAVE_COURSE_INFO_DONE, SAVE_COURSE_INFO_REQUEST } from 'src/redux/reducers/lecture';
import { LectureInfoChild } from 'src/redux/reducers/types';

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

export const Label = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #929292;
  margin-bottom: 0.2rem;
`;

export const FieldDiv = styled.div`
  margin-bottom: 0.75rem;
`;

export const FieldDivMarginTop = styled.div`
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
  const { createLectureData, lectureData, saveCourseInfoDone } = useSelector((state: RootState) => state.lecture);
  const title = createLectureData?.title;
  const dispatch = useDispatch();
  const router = useRouter();
  const categoryId = useRef<string | number>('');
  const levelId = useRef<string | number>('');

  const [whatYouCanLearn, setWhatYouCanLearn] = useState<ItemInterface[]>(
    lectureData?.courseInfo.whatYouCanLearn.map((item) => ({
      id: item.order,
      name: item.name,
    }))
  );
  const [expectedStudents, setExpectedStudents] = useState<ItemInterface[]>(
    lectureData?.courseInfo.expectedStudents.map((item) => ({
      id: item.order,
      name: item.name,
    }))
  );
  const [requiredKnowledge, setRequiredKnowledge] = useState<ItemInterface[]>(
    lectureData?.courseInfo.requiredKnowledge.map((item) => ({
      id: item.order,
      name: item.name,
    }))
  );

  const onClickSaveButton = () => {
    console.log('onClickSaveButton');
    // useState의 list들을 다 취합해서 saga로 보내기
    const whatYouCanLearnList: LectureInfoChild[] = whatYouCanLearn.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front에서 변경된 order 반영
    }));
    const expectedStudentsList: LectureInfoChild[] = expectedStudents.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front에서 변경된 order 반영
    }));
    const requiredKnowledgeList: LectureInfoChild[] = requiredKnowledge.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front에서 변경된 order 반영
    }));

    const data = {
      whatYouCanLearnList,
      expectedStudentsList,
      requiredKnowledgeList,
      selectedCategoryId: categoryId.current,
      selectedLevelId: levelId.current,
    };
    // console.log('data', data);

    // 다음 페이지로 이동
    dispatch({
      type: SAVE_COURSE_INFO_REQUEST,
      data,
    });
    // 서버에 전송 성공 후 다음페이지(상세 소개)로 이동 - useEffect에서
  };

  useEffect(() => {
    if (saveCourseInfoDone) {
      // 서버에 전송 성공 후 다음페이지(상세 소개)로 이동
      const { id } = createLectureData;
      dispatch({
        type: SAVE_COURSE_INFO_DONE,
      });
      router.push(`/course/${id}/edit/description`);
    }
  }, [saveCourseInfoDone]);

  useEffect(() => {
    setWhatYouCanLearn(
      lectureData?.courseInfo.whatYouCanLearn.map((item) => ({
        id: item.order,
        name: item.name,
      }))
    );
    setExpectedStudents(
      lectureData?.courseInfo.expectedStudents.map((item) => ({
        id: item.order,
        name: item.name,
      }))
    );
    setRequiredKnowledge(
      lectureData?.courseInfo.requiredKnowledge.map((item) => ({
        id: item.order,
        name: item.name,
      }))
    );
    // console.log('whatYouCanLearn', whatYouCanLearn); // 처음에 undefined인데 가져오면서 데이터 다시 넣고 렌더링
  }, [lectureData?.courseInfo]);

  const inputWhatYouCanLearn = useRef<HTMLInputElement>(null);
  const inputExpectedStudents = useRef<HTMLInputElement>(null);
  const inputRequiredKnowledge = useRef<HTMLInputElement>(null);

  const handleSubmitAddItem = (inputElement: React.RefObject<HTMLInputElement>) => (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = inputElement.current?.value;
    console.log('inputValue', inputValue);
    if (!inputValue) {
      console.log('입력된 값이 없음');
      return; // '' == false
    }
    const newItem: ItemInterface = {
      id: shortid(),
      name: inputElement.current?.value,
    };
    // setState에 추가
    switch (inputElement) {
      // case inputElement.current.id === 'inputWhatYouCanLearn':
      case inputWhatYouCanLearn:
        // console.log('inputWhatYouCanLearn');
        setWhatYouCanLearn((prev: ItemInterface[]) => [...prev, newItem]);
        break;
      case inputExpectedStudents:
        // console.log('inputExpectedStudents');
        setExpectedStudents((prev: ItemInterface[]) => [...prev, newItem]);
        break;
      case inputRequiredKnowledge:
        // console.log('inputRequiredKnowledge');
        setRequiredKnowledge((prev: ItemInterface[]) => [...prev, newItem]);
        break;
      default:
        console.error('check box type of handleSubmitAddItem');
    }
    inputElement.current.value = ''; // input value 초기화
  };

  const handleId = (value: IHandleIdParams): IHandleIdParams['id'] => {
    // value는 CourseCommonButton의 handleId 프로퍼티의 인자를 통해 전달 받은 값
    if (value.kind === 'category') {
      categoryId.current = value.id;
      return categoryId.current;
    }
    if (value.kind === 'level') {
      levelId.current = value.id;
      return levelId.current;
    }

    return '해당되는 조건 없음';
  };

  return (
    <CourseLayout>
      <CourseTitleLabel title="강의제작" />
      <CourseTitle title="강의 정보" />
      <FieldDiv>
        <Label>강의 제목</Label>
        <BoxInput type="text" placeholder="제목을 입력해주세요" value={title} />
      </FieldDiv>
      <FieldDivMarginTop>
        <form onSubmit={handleSubmitAddItem(inputWhatYouCanLearn)}>
          <Label>이런 걸 배울 수 있어요</Label>
          <BoxInput ref={inputWhatYouCanLearn} type="text" placeholder="e.g., 리액트 네이티브 개발" />
          <AddButton type="submit">추가하기</AddButton>
          <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        </form>
        <ReactSortable list={whatYouCanLearn} setList={setWhatYouCanLearn} animation={200} handle=".handle">
          {whatYouCanLearn.map((item, index) => (
            <TextListBox key={item.id} item={item} list={whatYouCanLearn} setList={setWhatYouCanLearn} index={index} />
          ))}
        </ReactSortable>
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <form onSubmit={handleSubmitAddItem(inputExpectedStudents)}>
          <Label>이런 분들에게 추천해요</Label>
          <BoxInput ref={inputExpectedStudents} type="text" placeholder="e.g., 코딩을 처음 접하는 사람" />
          <AddButton type="submit">추가하기</AddButton>
          <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        </form>
        <ReactSortable list={expectedStudents} setList={setExpectedStudents} animation={200} handle=".handle">
          {expectedStudents.map((item, index) => (
            <TextListBox
              key={item.id}
              item={item}
              list={expectedStudents}
              setList={setExpectedStudents}
              index={index}
            />
          ))}
        </ReactSortable>
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <form onSubmit={handleSubmitAddItem(inputRequiredKnowledge)}>
          <Label>
            선수지식이 필요하다면 무엇인가요?<OptionalText>(선택)</OptionalText>
          </Label>
          <BoxInput
            id="inputRequiredKnowledge"
            ref={inputRequiredKnowledge}
            type="text"
            placeholder="e.g., 코딩을 처음 접하는 사람"
          />
          <AddButton type="submit">추가하기</AddButton>
          <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
        </form>
        <ReactSortable list={requiredKnowledge} setList={setRequiredKnowledge} animation={200} handle=".handle">
          {requiredKnowledge.map((item, index) => (
            <TextListBox
              key={item.id}
              item={item}
              list={requiredKnowledge}
              setList={setRequiredKnowledge}
              index={index}
            />
          ))}
        </ReactSortable>
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <Label>카테고리</Label>
        {/* 카테고리 버튼 전부 수정해야 됨 - 다시 클릭 시 해제하도록 해야 함 */}
        {/* 카테고리 리스트도 서버에서 가져와서 store에 저장 후 store에 있는 것을 가져오게 할 예정 */}
        <CourseCommonButtons kind="category" handleId={handleId} data={lectureData.courseInfo.category} />
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <Label>강의 수준</Label>
        {/* 여기에 강의 수준 항목 추가되어야 함 */}
        <CourseCommonButtons kind="level" handleId={handleId} data={lectureData.courseInfo.level} />
      </FieldDivMarginTop>
      <SaveButton text="저장 후 다음이동" onClick={onClickSaveButton} />
    </CourseLayout>
  );
}

export default CourseInfo;
