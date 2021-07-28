import Footer from './footer';
import Header from './header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
