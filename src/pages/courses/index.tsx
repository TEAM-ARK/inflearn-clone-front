import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ListIcon from '@material-ui/icons/List';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryMenu from '@components/CategoryMenu';
import HorizonLectureCard from '@components/lectureCard/HorizonLectureCard';
import LectureCard from '@components/lectureCard/LectureCard';
import LectureFilter from '@components/LectureFilter';
import LoadingSpinner from '@components/LoadingSpinner';
import AppLayout from 'src/layouts/AppLayout';
import { RootState } from 'src/redux/reducers';
import { LOAD_ALL_LECTURES_REQUEST } from 'src/redux/reducers/lecture';
import { ILecture } from 'src/redux/reducers/types';

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

const CoursesViewGrid = styled(Grid)`
  padding: 0 0.75rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const CoursesHeader = styled.header`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dedede;
`;

const LectureSearchForm = styled.form`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const LectureSearchInput = styled.input`
  flex: 1 1 300px;
  max-width: 300px;
  height: 36px;
  padding: 5px 9px;
  border: 1px solid #dedede;

  &:focus {
    outline: 0.05cm auto #1dc078;
  }

  &&::placeholder {
    color: #b8b8b8db;
  }
`;

const LectureSearchBtn = styled.button`
  width: 53px;
  height: 36px;
  background: #1dc078;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  margin-left: -1rem;
`;

const getSelectedStyle = () => `
  background: #1dc078 !important;
  border-color: transparent !important;
  color: white;

  &:hover {
    background: #1bb571 !important;
    border-color: transparent !important;
    color: white;
  }
`;

type ListViewProps = {
  view: string | string[];
  isSelected?: boolean;
};

const ListViewBtn = styled.button<ListViewProps>`
  ${(props) => (props.isSelected ? getSelectedStyle() : '')}

  background: white;
  border: 1px solid #dbdbdb;
  border-right-width: ${(props) => (props.view === 'Grid' ? '0' : '1px')};
  border-left-width: ${(props) => (props.view === 'List' ? '0' : '1px')};
  cursor: pointer;
  padding: calc(0.375em - 1px) 0.75em;
  border-radius: ${(props) => (props.view === 'Grid' ? `4px 0 0 4px` : `0 4px 4px 0`)};

  &:hover {
    border-color: #b5b5b5;
  }
`;

const LectureList = styled.ul<ListViewProps>`
  ${(props) => (props.view === 'Grid' ? 'display: flex; flex-wrap: wrap; align-items: flex-start;' : '')}
  margin-top: 1rem;
`;

const Courses = () => {
  const router = useRouter();
  const { mainLectures, loadLectureLoading } = useSelector((state: RootState) => state.lecture);
  const dispatch = useDispatch();

  const [queryView, setQueryView] = useState<string | string[]>('Grid');

  useEffect(() => {
    // 외부에서 접근하는 url을 다루는 경우에는 window.location을 사용해야함.
    // next/router는 클라이언트 측 전환을 처리함.
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const view = params.get('view');
    // url(ex. localhost:3000/courses?view=List)을 통해 바로 접근한 경우 쿼리 스트링에 view parameter가 존재한다면,  view parameter 값에 대한 스타일 보여주기
    if (view) setQueryView(view);

    dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
  }, []);

  const handleSubmit = () => {
    console.log('success!');
  };

  const handleListViewClick = useCallback(
    (value: string) => {
      // 선택한 버튼이 이미 선택되어 있는 경우 if문 아래 코드 실행 안함
      if (queryView === value) {
        return;
      }

      router.replace({
        pathname: '/courses',
        query: { view: value },
      });

      dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
      setQueryView(value);
    },
    [queryView, router]
  );

  return (
    <AppLayout>
      <CoursesSection>
        <CoursesWrapper>
          <Grid container>
            <Grid item xs={2}>
              <CategoryMenu />
              <LectureFilter />
            </Grid>
            <CoursesViewGrid item xs={10}>
              <CoursesHeader>
                <LectureSearchForm name="lectureSearch" onSubmit={handleSubmit}>
                  <LectureSearchInput type="text" placeholder="강의 검색하기" />
                  <LectureSearchBtn type="submit">검색</LectureSearchBtn>
                </LectureSearchForm>
              </CoursesHeader>
              <nav>카테고리 경로</nav>
              <ListViewBtn
                type="button"
                isSelected={queryView === 'Grid'}
                view="Grid"
                onClick={() => handleListViewClick('Grid')}
              >
                <ViewComfyIcon />
              </ListViewBtn>
              <ListViewBtn
                type="button"
                isSelected={queryView === 'List'}
                view="List"
                onClick={() => handleListViewClick('List')}
              >
                <ListIcon />
              </ListViewBtn>
              <span>카드 정렬 선택</span>
              <div>기술검색</div>
              <div className="lecture-list">
                {loadLectureLoading ? (
                  <LoadingSpinner />
                ) : (
                  // view의 값은 router.query.view값 가져와서 사용하기
                  <LectureList view={queryView}>
                    {mainLectures?.map((lecture: ILecture, idx: number) =>
                      queryView === 'Grid' ? (
                        <LectureCard key={lecture.id} lecture={lecture} />
                      ) : (
                        <HorizonLectureCard key={lecture.id} lecture={lecture} index={idx} />
                      )
                    )}
                  </LectureList>
                )}
              </div>
              <div>페이지네이션</div>
            </CoursesViewGrid>
          </Grid>
        </CoursesWrapper>
      </CoursesSection>
      <section>지식공유참여 및 인프런 비즈니스</section>
    </AppLayout>
  );
};

export default Courses;
