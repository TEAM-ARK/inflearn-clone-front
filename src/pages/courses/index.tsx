import React, { useCallback, useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListIcon from '@material-ui/icons/List';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryMenu from '@components/CategoryMenu';
import HorizonLectureCard from '@components/lectureCard/HorizonLectureCard';
import LectureCard from '@components/lectureCard/LectureCard';
import LectureFilter from '@components/LectureFilter';
import LoadingSpinner from '@components/LoadingSpinner';
import SkillsSearch from '@components/SkillsSearch';
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
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;

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

type LectureViewProps = {
  view: string | null;
  isSelected?: boolean;
};

const LectureViewBtn = styled.button<LectureViewProps>`
  ${(props) => (props.isSelected ? getSelectedStyle() : '')}

  background: white;
  border: 1px solid #dbdbdb;
  border-right-width: ${(props) => (props.view === 'Grid' ? '0' : '1px')};
  border-left-width: ${(props) => (props.view === 'List' ? '0' : '1px')};
  cursor: pointer;
  padding: calc(0.375em - 1px) 0.75em;
  border-radius: ${(props) => (props.view === 'Grid' ? `4px 0 0 4px` : `0 4px 4px 0`)};
  height: 40px;

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
  height: 40px;
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

const LectureCardWrapper = styled.ul<LectureViewProps>`
  ${(props) =>
    props.view === '' || props.view === 'Grid' ? 'display: flex; flex-wrap: wrap; align-items: flex-start;' : ''}
  margin-top: 1rem;
`;

const ResetBtn = styled.button`
  position: relative;
  background: white;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  padding: calc(0.375em - 1px) 0.75em;
  border-radius: 4px;
  width: 90px;
  height: 40px;
  font-size: 1rem;

  & > svg {
    position: relative;
    left: 25px;
    top: 3px;
  }
`;

const ResetText = styled.span`
  position: absolute;
  left: 10px;
  top: 7px;
`;

const Courses = () => {
  const router = useRouter();
  const { mainLectures, loadLectureLoading, searchLecturesLoading } = useSelector((state: RootState) => state.lecture);
  const dispatch = useDispatch();

  type queryListProps = {
    view?: string | null;
    order?: string | null;
    skill?: string | null;
  };

  const queryList = useRef<queryListProps>({});
  const queryOrder = useRef<string | null>('');
  const queryView = useRef<string>('');
  const orderArr = [
    { value: 'recommend', label: '?????????' },
    { value: 'popular', label: '?????????' },
    { value: 'recent', label: '?????????' },
    { value: 'rating', label: '?????????' },
    { value: 'famous', label: '????????????' },
  ];
  useEffect(() => {
    // ???????????? ???????????? url??? ????????? ???????????? window.location??? ???????????????.
    // next/router??? ??????????????? ??? ????????? ?????????.
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const view = params.get('view');
    const order = params.get('order');

    // url(ex. localhost:3000/courses?view=List)??? ?????? ?????? ????????? ?????? ?????? ???????????? view??? ???????????????,  ??? view ?????? queryView??? ????????? ?????? view ???????????? ????????????
    if (view) queryView.current = view;
    // ??????????????? url??? ?????? ???????????? order??? ????????? ??????, ??? order ?????? queryOrder??? ????????? ?????? order ?????? ?????? ????????? ????????????
    if (order) {
      queryOrder.current = order;
      queryList.current.order = order;
    }

    // ?????? ??????(ex. Order, View ??????)??? ???????????? ?????? ??????
    if (Object.keys(queryList.current).length === 0) {
      dispatch({
        type: LOAD_ALL_LECTURES_REQUEST,
      });
      return;
    }

    // ?????? ????????? ????????? ??????
    dispatch({
      type: SEARCH_LECTURES_REQUEST,
      data: queryList.current,
    });
  }, []);

  useEffect(() => {
    // unmount??? useRef??? ???????????? ????????? ?????????
    return () => {
      queryView.current = '';
      queryOrder.current = '';
      queryList.current = {};
    };
  }, []);

  const handleSubmit = () => {
    console.log('success!');
  };

  const handleViewClick = useCallback(
    (value: string) => {
      // ????????? ????????? ?????? ???????????? ?????? ?????? if??? ?????? ?????? ?????? ??????
      if (queryView.current === value) {
        return;
      }
      queryView.current = value;

      router.replace({
        pathname: '/courses',
        query: {
          view: queryView.current,
          ...queryList.current,
        },
      });

      // view ?????? ?????? ??? ?????? ????????? ?????? ??? ????????????
      // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
    },
    [queryView, router]
  );

  const handleOrderChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const result = e.target.value;
    // view??? queryList.current??? ??????????????? ????????? ????????? ????????? ???????????? ?????? ?????? ??????
    const addView = queryView.current.length ? { view: queryView.current } : '';

    queryList.current.order = result;

    router.replace({
      pathname: '/courses',
      query: {
        ...addView,
        ...queryList.current,
      },
    });

    // url ?????? ???, ?????? ???????????? ?????? ?????? ?????? ?????? ??????
    dispatch({
      type: SEARCH_LECTURES_REQUEST,
      data: queryList.current,
    });

    queryOrder.current = result;
  }, []);

  const handleResetClick = useCallback(() => {
    // queryView??? queryList ?????? ?????? ???????????? ????????? ????????? ??????????????? ??????????????? ???????????? ?????? ????????? ??????.
    if (!queryView.current && !Object.keys(queryList.current).length) {
      return;
    }

    queryView.current = '';
    queryOrder.current = '';
    queryList.current = {};

    router.replace('/courses');

    dispatch({
      type: LOAD_ALL_LECTURES_REQUEST,
    });
  }, [dispatch, router]);

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
                  <LectureSearchInput type="text" placeholder="?????? ????????????" />
                  <LectureSearchBtn type="submit">??????</LectureSearchBtn>
                </LectureSearchForm>
              </CoursesHeader>
              <nav>???????????? ??????</nav>
              <ResetBtn type="button" onClick={handleResetClick}>
                <ResetText>?????????</ResetText> <RefreshIcon />
              </ResetBtn>
              <LectureViewBtn
                type="button"
                isSelected={!queryView.current || queryView.current === 'Grid'}
                view="Grid"
                onClick={() => handleViewClick('Grid')}
              >
                <ViewComfyIcon />
              </LectureViewBtn>
              <LectureViewBtn
                type="button"
                isSelected={queryView.current === 'List'}
                view="List"
                onClick={() => handleViewClick('List')}
              >
                <ListIcon />
              </LectureViewBtn>
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
              <SkillsSearch />
              <div className="lecture-list">
                {loadLectureLoading || searchLecturesLoading ? (
                  <LoadingSpinner />
                ) : (
                  // view??? ?????? router.query.view??? ???????????? ????????????
                  <LectureCardWrapper view={queryView.current}>
                    {mainLectures?.map((lecture: ILecture, idx: number) =>
                      queryView.current === '' || queryView.current === 'Grid' ? (
                        <LectureCard key={lecture.id} lecture={lecture} />
                      ) : (
                        <HorizonLectureCard key={lecture.id} lecture={lecture} index={idx} />
                      )
                    )}
                  </LectureCardWrapper>
                )}
              </div>
              <div>??????????????????</div>
            </CoursesViewGrid>
          </Grid>
        </CoursesWrapper>
      </CoursesSection>
      <section>?????????????????? ??? ????????? ????????????</section>
    </AppLayout>
  );
};

export default Courses;
