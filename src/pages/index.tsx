import { ReactNode } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
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
            <li className="lecture__card">
              <div className="lecture__card__wrapper">
                <div className="lecture__card__image" />
                <div className="lecture__card__contents">
                  <h3 className="lecture__card__title">만들면서 학습하는 리액트(react)</h3>
                  <div className="lecture__card__author">김정환</div>
                  <div className="rating">
                    <span className="rating__star">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                      <StarBorderIcon />
                    </span>
                    <span className="lecture__card__review-count">(7)</span>
                  </div>
                  <div className="lecture__card__price">&#8361; 55,000</div>
                  <div className="lecture__card__tags">
                    <span className="tag">+200명</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="lecture__card">
              <div className="lecture__card__wrapper">
                <div className="lecture__card__image" />
                <div className="lecture__card__contents">
                  <h3 className="lecture__card__title">만들면서 학습하는 리액트(react)</h3>
                  <div className="lecture__card__author">김정환</div>
                  <div className="rating">
                    <span className="rating__star">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                      <StarBorderIcon />
                    </span>
                    <span className="lecture__card__review-count">(7)</span>
                  </div>
                  <div className="lecture__card__price">&#8361; 55,000</div>
                  <div className="lecture__card__tags">
                    <span className="tag">+200명</span>
                  </div>
                </div>
              </div>
            </li>
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
