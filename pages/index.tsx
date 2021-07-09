// index.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

export default function Home(): ReactNode {
  return (
    <>
      <Head>
        <title>인프런 - 프로가 되는 온라인 클래스 | 온라인 강의 플랫폼</title>
      </Head>
      <div>nav</div>
      <main>Main page</main>
      <footer>footer</footer>
    </>
  );
}
