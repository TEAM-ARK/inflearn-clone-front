import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    // 기존 css 파일들 styled component로 옮기는 작업 진행할 예정
    // 이 파일은 globals.css 파일에 있는 것을 그대로 가져오면 됨
    .slick-slide {
        display: inline-block;
    }
`;

export default Global;
