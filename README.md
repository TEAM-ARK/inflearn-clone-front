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

- [ ] 더미 데이터(json)으로 강의 컴포넌트 home에 띄우기

</details>
