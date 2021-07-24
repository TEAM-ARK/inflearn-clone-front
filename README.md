# 📚 Inflearn-Clone-Frontend

## 📖 개요(Summary)

인프런 웹앱을 만들어보는 팀프로젝트

[Inflearn-clone-back repository](https://github.com/TaehwanGo/inflearn-clone-back)

---

<br />

## 🎯 목표(Objectives)

- 팀프로젝트 및 협업 경험
- Hard skill 및 Soft skill 향상

---

<br />

## 📆 개발기간(Develop period)

2021.07.05 ~ 진행중

---

<br />

## 💻 라이브러리 및 기술 스택(Library & Stack)

- Language : Typescript
- Library : Reactjs
- Server : Nextjs
- Style : Meterial-UI & Styled-components

---

<br />

## 📑 할 일 (Things to do)

- [ ] 프론트엔드 세팅 : Typescript, Layout ...
- [ ] 메인 페이지
- [ ] 회원가입 페이지

---

<br />

## ✨ 주요 기능

- 반응형 웹 페이지
- SSR

---

<br />

## 📗 작업 내용

<details>
<summary>2021.07.08(NOAH))</summary>

github repository 생성

- collaborator 초대
- branch protect rule 설정

</details>

<details>
<summary>2021.07.09(NOAH))</summary>

Readme 작성
react-hook-form 적용

참고문헌

