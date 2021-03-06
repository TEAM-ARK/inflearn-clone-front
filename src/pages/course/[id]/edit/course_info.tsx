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
    // useState??? list?????? ??? ???????????? saga??? ?????????
    const whatYouCanLearnList: LectureInfoChild[] = whatYouCanLearn.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front?????? ????????? order ??????
    }));
    const expectedStudentsList: LectureInfoChild[] = expectedStudents.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front?????? ????????? order ??????
    }));
    const requiredKnowledgeList: LectureInfoChild[] = requiredKnowledge.map((item, index) => ({
      name: item.name,
      // order: item.id,
      order: index, // front?????? ????????? order ??????
    }));

    const data = {
      whatYouCanLearnList,
      expectedStudentsList,
      requiredKnowledgeList,
      selectedCategoryId: categoryId.current,
      selectedLevelId: levelId.current,
    };
    // console.log('data', data);

    // ?????? ???????????? ??????
    dispatch({
      type: SAVE_COURSE_INFO_REQUEST,
      data,
    });
    // ????????? ?????? ?????? ??? ???????????????(?????? ??????)??? ?????? - useEffect??????
  };

  useEffect(() => {
    if (saveCourseInfoDone) {
      // ????????? ?????? ?????? ??? ???????????????(?????? ??????)??? ??????
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
    // console.log('whatYouCanLearn', whatYouCanLearn); // ????????? undefined?????? ??????????????? ????????? ?????? ?????? ?????????
  }, [lectureData?.courseInfo]);

  const inputWhatYouCanLearn = useRef<HTMLInputElement>(null);
  const inputExpectedStudents = useRef<HTMLInputElement>(null);
  const inputRequiredKnowledge = useRef<HTMLInputElement>(null);

  const handleSubmitAddItem = (inputElement: React.RefObject<HTMLInputElement>) => (event: React.FormEvent) => {
    event.preventDefault();
    const inputValue = inputElement.current?.value;
    console.log('inputValue', inputValue);
    if (!inputValue) {
      console.log('????????? ?????? ??????');
      return; // '' == false
    }
    const newItem: ItemInterface = {
      id: shortid(),
      name: inputElement.current?.value,
    };
    // setState??? ??????
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
    if (inputElement.current) inputElement.current.value = ''; // input value ?????????
  };

  const handleId = (value: IHandleIdParams) => {
    // value??? CourseCommonButton??? handleId ??????????????? ????????? ?????? ?????? ?????? ???
    if (value.kind === 'category') {
      categoryId.current = value.id;
      return;
    }
    levelId.current = value.id;
  };

  return (
    <CourseLayout>
      <CourseTitleLabel title="????????????" />
      <CourseTitle title="?????? ??????" />
      <FieldDiv>
        <Label>?????? ??????</Label>
        <BoxInput type="text" placeholder="????????? ??????????????????" value={title} />
      </FieldDiv>
      <FieldDivMarginTop>
        <form onSubmit={handleSubmitAddItem(inputWhatYouCanLearn)}>
          <Label>?????? ??? ?????? ??? ?????????</Label>
          <BoxInput ref={inputWhatYouCanLearn} type="text" placeholder="e.g., ????????? ???????????? ??????" />
          <AddButton type="submit">????????????</AddButton>
          <WarnMessage>??? ??? ?????? ???????????????</WarnMessage>
        </form>
        <ReactSortable list={whatYouCanLearn} setList={setWhatYouCanLearn} animation={200} handle=".handle">
          {whatYouCanLearn.map((item, index) => (
            <TextListBox key={item.id} item={item} list={whatYouCanLearn} setList={setWhatYouCanLearn} index={index} />
          ))}
        </ReactSortable>
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <form onSubmit={handleSubmitAddItem(inputExpectedStudents)}>
          <Label>?????? ???????????? ????????????</Label>
          <BoxInput ref={inputExpectedStudents} type="text" placeholder="e.g., ????????? ?????? ????????? ??????" />
          <AddButton type="submit">????????????</AddButton>
          <WarnMessage>??? ??? ?????? ???????????????</WarnMessage>
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
            ??????????????? ??????????????? ????????????????<OptionalText>(??????)</OptionalText>
          </Label>
          <BoxInput
            id="inputRequiredKnowledge"
            ref={inputRequiredKnowledge}
            type="text"
            placeholder="e.g., ????????? ?????? ????????? ??????"
          />
          <AddButton type="submit">????????????</AddButton>
          <WarnMessage>??? ??? ?????? ???????????????</WarnMessage>
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
        <Label>????????????</Label>
        {/* ???????????? ?????? ?????? ???????????? ??? - ?????? ?????? ??? ??????????????? ?????? ??? */}
        {/* ???????????? ???????????? ???????????? ???????????? store??? ?????? ??? store??? ?????? ?????? ???????????? ??? ?????? */}
        <CourseCommonButtons kind="category" handleId={handleId} data={lectureData.courseInfo.category} />
      </FieldDivMarginTop>
      <FieldDivMarginTop>
        <Label>?????? ??????</Label>
        {/* ????????? ?????? ?????? ?????? ??????????????? ??? */}
        <CourseCommonButtons kind="level" handleId={handleId} data={lectureData.courseInfo.level} />
      </FieldDivMarginTop>
      <SaveButton text="?????? ??? ????????????" onClick={onClickSaveButton} />
    </CourseLayout>
  );
}

export default CourseInfo;
