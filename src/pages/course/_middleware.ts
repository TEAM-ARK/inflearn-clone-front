// next js 12 middleware test file

// import React from 'react';
import { NextApiResponse } from 'next';
import { redirect } from 'next/dist/server/api-utils';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log('middleware test req', req);
  // console.log('middleware test ev', ev);
  // return new Response('Hello, world!');
  console.log('req.url', req.url);
  // const res = NextResponse.rewrite()
  // const red = NextResponse.redirect('/');
  return new Response('Hello, world!');
}
