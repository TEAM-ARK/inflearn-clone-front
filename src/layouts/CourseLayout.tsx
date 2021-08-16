import Header from '../components/Header';

const CourseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <header>내 강의 만들기</header>
      <div>
        <nav>강의 제작</nav>
        <main>{children}</main>
        <aside>눈길을 끄는 제목 장성 꿀팁!</aside>
      </div>
    </>
  );
};

export default CourseLayout;
