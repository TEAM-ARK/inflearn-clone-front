import { ReactNode } from 'react';
import Head from 'next/head';

export default function Signup(): ReactNode {
  return (
    <>
      <Head>
        <title>회원가입 - 인프런 | 온라인 강의 플랫폼</title>
      </Head>
      <button type="button">sign up</button>
    </>
  );
}
