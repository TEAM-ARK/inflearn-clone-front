import { ReactNode, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LectureCard from '@components/lectureCard/LectureCard';
import LoadingSpinner from '@components/LoadingSpinner';
import { MainSlider } from '@components/Slider';
import AppLayout from 'src/layouts/AppLayout';
import { RootState } from 'src/redux/reducers';
import { LOAD_ALL_LECTURES_REQUEST } from 'src/redux/reducers/lecture';
import { ILecture } from 'src/redux/reducers/types';

const Search = styled.section`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 580px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const SearchForm = styled.form`
  width: 100%;
  margin: auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  background-color: rgba(29, 192, 120, 0.12);
  border: 1px solid rgba(29, 192, 120, 0.24);
  border-radius: 28px;
  padding: 14px 20px;
  font-size: medium;
  color: #5f5f5f;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  transition: all 0.2s ease;

  &::placeholder {
    color: #5f5f5f;
    opacity: 0.5;
    font-weight: 600;
  }

  &:focus {
    outline: unset;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    background-color: white;
    border-color: #5f5f5f36;
  }
`;

const SearchSubmitBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const LectureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 1rem;
`;

const LectureTitle = styled.h1`
  margin-left: 12px;
`;

const AddLectureBtnWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: right;
  & > button {
    margin: 10px;
    padding: 10px;
    background-color: var(--color-light-green);
    border-radius: 4px;
    color: white;
  }
`;

const Home = (): ReactNode => {
  const router = useRouter();
  const { mainLectures, loadLectureLoading } = useSelector((state: RootState) => state.lecture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
  }, []); // [] : Home component 처음 로드 시 1회만 실행
  const onClickAddLecture = () => {
    console.log('onClickAddLecture');
    dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
  };
  const onClickCreateLecture = () => {
    router.push('/create_course');
  };
  return (
    <AppLayout>
      <Head>
        <title>Team Ark | home</title>
      </Head>

      <>
        <section>
          <MainSlider />
        </section>
        <Search className="container">
          {/* test button to add lectures  */}
          <AddLectureBtnWrapper>
            <button onClick={onClickAddLecture} type="button">
              add lectures
            </button>
            <button onClick={onClickCreateLecture} type="button">
              create lecture
            </button>
          </AddLectureBtnWrapper>
          <h1 className="title">성장기회의 평등을 추구합니다.</h1>
          <SearchWrapper>
            <SearchForm>
              <SearchInput type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
              <SearchSubmitBtn type="submit">
                <SearchIcon />
              </SearchSubmitBtn>
            </SearchForm>
          </SearchWrapper>
        </Search>
        <section className="container">
          <LectureTitle className="title">전체 강의</LectureTitle>
          {loadLectureLoading ? (
            <LoadingSpinner />
          ) : (
            <LectureList>
              {mainLectures?.map((lecture: ILecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </LectureList>
          )}
        </section>
      </>
    </AppLayout>
  );
};

export default Home;
