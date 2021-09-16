import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import CategoryMenu from '@components/CategoryMenu';
import LectureFilter from '@components/LectureFilter';
import AppLayout from 'src/layouts/AppLayout';

const CoursesSection = styled.section`
  background: white;
`;

const CoursesWrapper = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  background: white;

  @media screen and (min-width: 1200px) {
    max-width: 1180px;
  }

  @media screen and (min-width: 1473px) {
    max-width: 1440px;
  }
`;

const Courses = () => {
  return (
    <AppLayout>
      <CoursesSection>
        <CoursesWrapper>
          <Grid container>
            <Grid item xs={2}>
              <CategoryMenu />
              <LectureFilter />
            </Grid>
            <Grid item xs={10} style={{ padding: '0 0.75rem' }}>
              <div>검색하기</div>
              <nav>카테고리 경로</nav>
              <span>Grid와 list 선택</span>
              <span>카드 정렬 선택</span>
              <div>기술검색</div>
              <div>강의 카드</div>
              <div>페이지네이션</div>
            </Grid>
          </Grid>
        </CoursesWrapper>
      </CoursesSection>
      <section>지식공유참여 및 인프런 비즈니스</section>
    </AppLayout>
  );
};

export default Courses;
