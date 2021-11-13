import React, { useEffect } from 'react';
// import inflearnLogo from 'https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif';
// import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
// import logo from 'https://github.com/vercel/next.js/raw/canary/test/integration/production/public/vercel.png';
import NotFoundPage from '@components/404';

// const TestPage = () => <NotFoundPage />;
const TestPage = () => {
  //   const getSomeApiResult = () => {
  //     const result = axios.get('https://catfact.ninja/fact');
  //     console.log('result', result);
  //   };
  //   useEffect(() => {
  //     console.log('axios', axios);
  //     getSomeApiResult();
  //   }, []);
  return (
    <div>
      <NotFoundPage />
      {/* <img src={logo} alt="logo" />
      <img src={inflearnLogo} alt="logo" /> */}
    </div>
  );
};

export default TestPage;
