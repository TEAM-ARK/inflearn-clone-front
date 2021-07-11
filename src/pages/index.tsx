// index.tsx
import { ReactNode } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Head from 'next/head';

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
          <h1 className="search__title">성장기회의 평등을 추구합니다.</h1>
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
          <ul className="lecture__list">
            <li className="lecture__card">card1</li>
            <li className="lecture__card">card2</li>
            <li className="lecture__card">card3</li>
            <li className="lecture__card">card4</li>
            <li className="lecture__card">card5</li>
            <li className="lecture__card">card6</li>
            <li className="lecture__card">card7</li>
            <li className="lecture__card">card8</li>
            <li className="lecture__card">card9</li>
            <li className="lecture__card">card10</li>
          </ul>
        </section>
      </main>
    </>
  );
}
