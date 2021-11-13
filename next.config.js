module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  swcMinify: false, // Terser : A JavaScript parser and mangler/compressor toolkit for ES6+.
  images: {
    // <Image src="cdn.inflearn.com/something" /> 에서 외부 이미지를 사용하는 경우에 필요
    domains: ['cdn.inflearn.com'],
  },
};
