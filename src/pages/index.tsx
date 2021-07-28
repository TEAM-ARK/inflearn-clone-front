import { ReactNode } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { MainSlider } from '@components/Slider';
import { data } from 'src/api/dummyData'; // test용 더미데이터
import LectureCard from 'src/components/lectureCard';

const Home = (): ReactNode => {
  return (
    <AppLayout>
      <Head>
        <title>Team Ark | home</title>
      </Head>

      <main>
        <section>
          <MainSlider />
        </section>
        <section className="container search">
          {/* search */}
          <h1 className="title">성장기회의 평등을 추구합니다.</h1>
          <div className="search__wrapper">
            <form className="search__form">
              <input className="search__input" type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
              <button className="search__submit-btn" type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </section>
        <section className="container">
          <h1 className="title">전체 강의</h1>
          <ul className="lecture__list">
            {data?.map((lecture) => (
              <LectureCard
                key={lecture.id}
                id={`${lecture.id}`}
                coverImage={lecture.coverImage}
                title={lecture.title}
                author={lecture.author}
                rating={lecture.rating}
                commentCount={lecture.commentCount}
                price={lecture.price}
                studentCount={lecture.studentCount}
              />
            ))}
          </ul>
        </section>
      </main>
    </AppLayout>
  );
};

export default Home;
