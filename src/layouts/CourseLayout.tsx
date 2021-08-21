import React from 'react';
import styled from 'styled-components';
import Header from '@components/HeaderLayout';

const CourseLayoutContainer = styled.section`
  background-color: #f5f5f5;
  height: 100%;
`;

const CourseLayoutFlex = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 6.4fr 1.8fr;
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

interface IProps {
  children: React.ReactNode;
}

const CourseLayout = ({ children }: IProps) => {
  return (
    <CourseLayoutContainer>
      <Header />
      <header>내 강의 만들기</header>
      <CourseLayoutFlex className="container">
        <CourseNav>강의 제작</CourseNav>
        <CourseMain>{children}</CourseMain>
        <CourseAside>눈길을 끄는 제목 장성 꿀팁!</CourseAside>
      </CourseLayoutFlex>
    </CourseLayoutContainer>
  );
};

export default CourseLayout;