- [nextjs, typescript, meterial-ui and jest set-up](https://documentationnerds.com/blog/tech/setup-next-frontend-with-typescript-eslint-prettier-jest-and-react-testing-library)
</details>

<details>
<summary>2021.07.10(Tony)</summary>

### npm run dev 실행 안됨

- [x] next와 next dev의 차이는 ?

  - [What is the difference between next (dev) and next build && next start ?](https://github.com/vercel/next.js/discussions/15053)
  - 같다

- [x] cross-env NODE_OPTIONS='--inspect' next dev는 실행이 안된다.
  - NODE_OPTIONS='--inspect' 이것 때문에 안됨
    - NODE_OPTIONS=inspect 으로 수정하면 실행 됨
    - NODE_OPTIONS 이란 환경변수가 왜 필요한지 잘 모르겠음

### dir 배치 수정

- [x] src 안에 들어가야 할 것은 ?
  - https://nextjs.org/docs/advanced-features/src-directory
  - 앱을 실행하는데 필요한 내가 작성한 소스코드

### 레이아웃 및 컴포넌트 수정([Semantic tag](https://velog.io/@ru_bryunak/HTML-%EA%B8%B0%EC%B4%88-2-%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8%EB%9E%80#:~:text=2%2F8-,%EC%8B%9C%EB%A7%A8%ED%8B%B1%20%ED%83%9C%EA%B7%B8%EB%9E%80%3F,%EC%9D%B4%20%EC%8B%A4%ED%98%84%EB%90%A0%20%EC%88%98%20%EC%9E%88%EB%8B%A4.))

- [x] nav 태그를 div에서 nav로 변경, nav를 header로 감싸줌

  - inflearn 공홈에서 개발자 도구로 태그를 확인하여 똑같이 만들어 줌

- [ ] pages dir 안에 \_document, \_app, index 등 next에서 제안하는 페이지 구성방식 확인 후 정리
  - \_document :
  - \_app :
  - index :

### 기타 설정파일 확인

- [ ] tsconfig.json 에서 include 부분 다시 확인하기

</details>

<details>
<summary>2021.07.11(Tony)</summary>

- [x] header, footer 윤곽만 잡기

### home page

- [ ] slider 공간만 만들기
- [x] 검색창 모양만 만들기
- [ ] 강의 카드 컴포넌트 만들기
  - li.lecture\_\_card{card$}\*10
  - [emmet을 통해 효율적으로 작성](https://webruden.tistory.com/77)

```html
<li className="lecture__card">card1</li>
<li className="lecture__card">card2</li>
<li className="lecture__card">card3</li>
<li className="lecture__card">card4</li>
<li className="lecture__card">card5</li>
<li className="lecture__card">card6</li>
<li className="lecture__card">card7</li>
<li className="lecture__card">card8</li>
<li className="lecture__card">card9</li>
<li className="lecture__card">card10</li>
```

</details>

<details>
<summary>2021.07.12(Tony)</summary>

### Things to do

- [x] 강의 카드 컴포넌트 만들기
- [x] 더미 데이터(json)으로 강의 컴포넌트 home에 띄우기
  - [ ] 실제로 api로 받아오는 과정 알아보기
- [ ] media query 로 반응형 화면 만들 때 스크린 사이즈 나누는 구간 알아보기
- [x] slider 공간만 만들기
- [ ] search안의 title 문구 매일 바뀌게 하기

### home page

- html 원달러 표시 : `&#8361;`
- 천단위 콤마 : [정규식 이용](https://hianna.tistory.com/441)

### 참고 문헌

- [html에 원달러 표시 대신 reverse solidus 나올 때](https://sqlplus.tistory.com/entry/html-%EC%86%8C%EC%8A%A4%EC%97%90-%EC%9B%90%ED%99%94%ED%86%B5%ED%99%94%ED%91%9C%EC%8B%9C%EB%A5%BC-%ED%95%A0%EB%95%8C-%EC%97%AD%EC%8A%AC%EB%A0%88%EC%89%AC%EB%A1%9C-%EB%82%98%EC%98%AC%EB%95%8C-%EC%B2%98%EB%A6%AC%EB%B0%A9%EB%B2%95)

</details>

<details>
<summary>2021.07.17(Tony)</summary>

### tsconfig.json 속성

- [컴파일러 옵션 설정](https://typescript-kr.github.io/pages/compiler-options.html)

- include, exclude 속성은 glob과 유사한 파일 패턴 목록을 가짐

  - \*: 모든 문자(디렉토리 구분기호 제외)
  - ?: 한 문자와 매칭(디렉토리 구분기호 제외)
  - \*\*/ : 반복적으로 모든 하위 디렉토리와 매칭
  - "src/\*/\*\*" : src 안의 모든 하위 디렉토리 + 지원하는 확장자(ex. .ts, .tsx, .d.ts)
    - allowJs가 true(true로 설정 해놓은 상태)이면 .js와 .jsx 도 포함

- [ ] next에서 typescript return type, prop type 알아보기
  - [x] type vs interface
    - interface로 표현할 수 없는 형태가 아니면 interface를 이용하자
  - [ ] next에서 return type, prop type을 어떻게 지정하는게 좋은지 알아보기

### 참고 문헌

- [typescript-kr, tsconfig.json](https://typescript-kr.github.io/pages/tsconfig.json.html)
- [type vs interface가 더 낫다](https://yceffort.kr/2021/03/typescript-interface-vs-type)
- [type과 interface 차이](https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c)

</details>

<details>
<summary>2021.07.23(Tony)</summary>

## Issue #9 : AppLayout 구조 적용

### \_document, \_app, index 우선순위 파악

- \_document.js는 시작점 : HTML Document
- \_app.js : 공통의 레이아웃 작성
- index.js : "/"로 시작되는 경로
- \_error.js : Error page : 아직 잘 모름

참고 문헌

- [개인블로그 : next.js 구조](https://salgum1114.github.io/nextjs/2019-05-06-nextjs-static-website-1/)

document > app > index 순으로 내려와서 index에 본격적으로 만들면 될 것 같다

- 현재 AppLayout 이라는 공통 component를 만들어서 header와 footer가 필요한 곳이면 사용 할 수 있게 함

### styled component 설치

- npm i styled-components
- noah님하고 상의하고 웬만하면 .css파일을 작성하지 않는 방향으로 진행해볼 예정

typescript는 입력이 예상되는 props에 대한 type검사는 할 수 있겠지만
react에서 어떻게 써야되는지는 알아볼 필요가 있음

</details>
