import { ReactNode } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Head from 'next/head';
import data from 'src/api/dummyData'; // test용 더미데이터
import LectureCard from 'src/components/lectureCard';

export default function Home(): ReactNode {
  return (
    <>
      <Head>
        <title>Team Ark | home</title>
      </Head>

      <main>
        <section>
          {/* slide ad */}
          <div>slider</div>
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
                commentCount={lecture.commentCount}
                price={lecture.price}
                studentCount={lecture.studentCount}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
