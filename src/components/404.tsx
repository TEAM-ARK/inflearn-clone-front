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

const Main = styled.main`
  margin: 2rem;
`;

const Message = styled.div`
  z-index: 2;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 2rem;
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
      <Main className="main">
        <Message className="message">
          <Title className="title">해당 페이지를 찾지 못 했습니다.</Title>
          <Description className="description">주소가 잘못되었거나 더 이상 제공되지 않는 페이지 입니다.</Description>
          <Link href="/">
            <LinkTag>
              <Description>
                <span className="description" role="img" aria-label="emojis">
                  메인페이지로 이동 🏠🏃🏻‍♀
                </span>
              </Description>
            </LinkTag>
          </Link>
        </Message>
        {/* <Image src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif" width="200px" height="200px" /> */}
        <CodingCatImage
          src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif"
          //   width="80%"
          //   height="80%"
          alt="404 image"
        />
      </Main>
      {/* style jsx와 styled-components를 같이쓰면 styled-components인식을 못 함 */}
      {/* <style jsx>{`
        .main {
          margin: 2rem;
        }
        .message {
          z-index: 2;
          position: absolute;
        }
        .title {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .description {
          font-size: 2rem;
        }
      `}</style> */}
    </NotFoundPageWrap>
  );
};

export default NotFoundPage;
