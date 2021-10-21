import React, { useCallback, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
import { LOAD_ALL_LECTURES_REQUEST, SEARCH_LECTURES_REQUEST } from 'src/redux/reducers/lecture';
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
  view: string | null;
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

const LectureOrderWrapper = styled.div`
  position: absolute;
  display: inline-block;
  width: 114px;
  z-index: 1;
`;

const LectureOrderSelect = styled.select`
  padding: calc(0.5em - 1px) calc(0.625em - 1px);
  width: 100%;
  background: transparent;
  font-size: 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-color: #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #1dc078;
    box-shadow: 0 0 0 0.125em rgb(29 192 120 / 25%);
  }

  + svg {
    position: absolute;
    top: 11px;
    left: 80px;
    font-size: 1rem;
    transform: rotate(90deg);
    z-index: -1;
  }
`;

const LectureList = styled.ul<ListViewProps>`
  ${(props) => (props.view === 'Grid' ? 'display: flex; flex-wrap: wrap; align-items: flex-start;' : '')}
  margin-top: 1rem;
`;

const Courses = () => {
  const router = useRouter();
  const { mainLectures, loadLectureLoading, searchLecturesLoading } = useSelector((state: RootState) => state.lecture);
  const dispatch = useDispatch();

  type queryListProps = {
    view?: string | null;
    order?: string | null;
  };

  const queryList = useRef<queryListProps>({});
  const queryOrder = useRef<string | null>('');
  const queryView = useRef<string | null>('Grid');
  const orderArr = [
    { value: 'recommand', label: '추천순' },
    { value: 'popular', label: '인기순' },
    { value: 'recent', label: '최신순' },
    { value: 'rating', label: '평점순' },
    { value: 'famous', label: '학생순수' },
  ];

  useEffect(() => {
    // 외부에서 접근하는 url을 다루는 경우에는 window.location을 사용해야함.
    // next/router는 클라이언트 측 전환을 처리함.
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const view = params.get('view');
    const order = params.get('order');
    // url(ex. localhost:3000/courses?view=List)을 통해 바로 접근한 경우 쿼리 스트링에 view parameter가 존재한다면,  view parameter 값에 대한 스타일 보여주기
    if (view) queryView.current = view;
    if (order) {
      queryOrder.current = order;
      queryList.current.order = order;
    }

    if (Object.keys(queryList.current).length === 0) {
      dispatch({
        type: LOAD_ALL_LECTURES_REQUEST,
      });
    } else {
      dispatch({
        type: SEARCH_LECTURES_REQUEST,
        data: queryList.current,
      });
    }
  }, []);

  const handleSubmit = () => {
    console.log('success!');
  };

  const handleListViewClick = useCallback(
    (value: string) => {
      // 선택한 버튼이 이미 선택되어 있는 경우 if문 아래 코드 실행 안함
      if (queryView.current === value) {
        return;
      }
      queryView.current = value;

      const addView = { view: queryView.current } || '';

      router.replace({
        pathname: '/courses',
        query: {
          ...addView,
          ...queryList.current,
        },
      });

      // view 버튼 클릭 시 매번 재요청 하는 것 고민하기
      // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
    },
    [queryView, router]
  );

  const handleOrderChange = useCallback((e) => {
    const result = e.target.value;
    // view는 queryList.current에 포함시켜서 서버에 전달할 필요가 없으므로 따로 객체 추가
    const addView = { view: queryView.current } || '';

    queryList.current.order = result;

    router.replace({
      pathname: '/courses',
      query: {
        ...addView,
        ...queryList.current,
      },
    });

    dispatch({
      type: SEARCH_LECTURES_REQUEST,
      data: queryList.current,
    });

    queryOrder.current = result;
  }, []);

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
                isSelected={queryView.current === 'Grid'}
                view="Grid"
                onClick={() => handleListViewClick('Grid')}
              >
                <ViewComfyIcon />
              </ListViewBtn>
              <ListViewBtn
                type="button"
                isSelected={queryView.current === 'List'}
                view="List"
                onClick={() => handleListViewClick('List')}
              >
                <ListIcon />
              </ListViewBtn>
              <LectureOrderWrapper>
                <LectureOrderSelect onChange={handleOrderChange}>
                  {React.Children.toArray(
                    orderArr.map((item) => (
                      <option selected={item.value === queryOrder.current} value={item.value}>
                        {item.label}
                      </option>
                    ))
                  )}
                </LectureOrderSelect>
                <ArrowForwardIosIcon />
              </LectureOrderWrapper>
              <div>기술검색</div>
              <div className="lecture-list">
                {loadLectureLoading || searchLecturesLoading ? (
                  <LoadingSpinner />
                ) : (
                  // view의 값은 router.query.view값 가져와서 사용하기
                  <LectureList view={queryView.current}>
                    {mainLectures?.map((lecture: ILecture, idx: number) =>
                      queryView.current === 'Grid' ? (
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
