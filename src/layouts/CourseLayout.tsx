import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styled from 'styled-components';
import Header from '@components/HeaderLayout';

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
  background-color: #333b3d;
  color: white;
  height: 64px;
  position: sticky;
  top: 0;
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

interface IProps {
  children: React.ReactNode;
}

const CourseLayout = ({ children }: IProps) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <CourseLayoutContainer>
      <Header />
      <CourseHeader>
        <CourseHeaderContainer className="container">
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
          <h2>강의 제작</h2>
          <div>강의 정보</div>
          <div>상세 소개</div>
          <div>커리 큘럼</div>
          <div>커버 이미지</div>
        </CourseNav>
        <CourseMain>{children}</CourseMain>
        <CourseAside>눈길을 끄는 제목 장성 꿀팁!</CourseAside>
      </CourseLayoutGrid>
    </CourseLayoutContainer>
  );
};

export default CourseLayout;
