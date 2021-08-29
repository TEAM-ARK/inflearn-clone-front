import React, { useRef, useEffect, useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '@components/HeaderLayout';
import { RootState } from 'src/redux/reducers';
import { LOAD_EDIT_LECTURE_REQUEST } from 'src/redux/reducers/lecture';

const CourseLayoutContainer = styled.section`
  background-color: #f5f5f5;
`;

const CourseLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 6.4fr 1.8fr;
  padding-top: 24px;
  padding-bottom: 100px;
  height: 250vh;
`;

const CourseNav = styled.nav`
  padding: 0.75rem;
`;

const CourseMain = styled.main`
  box-shadow: 0 2px 10px 0 hsl(0deg 0% 75% / 50%);
  padding: 12px 24px;
`;

const CourseAside = styled.aside`
  padding: 0.75rem;
`;

const CourseHeader = styled.header`
  background-color: var(--color-midnight-blue);
  color: white;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 1200;
`;

const SeeTheLecture = styled.button`
  font-weight: 800;
  width: 160px;
  height: 48px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
  margin-right: 4px;
`;

const CourseHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const BtnSaveCourse = styled.button`
  font-weight: 800;
  width: 160px;
  height: 48px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  background-color: var(--color-light-green);
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
`;

const BtnsWrapper = styled.div`
  width: max-content;
`;

type StepContainerProp = {
  headerHeight: number;
};

const StepContainer = styled.div`
  position: sticky;
  top: ${(props: StepContainerProp) => props.headerHeight + 36}px;
`;

type StepItemProp = {
  current: boolean;
};

const StepItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props: StepItemProp) => (props.current ? 'var(--color-dark-grey)' : 'var(--color-smoky-white)')};
  & > svg {
    font-size: 1rem;
  }
`;

const TextLink = styled.a`
  margin-left: 5px;
  cursor: pointer;
`;

const StepTitle = styled.h3`
  margin-bottom: 1.3rem;
  font-weight: 600;
`;

interface IProps {
  children: React.ReactNode;
}

const CourseLayout = ({ children }: IProps) => {
  const router = useRouter();
  const { id } = router.query;
  const refCourseHeader = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(64);
  const dispatch = useDispatch();
  const { lectureData } = useSelector((state: RootState) => state.lecture);

  function getCurrentPath() {
    const currentUrl = router.pathname.split('edit')[1];
    // console.log(currentUrl);
    return currentUrl;
  }

  useEffect(() => {
    dispatch({
      type: LOAD_EDIT_LECTURE_REQUEST,
    });
  }, []);

  useEffect(() => {
    console.log('lectureData', lectureData);
  }, [lectureData]);

  useEffect(() => {
    getCurrentPath();
    if (refCourseHeader.current) {
      setHeaderHeight(refCourseHeader.current.clientHeight);
    }
  }, [headerHeight]);
  return (
    <CourseLayoutContainer>
      <Header />
      <CourseHeader>
        <CourseHeaderContainer ref={refCourseHeader} className="container">
          <h1>내 강의 만들기</h1>
          <BtnsWrapper>
            <Link href={`/course/${id}`}>
              <SeeTheLecture type="button">강의보기</SeeTheLecture>
            </Link>
            <BtnSaveCourse
              type="button"
              onClick={() => {
                console.log('저장');
              }}
            >
              저장
            </BtnSaveCourse>
          </BtnsWrapper>
        </CourseHeaderContainer>
      </CourseHeader>
      <CourseLayoutGrid className="container">
        <CourseNav>
          <StepContainer headerHeight={headerHeight}>
            <StepTitle>강의 제작</StepTitle>
            <StepItem current={getCurrentPath() === '/course_info'}>
              <CheckCircleIcon />
              <Link href={`/course/${id}/edit/course_info`}>
                <TextLink>강의 정보</TextLink>
              </Link>
            </StepItem>
            <StepItem current={getCurrentPath() === '/description'}>
              <CheckCircleIcon />
              <Link href={`/course/${id}/edit/description`}>
                <TextLink>상세 소개</TextLink>
              </Link>
            </StepItem>
            <StepItem current={getCurrentPath() === '/curriculum'}>
              <CheckCircleIcon />
              <Link href={`/course/${id}/edit/curriculum`}>
                <TextLink>커리 큘럼</TextLink>
              </Link>
            </StepItem>
            <StepItem current={getCurrentPath() === '/cover_image'}>
              <CheckCircleIcon />
              <Link href={`/course/${id}/edit/cover_image`}>
                <TextLink>커버 이미지</TextLink>
              </Link>
            </StepItem>
          </StepContainer>
        </CourseNav>
        <CourseMain>{children}</CourseMain>
        <CourseAside>
          <StepContainer headerHeight={headerHeight}>눈길을 끄는 제목 작성 꿀팁!</StepContainer>
        </CourseAside>
      </CourseLayoutGrid>
    </CourseLayoutContainer>
  );
};

export default CourseLayout;
