module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    urlImports: [
      'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
      'https://github.com/vercel/next.js/raw/canary/test/integration/production/public/vercel.png',
      'https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif',
    ],
  },
  swcMinify: false, // Terser : A JavaScript parser and mangler/compressor toolkit for ES6+.
  images: {
    // <Image src="cdn.inflearn.com/something" /> 에서 외부 이미지를 사용하는 경우에 필요
    domains: ['cdn.inflearn.com'],
  },
  async rewrites() {
    return [
      {
        destination: 'https://www.ark-inflearn.shop/api/:path*',
        source: '/api/:path*',
      },
    ];
  },
};
