import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
`;

const LinkTag = styled.a`
  cursor: pointer;
  color: var(--color-light-green);
`;

const NotFoundPageWrap = styled.section`
  padding: 1.5rem;
`;

// const CodingCatImage = styled(Image) 에서 img로 변경
const CodingCatImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80%;
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageWrap>
      <Header>
        <Link href="/">
          <LinkTag>
            <img src="https://cdn.inflearn.com/assets/brand/brand_logo.png" width="180px" alt="logo" />
          </LinkTag>
        </Link>
      </Header>
      <main style={{ margin: '2rem' }}>
        <div style={{ zIndex: 2, position: 'absolute' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>해당 페이지를 찾지 못 했습니다.</h1>
          <p style={{ fontSize: '2rem' }}>주소가 잘못되었거나 더 이상 제공되지 않는 페이지 입니다.</p>
          <Link href="/">
            <LinkTag>
              <span style={{ fontSize: '2rem' }} role="img" aria-label="emojis">
                메인페이지로 이동 🏠🏃🏻‍♀
              </span>
            </LinkTag>
          </Link>
        </div>
        {/* <Image src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif" width="200px" height="200px" /> */}
        <CodingCatImage
          src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif"
          //   width="80%"
          //   height="80%"
          alt="404 image"
        />
      </main>
    </NotFoundPageWrap>
  );
};

export default NotFoundPage;
