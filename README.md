# 📚 Inflearn-Clone-Frontend

## 📖 개요(Summary)

인프런 웹앱을 만들어보는 팀프로젝트

[Inflearn-clone-back repository](https://github.com/Ark-inflearn/inflearn-clone-back)

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

- [x] 프론트엔드 세팅 : Typescript, Layout ...
- [ ] 메인 페이지
- [ ] 회원가입 페이지
- [ ] Header, Footer layout

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

<details>
<summary>2021.07.24(Tony)</summary>

### 작업내용

- MainSlider 컴포넌트 추가
  - react-slick 라이브러리 사용

### 향후 계획

#### style

- [ ] .CSS 파일 styled component로 변경할 예정
- [ ] CSS style 관련 공통으로 사용하는 색상 등에 대한 상수값을 모아놓은 파일 생성

#### slider 기능 추가 및 수정

- [ ] 향후 배경색을 이미지와 같게하는 방법에 대해 생각해보고 변경
- [ ] 해당 슬라이드로 이동하는 버튼 추가
- [ ] 모바일 화면에 슬라이더 모양 변화하도록 수정
- [ ] 슬라이더에 링크 추가

#### 리덕스 및 사가 설정

</details>

<details>
<summary>2021.08.03(NOAH)</summary>

### 작업내용

- signup page 작성
  - Material-UI( CSS)
    - TextField: input과 같은 역할을 함
    - Typography: div와 같은 역할
    - Grid: Grid를 사용하여 Flex나 Grid와 같은 디자인을 쉽게 구현
    - IconButton: Material에서 제공하는 icon을 button으로 사용하게 해줌
    - styles.ts: custom css파일, className으로 변수값을 넘기면 custom 디자인이 적용됨
  - react-hook-form( form)
  - yup( signup rule)

### 향후 계획

#### style

- [x] SNS 로그인 디자인

#### 회원가입 rule

- [x] yup을 사용하여 회원가입 rule 설정
- [x] rule에 맞지 않은 경우 error 메시지 출력
- [ ] 이용약관, 개인정보취급방침 페이지 생성

</details>

<details>
<summary>2021.08.01~2, 5, 7, 8(Tony)</summary>

## Redux setting

### 1. 설치 모듈

#### npm install redux next-redux-wrapper react-redux --save

- redux
- next-redux-wrapper
  - Next.js의 서버사이드 렌더링 관련 복잡한 설정을 쉽게 해주는 HOC
- react-redux
  - react 바인딩

#### npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux

- redux-devtools-extension : 개발자 도구 사용을 위한 라이브러리

#### npm install redux-saga

- redux-saga는 type을 자체적으로 지원하기 때문에 @type/redux-saga는 필요 없음(deprecated 됨)

#### npm i immer

- 알아서 불변성을 지켜주는 라이브러리

#### npm i faker shortid

- npm i --save-dev @types/faker
- npm i --save-dev @types/shortid

- dummy data test를 동적으로 하기 위해 faker와 shortid를 설치

#### npm i axios

- saga에서 사용, 비동기 http통신(Promise based HTTP client for the browser and node.js)

#### npm i -S @redux-saga/core

- eslint가 지적해줘서 설치함

### 2. redux tree

redux

- reducers
  - index
  - user
  - lecture
  - types
- sagas
  - index
  - user
  - lecture
- configureStore

#### 2-1. commonState class 삭제

- loading, done, error의 반복되는 타이핑을 피하려고 했으나 done을 제거하고 loading, error만 사용하면 없는게 더 직관적이라서 없는게 낫다고 판단 함
- data도 class member 변수로 있었으나 막상 사용해보니 class 내 멤버변수에 있을 필요가 없었음

### 3. 기타

#### 리덕스 설치 및 세팅 중

- [x] State type 정의 해야 됨
- [x] User, Lecture - reducer, saga 설계
  - lecture만 샘플로 생성

#### eslint rule 중 'no-param-reassign': 'off' => immer 사용을 위해

#### main(home) page redux 동작 흐름

- 처음 화면을 불러올 때 LOAD_REQUEST action을 시작으로 데이터(Lecture card)를 불러 옴
- add 버튼을 누를 때마다 데이터가(Lecture card) 추가 됨
- 지금은 더미 데이터로 불러 오지만 api를 요청할 경우 request에서 호출 하는 부분만 추가하면 됨

#### 별점 표시 방식

- 소수점 둘 째 자리에서 반올림 후 소수점 첫 째 자리 저장
- n.2 ~ n.8 까진 별 반개(3.2~3.8은 3개 반)
- n.1 점까진 버림(3.1은 별 3개로 표시)
- n.9 점은 올림(3.9는 별 4개로 표시 됨)

### 4. 참고 문헌

- https://jktech.tistory.com/46
- 인프런 노드버드 강의
- https://medium.com/@raphat/next-js-typescript-redux-3fbc990cb901
- [next-redux-wrapper 공식문서](https://github.com/kirill-konshin/next-redux-wrapper)
- [RootState](https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate)

### 5. 프론트 회의 안건

- [ ] 타입 저장 위치 : interface나 type을 해당 파일에 놓을 것인지 따로 파일을 만들어서 정리를 할 것 인지
- [ ] 리덕스가 전체 강의 로드하는 부분을 샘플로 만들었는데 자신이 만들 UI관련 리덕스는 직접 만드는 것이 좋을 것 같음
- [ ] 관리자 페이지를 만들어야 하나..? slider 배경색은 DB에서 가져와야 될 것 같은데 이걸 매번 백엔드 개발자가 저장하는 것 보다 관리자페이지가 있으면 좋을 것 같음
  - 우선순위 낮음

</details>

<details>
<summary>2021.08.10(Tony)</summary>

슬라이더 리덕스 연결
slider 하나 때문에 reducer와 saga에 파일을 하나씩 만들기 번거로워서
lecture파일에 합쳐서 작업했습니다.

</details>

<details>
<summary>2021.08.10(NOAH)</summary>

### 작업내용

- signup page error case
  - Material-UI( CSS)
    - useStyle: material-ui에 직접 className으로 스타일을 적용하기 위한 hook, 적용하고자하는 속성을 객체로 생성하고 적용
    - createTheme: meterial-ui에서 이미 디자인된 속성들을 변경하고 싶은 경우 사용, ex) 색상, 크기, 패딩.. 등
  - react-hook-form( form)
    - Controller: material-ui와 같은 라이브러리를 연동하기 위한 wrapper
    - useFormContext: 중첩 된 구조에서 데이터를 전달하고자 할 때 사용, ex) 특정 form을 component로 빼서 관리하고 react-hook-form을 적용하는 경우
    - FormProvider: userFormContext가 적용하고자 하는곳의 wrapper
    - useForm: react-hook-form 기본 hook
  - yup( signup rule)
    - error 핸들시 schema 객체에 에러 핸들을 하고자하는 사항들을 정리하고 react-hook-form의 formState의 error에서 받아서 사용, ex) errors.email?.message
    - yup을 태그에 적용할때 태그 name과 yup에서의 정의 이름을 같게 해야 적용이 됨, ex) name: email / email: yup.string().min(10).max(30)....
    - matches: 정규표현식을 사용하기 위한 method
    - oneOf([yup.ref('email'), null]: 다른 input과 값이 일치하는지 여부를 확인하고자 할 때 사용
    - error 객체의 경우 submit하고 나서 적용 됨
    - 현재 정규표현식의 에러 핸들은 errors 객체의 message method를 확인하여 일치하는 방식으로 적용

### 오류해결

- Warning: Failed prop type: Invalid prop `error` of type `object` supplied to `ForwardRef(TextField)`, expected `boolean`
  - TextField 태그의 error에는 boolean값만 가능한데 yup에서의 에러 메시지는 문자열이 생성되기 때문에 문제가 되는 현상
    - error 태그에 !!를 두번 넣어 boolean 변수로 만들어주면 됨, ex) !!error.password

### 향후 계획

- Redux와 연결
- 로그인 모달 구현
- 공통 레이아웃 구현

#### 회원가입 rule

- [x] yup을 사용하여 회원가입 rule 설정
- [x] rule에 맞지 않은 경우 error 메시지 출력
- [ ] 이용약관, 개인정보취급방침 페이지 생성

</details>

<details>
<summary>2021.08.12(Tony)</summary>

### 메인페이지 리스트에 로딩 스피너 추가

- 서버사이드 렌더링이기 때문에 필요 없을 것 같기도 함
- 재미로 추가 해봄

### 메인페이지 강의 리스트

- 마우스 호버 시 나오는 description 추가
- [ ] 장바구니, 좋아요 등 아이콘에 설명 라벨 추가 해야 함
- [ ] 카드 전체적으로 크기 키워야 함

### 기타

- 컴포넌트 파일명 첫글자 대문자로 변경(노아님 요청사항)

### 참고문헌

- [react onHover event handling](https://upmostly.com/tutorials/react-onhover-event-handling-with-examples)

</details>

<details>
<summary>2021.08.13(Noah)</summary>

### Update Nextjs version 11

- Conformance
  - `npx next lint` 명령어를 치면 현재 app의 ESLint를 전체적으로 수행해서 메시지로 CLI에 보여줌
- Improved Performance
  - 11버전 업데이트를 하며 app을 열고 startup time을 24%이상 감소시키고 React refresh 관련하여 프로세싱 타임을 40%이상 감소시킴
  - Babel 관련 startup time 감소
  - 새로운 Babel loader 구축
  - 로딩, 메모리 캐싱과 관련하여 최적화
  - 개발자가 실제로 할 것은 없고 update만으로 이미 적용이 되는 사항
- Script Optimization

  - `next/script`
  - 웹사이트에 다른곳에서 가져와서 사용하는 기능들을 추가할때 라이브러리가 무겁거나 최적화의 문제가 있는데 이것을 Nextjs의 Script 태그가 해결해줌( polyfill, widgets 등)
  - Script 태그에 strategy 속성을 추가하면 자동적으로 최적화 및 성능 향상
    - third party 라이브러리의 실행 순서를 입맛에 맞게 설정 할 수 있음
    - beforeInteractive, afterInteractive( default), lazyOnload 속성

- Image Improvements
  - `next/image`
  - Image 로딩과 관련하여 성능 개선
    - Nextjs의 Image 태그를 사용하면 정적이미지의 가로/세로 크기를 자동으로 정의해줌
    - 인터넷이 느린 사용자를 위하여 blur 이미지를 Nextjs에서 태그 속성으로 제공
- Webpack 5
  - `next.config.js`
  - 웹팩5와 관련하여 다양한 특징 및 개선점들이 구축됨
- Create React App Migration (Experimental)
  - 새로운 툴 `@next/codemod` 개발
  - Create React App을 자동적으로 Nextjs로 변경해주는 툴
- Next.js Live (Preview Release)
  - 협업을 위한 기능
  - 웹사이트를 띄워놓은 상태에서 라이브로 마우스로 공간을 지정 할 수 있고 실시간 채팅도 가능한 기능

### 참고문헌

- [Nextjs docs](https://nextjs.org/blog/next-11#upgrade-guide)
- [Conformance](https://web.dev/introducing-aurora/)
- [Script](https://github.com/vercel/next.js/discussions/24938)
- [Script](https://docs.google.com/document/u/0/d/1ZEi-XXhpajrnq8oqs5SiW-CXR3jMc20jWIzN5QRy1QA/mobilebasic#)
- [Image](https://vercel.com/blog/core-web-vitals#cumulative-layout-shift)
- [Image](https://nextjs.org/docs/basic-features/image-optimization)
- [Webpack](https://nextjs.org/docs/messages/webpack5)

</details>

<details>
<summary>2021.08.14(Tony)</summary>

### 작업 내용

- 강의 카드 마우스 오버 할 때 나오는 설명 밑 아이콘 3개에 말풍선 추가
- lectureCard 폴더를 만들어서 components폴더 정리
- node notifier가 자동으로 설치됨(업데이트 하려고 npm i 하니 설치 됨)
  - cross platform(windows, mac, linux)에서 알람을 띄울 수 있는 모듈

### 참고문헌

- [CSS로 말풍선 만들기](https://ungdoli0916.tistory.com/753)

</details>

<details>
<summary>2021.08.16(Tony)</summary>

### 작업 내용

- AppLayout, CourseLayout을 components 폴더에서 layouts (신규)폴더로 이동
- [ ] create course 페이지에서 제목 입력 후 강의 만들기를 누르면 수정 페이지로 이동
- 강의 생성 후 id를 저장할 필요는 없을 것 같아서 리덕스를 사용하지 않음
  - 어떻게 하는게 좋을지 토론 필요

```typescript
const inputTitle = useRef<HTMLInputElement>(null);
```

- 초기값에 null을 박아줘야 된다. -> HTMLInputElement | null

#### next에서 redirect

```typescript
import { useRouter } from 'next/dist/client/router';
const router = useRouter();
router.push(`/course/${id}/edit/course_info`);
```

### 로컬 서버 세팅

```typescript
// app.ts or index.ts
app.use(
  cors({
    origin: true,
    // credentials: false
  })
);
app.use(express.json()); // front에서 json형태의 data를 보낼때 그것을 req.body에 넣어줌
app.use(express.urlencoded({ extended: true })); // form&submit을 하면 url encoded방식으로 data가 넘어오는데 그것을 req.body에 넣어줌

app.use('/create_course', lectureRouter);
```

```typescript
// lectureRouter
import * as express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  console.log('body', req.body);
  res.json({ id: 1234, result: 'ok' });
});

export default router;
```

### 나중에 추가해야 될 부분

- `/course/${id}/edit/course_info`으로 이동 시 내 강의가 아닌 곳으로 이동할 경우 404 띄워줘야 함
  - 유저가 GET방식으로 접속을 시도 할 때 서버에서 검증 후 수정페이지를 보여줄지 말지 결정

</details>

<details>
<summary>2021.08.19(Tony)</summary>

### create_course page

- create_course에서 강의 만들기 누르면 `/course/1/edit/course_info`로 이동하게 함
  - 나중에 서버 붙일 땐 주석 해제하면 됨
- 제목 없는 경우 alert 대신 경고 메세지가 뜨도록 함

### create_course -> edit 강의 제목 넘기기

- 리덕스 사용
- 기존 axios만 사용하던 것을 redux를 이용하도록 변경
  - saga effect의 put은 dispatch랑 비슷함

### saga call type

- `Generator<T, TReturn, TNext>`
- [x] generator function에서 type 지정하는 법 알아보기
  - https://github.com/microsoft/TypeScript/issues/26959

### test.css 파일 생성

- styled component 에서 자동완성을 잘 지원하지 않으므로 css파일을 테스트목적으로 만들음

### create course btn에 로딩 적용

- 로딩 시간 동안 클릭 방지(pointer-events), 투명도 변경(opacity)

### 참고문헌

- [styled component props](https://styled-components.com/docs/basics)
- [css prevent mouse click](https://stackoverflow.com/questions/44719980/how-to-prevent-the-click-event-using-css)
- [css pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [typescript styled components with props](https://stackoverflow.com/questions/47077210/using-styled-components-with-props-and-typescript)

</details>

<details>
<summary>2021.08.20(Tony)</summary>

### Things to do

- [x] create-course에서 store에 저장한 title 가져오기
- [ ] edit course info 앱 레이아웃 수정

</details>
<details>
<summary>2021.08.20, 21(Tony)</summary>

### 수정사항

- children에 type 적용
- header, footer 이름을 HeaderLayout, FooterLayout으로 변경( Next에 존재하는 이름이기 때문에 겹침)
- 컴포넌트의 재사용성을 위해서 기존 styles를 지우고 컴포넌트로 이동

### styled(Link) 안됨

```typescript
const SeeTheLecture = styled.button`
  font-weight: 800;
  width: 160px;
  height: 48px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
`;

<Link href={`/course/${id}`}>
  <SeeTheLecture>강의보기</SeeTheLecture>
</Link>;
```

- Link안에 button태그 넣는 방식으로 스타일링 적용

  - a태그로 하려 했으나 width가 적용이 안됨

- [ ] 강의 제작 column에 해당 페이지 일 때 글자 색 변화
  - course_info 페이지 -> 강의 정보 글자 색 진하게

</details>
<details>
<summary>2021.08.22(NOAH)</summary>

### Things to do

- [ ] 버튼에 스타일 적용
- [ ] responsive 화면 구성

### 수정사항

- 회원가입 페이지 및 컴포넌트 리팩토링
- useStyles 구조분해

```typescript
const { classname } = useStyles();
```

### 적용사항

- Header 구현
  - AppBar : 네비게이션 컨테이너
  - ToolBar : 안에 컨텐츠를 넣으면 Flex와 같이 자동정렬
- 적용해야 할 버튼을 headerData로 하여 추가
  - 추 후 변경이 있을때 쉽게 적용하기 위함

### 문제사항

- nextjs에서 html,body 태그가 전체화면이 되지 않아 \_app.tsx에 아래 스타일을 적용하였으나 메인페이지에서 적용되지 않는 현상
  - html이 전체 보이는 화면의 크기가 아니기 때문에 sticky가 중간에 짤림

```typescript
<style global jsx>
  {`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
    }
  `}
</style>
```

</details>

<details>
<summary>2021.08.22, 23(Tony)</summary>

- [ ] edit course layout
  - [x] column sticky
  - [x] 현재 페이지에 해당하는 부분 글자 진하게
  - [ ] modal : 눈길을 끄는 제목 작성 꿀팁
  - [ ] 페이지 로드 시 관련 데이터 가져와서 필수 조건 작성된 페이지는 초록색으로 v 표시
- [ ] course_info 페이지 구성

### CourseLayout.tsx

CourseHeaderContainer height + CourseLayoutGrid padding top(24px) + CourseNav padding top(0.75rem == 12px) 의 높이에 sticky

- StepContainer의 headerHeight prop에 바로 넣어 주면 CourseHeaderContainer height가 측정되지 않은 상태(undefined)로 계산이 되서 sticky의 top에 NaN이 들어감(sticky 적용 안됨)
- 페이지 로드할 때 useState의 headerHeight에 값을 넣어서 나중에 계산된 height값이 반영 되도록 함

### create_course.tsx

- 강의 id를 전달 받고 saga에서 직접 redirect시키도록 함(뒤로가기 안되는 문제 해결)

</details>

<details>
<summary>2021.08.24(Tony)</summary>

### create_course

- 강의 만들기 버튼을 누르지 않고 input text에서 제목 입력 후 엔터로도 강의 생성되도록 변경

### CourseLayout

- window.location.pathname에서 강의 생성후 수정페이지로 넘어갈 때 window객체를 인식하지 못해서 useRouter를 사용해서 현재 경로를 추적하도록 함

### 데이터 로드해서 넣어야 함

- [ ] 미리 저장했던 데이터 불러와서 데이터 로드해서 넣어야 함

</details>

<details>
<summary>2021.08.25(Tony)</summary>

### 카테고리 버튼 중 다른 카테고리 선택하면 현재 선택된 카테고리 색상 원래대로 돌리기

- 사용하는 곳에서 useState로 변수 하나 만들고 그것을 prop으로 전달

```typescript
// course_info.tsx
const [selectedId, setSelectedId] = useState<string>('');

<CourseCommonButton id="1" text="개발, 프로그래밍" selectedId={selectedId} setSelectedId={setSelectedId} />;
```

- 버튼 컴포넌트의 onClick에서 버튼 클릭한 것에 대한 정보(id)를 저장
- 버튼 컴포넌트 안의 useEffect에서 그것과 일치하는지 여부에 따라 true/false를 styled component에 전달

```typescript
// CourseCommonButton.tsx
const CourseCommonButton = ({ id, text, selectedId, setSelectedId }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  function onClickButton() {
    setSelectedId(id);
  }

  useEffect(() => {
    if (id === selectedId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedId]);

  return (
    <CourseCommonButtonStyle onClick={onClickButton} key={id} isSelected={isSelected}>
      {text}
    </CourseCommonButtonStyle>
  );
};
```

### 추가 하기 버튼 누르면 add components dynamically

- 리덕스에서 state(array)를 가져와서 추가해야 될 것 같다

#### 예상 데이터 구성

```typescript
data : {
  createLecture : {
    courseInfo : {
      title: string, // 강의 제목
      whatYouCanLearn: string[], // 이런걸 배울 수 있어요
      expectedStudents: string[], // 이런 분들에게 추천해요
      requiredKnowledge: string[], // 선수지식
      category: { // 카테고리
        id: string,
        name: string,
      },
      level: string // 강의 수준
    }
    // 상세소개, 커리큘럼, 커버이미지 정보는 나중에
  },
  setting : {
    // 강의설정
    // 지식공유자 설정
  }
}
```

### 참고 문헌

- [dynamically-add-child-components-in-react](https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react)

</details>

<details>
<summary>2021.08.27(NOAH)</summary>

### HeaderLayout

- 메뉴바 포지션 수정

  - 메뉴바가 평소에는 relative였다가 메뉴바 크기만큼 내려올 경우 sticky로 바뀌도록 수정
  - scroll 이벤트가 너무 자주 불리기 때문에 lodash 라이브러리의 throttle 기능을 사용하여 0.3초에 한 번만 불리도록 구현

```typescript
const throttledScroll = useMemo(
  () =>
    throttle(() => {
      if (window.scrollY > 64) {
        setIsNavOn(true);
        return;
      }
      setIsNavOn(false);
    }, 300),
  []
);
```

- 모바일용 메뉴바
  - 인프런 페이지와 같이 모바일 화면( 1025px)이하로 내려갈 경우 Layout이 변경되도록 구현
  - 메뉴를 팝업으로 띄워지도록 함

### HeaderLayout 구현해야 할 것

- 로그인 모달창
- 검색창 기능
- 메뉴 팝업 기능
- 모바일 메뉴 팝업 스타일링

### 추 후 확인

- 일단 레이아웃이 되도록 CSS를 덕지덕지 붙여놨는데 효율적으로 할 수 있도록 검토해야 함

</details>

<details>
<summary>2021.08.27(Tony)</summary>

### 강의생성 후 window api로 페이지 이동시 데이터 날라가는 문제

- window.location.href 를 사용하면 페이지가 새로고침되면서 자바스크립트(리덕스 스토어)에 있는 모든 데이터가 날라감

- react나 next에서 제공하는 router를 saga에서 사용해야 되는데
  useRouter나 useHistory는 hook이기 때문에 component가 아닌 saga에선 사용이 불가능 함(hooks rule)

- 문제 해결
  - saga에서 페이지 이동을 시키려 했으나 위와 같은 문제로 잘 되지 않음
  - 'history', 'react-router-redux' 라이브러리 둘다 써봤는데 typescript문제인지 next문제인지 뭔지 잘 되지 않음
  - 기존 방식 대로 컴포넌트에서 페이지를 이동 시키는 대신 flag로 사용중인 done변수를 false로 만드는 dispatch를 실행문 마지막에 추가해서 성공

</details>

<details>
<summary>2021.08.28(Tony)</summary>

### 강의 수정 페이지 로드 시 데이터 받아오기(redux saga)

- 확인

### children component에 props 전달하기

```typescript
<CourseMain>
  {console.log('React.isValidElement(children)', React.isValidElement(children))}
  {React.isValidElement(children) && React.cloneElement(children, { lectureData })}
  {/* {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { lectureData });
            }
          })} */}
  {/* {children} */}
</CourseMain>
// 결론 안됨 => each child에서 store에서 데이터 가져오기
```

- each child에서 store에서 데이터 가져오기

### typescript에서 initial data 를 하나하나 다 넣어줘야되는건지 알아보기

- 초기값을 다 넣어줘야 될 것 같음

### 참고문헌

- [children component에 props 전달하기](https://eomtttttt-develop.tistory.com/203)
  - `This JSX tag's 'children' prop expects a single child of type 'ReactElement<any, string | JSXElementConstructor<any>>', but multiple children were provided.` => 안됨
  - https://stackoverflow.com/questions/42261783/how-to-assign-the-correct-typing-to-react-cloneelement-when-giving-properties-to
    - 안됨 : React.isValidElement(children) 통과가 안됨
  - https://www.geeksforgeeks.org/how-to-use-react-cloneelement-function/
  - [리액트 요소 검증하기](https://webisfree.com/2020-08-26/[react]-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0-isvalidelement)
    - 하나 짜리만 됨(`<div>하나<div>` 같은)
      - 하나 짜리도 props 전달이 잘 안됨
- [react-children with typescript](https://www.carlrippon.com/react-children-with-typescript/)

</details>

<details>
<summary>2021.08.31(Tony)</summary>

### eslint => react/require-default-props : off

- https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react

### onClickDelete

#### 1차 시도 : store state is read-only

```typescript
const onClickDelete = (_list: string[], index: number) => {
  _list.splice(index, 1);
};
<button onClick={() => onClickDelete(list, index)} type="button">
  <DeleteIcon />
</button>;
```

- redux에 있는 데이터는 read-only 임
- dispatch를 이용해서 reducer에서 작업을 하려고 했었는데 component에 들어오는 string[]이 store에 각각 다르게 저장되어 있기 때문에 기존의 draft.initialState.data 같은 방식으로 수정할 수 없음

#### 2차 시도 : read-only 제거 - setAutoFreeze(false);

```typescript
// store에서 read-only 속성 제거
import { setAutoFreeze } from 'immer';
setAutoFreeze(false);

// TextListBox.tsx
const onClickDelete = (_list: string[], index: number) => {
  _list.splice(index, 1);
};
<button onClick={() => onClickDelete(list, index)} type="button">
  <DeleteIcon />
</button>;
```

- store에 있는 값을 직접 변경 가능하지만 re-render가 안됨
  - 원래 reducer로 store의 값을 변경하면 re-render가 되는데 이런식으로 바로 바꿔버리니까 안되는 듯

#### 3차 시도 : useState에 store의 state를 넣고 setState를 컴포넌트에 전달

```typescript
// course_info.tsx
const [textArray, setTextArray] = useState<string[]>();
<TextListBox list={textArray} setTextArray={setTextArray} />;

// TextListBox.tsx
type Prop = {
  list?: string[];
  setTextArray: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

const TextListBox = ({ list = [], setTextArray }: Prop) => {
  const onClickDelete = (textList: string[], index: number) => {
    textList.splice(index, 1);
    setTextArray([...textList]);
    console.log('after remove', textList);
  };

  return (
    <button onClick={() => onClickDelete(list, index)} type="button">
      <DeleteIcon />
    </button>
  );
};
```

- setState를 전달을 해도 setTextArray(textList) state를 직접 변화하고 그것을 그대로 전달하면 렌더링이 되지 않음
- setTextArray([...textList]); 같이 배열을 새로 할당해서 전달해야 렌더링이 다시 됨
- TextListBox를 사용하는 개수만큼 useState를 만들어서 각각 전달할 예정

#### 'react/no-array-index-key': 'off'

- index를 key로 사용할 때 나오는 eslint 경고
- 나중에 eslint때문에 문제될 것 같아서 미리 제거

### 참고문헌

- [javascript removing element of array cleanest way](https://stackoverflow.com/questions/47023975/what-is-the-cleanest-way-to-remove-an-element-from-an-immutable-array-in-js)
- [Cannot test reducer: Cannot assign to read only property](https://github.com/reduxjs/redux-toolkit/issues/424)

### 과연 이 방법이 최선인가?

- 컴포넌트 재사용을 위해 리덕스의 read-only속성을 없애고 useState를 각각 만들면서 사용해야되는 건지, 다른 더 좋은 방법은 없는지 찾아봐야 함

### 다음 진행 예정

- [ ] drag and drop으로 array 순서 변화

</details>

<details>
<summary>2021.09.01(Tony)</summary>

### 불변성 보장 하면서 array에서 요소 삭제 하기

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

const indexToRemove = 2; // the 'c'

const result = [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];

console.log(result);

// slice는 ...arr를 두번이나 하는 번거로움이 있으므로
const textArray = [...textList];
textArray.splice(index, 1);
// 배열 복사 후 splice를 사용
```

### typescript function type

- parameter 타입, return 타입을 정의해주면 된다.

```typescript
fn: (a: string) => void
```

### redux를 typescript에서 사용하면 initialState는 전부 초기값이 있어야 된다.

- reducer에서 action.data를 받아서 넣을 때 optional chaining을 사용할 수 없다고 나옴

### 참고 문헌

- [typescript function type](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>

<details>
<summary>2021.09.02(Tony)</summary>

## TextListBox delete button

### High order function 적용

- HOF로 바꿔도 컴포넌트의 함수타입은 그대로 적용해도 적용됨
- [ ] HOF의 예시를 더 찾아보고 장점을 알아보기

### 버그 수정

- `이런 분들에게 추천해요` 에서 TextListBox를 사용할 때 list array를 expectedStudents가 아닌 whatYouCanLearn으로 오타가 있는 부분을 수정함

</details>

<details>
<summary>2021.09.05(NOAH)</summary>

## 회원가입 error 메시지

- err.response.data에 서버에서 받아온 에러 메시지가 있음
- AxiosError typescript 처리

```typescript
onError: (err: AxiosError) => {
  console.error(err.response?.data);
};
```

- useInput 커스텀 훅 nodebird 강의에서 가져옴

```typescript
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnType<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnType<T> => {
  const [value, setValue] = useState(initialData);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
```

## 구현 할 것

- 비밀번호 찾기 모달
- 간편 회원가입
- 간편 로그인

</details>

<details>
<summary>2021.09.14(NOAH)</summary>

## 비밀번호 찾기 Modal 구현 (Portal 사용)

- \_document.js 페이지에 Modal을 넣을 div tag 추가

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  <body>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
    <main />
    <NextScript />
    <div id="find-password-modal" />
  </body>
</html>
```

- Portal wrapper 추가

```typescript
export default function Portal({ children, selector }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return mounted ? createPortal(children, document.querySelector(selector)!) : null;
}
```

- Content가 되는 component 추가
- 비밀번호 찾기 버튼에 따라 showFindPasswordModal useState 변수의 boolean값을 변경하여 제어

```typescript
{
  showFindPasswordModal && (
    <Portal selector="#find-password-modal">
      <FindPasswordModal handleCloseModal={handleCloseFindPasswordModal} />
    </Portal>
  );
}
```

## 구현 할 것

- 백엔드쪽에 Router가 구현된 후 API 연결 테스트를 해야 함

</details>

<details>
<summary>2021.09.19(나현)</summary>

## 구현한 것

- 강의 페이지 레이아웃을 대략적으로 구현
- 강의 카테고리와 필터(난이도, 유·무료 선택, 온라인/오프라인)를 각각 CategoryMenu 컴포넌트와 LectureFilter 컴포넌트로 분리
- 강의 검색하기 부분 디자인 구현
  - 인프런 CSS 참고함.

## 앞으로 진행할 작업

- 더미데이터로 강의 리스트 나타내기
- 카드 정렬 스타일을 선택하는 Grid와 List 버튼 구현하기

</details>

<details>
<summary>2021.09.13~19.(Tony)</summary>

## 강의 생성 부 drag and drop

![](https://images.velog.io/images/gth1123/post/f3f4e477-405e-428d-a5c9-2d931999fa2d/dragAndDrop.gif)

javascript로 직접 구현하려 했으나 애니메이션발동 도중 DOM을 변경하거나
(DOM 위치가 바뀌면 애니메이션이 바뀐 위치를 기준으로 동작하기 때문에 계산이 어렵다)
애니메이션이 끝나기 전에 애니메이션의 도착지점을 변경하는 것이 어려워서 라이브러리를 사용하기로 했다

### sortablejs vs react-sortable-hoc vs react dnd

#### sortablejs

- Weekly Downloads : 약 80만
- 자바스크립트에서 사용하기 위해서 만들어진 라이브러리
- [sortablejs 예제](http://sortablejs.github.io/Sortable/#simple-list)
- react-sortablejs를 사용하면 리액트에서도 편하게 사용가능
  - Weekly Downloads : 약 8만

#### react-sortable-hoc

- Weekly Downloads : 약 46만
- 예제가 잘 되어있다
- [react-sortable-hoc 예제](http://clauderic.github.io/react-sortable-hoc/#/basic-configuration/basic-usage?_k=mpdxwt)

#### react dnd

- Weekly Downloads : 약 81만
- drag and drop react 라이브러리 중 가장 많이 사용된다

#### 선정 기준

- inflearn 애니메이션과 가장 유사한 것
- sortablejs가 거의 똑같고 나머진 mouseup 과 mousedown에서 애니메이션이 이동되는 방식이었다(drag api를 사용하지 않는 것으로 보임)

### react-sortablejs

```
npm install --save react-sortablejs sortablejs
npm install --save-dev @types/sortablejs
```

- force flag를 사용해서 설치를 했다.

- [npm cli flag: ` force` and ` legacy peer deps`](https://github.com/Ark-inflearn/inflearn-clone-front/wiki/npm-cli-flag:-%60--force%60-and-%60--legacy-peer-deps%60)

#### key !== index

DO NOT use the index as a key for your list items. Sorting will not work.

In all the examples above, I used an object with an ID. You should do the same!

I may even enforce this into the design to eliminate errors.

### type 변경 및 설정

- [x] lectureData?.courseInfo에 속한 배열 whatYouCanLearn, expectedStudents, requiredKnowledge 타입변경
  - string[] -> {name: string, order: number}[]
- [x] ReactSortable(sortablejs 라이브러리 컴포넌트)에 props type 맞게 설정

### redux 관련 세팅

- [x] 드래그 앤 드랍 후 저장 버튼 누르면 변경된 순서로 보내기(saga)
- [x] 중간 저장하면서 saga에서 order를 내가 변경해서 보내주는게 맞는건지 생각해보기

  - 그냥 프론트에서 변경된 order로 보내주자 - 나중에 백엔드랑 같이 고민해봐야 함

- delete 아이콘 클릭하면 삭제하던 방식 변경
  - 기존 : reducer에서 store에 있는 것을 바로 삭제
  - 변경 : store에 있는 것을 건들지 않고 useState로 임시로 저장 후 삭제 또는 순서의 변경을 해당 페이지에서 중간저장 버튼을 누르면 서버에 반영되도록 변경
    - 변경된 순서는 새로고침을 하면 다시 서버에서 변경 데이터를 store에 저장하는 방식
    - store는 서버에서 받은 정보만을 저장
    - react-sortablejs에서 사용하는 방식과 맞추는 것

## Things to do on this page

- [ ] 카테고리, 강의 수준 만들기
- [x] 중간 저장버튼과 redux, saga 연결하기
</details>

<details>
<summary>2021.09.19 ~ 20.(Tony)</summary>

## 추가 하기 버튼 기능 구현

- 추가하기를 누르면 store가 아닌 setState에서 변경
  - redux store에 직접 변경하지 않는 이유는 react-sortablejs에서 useState를 사용하기 때문

```typescript
// ReactSortable 컴포넌트에서 setList 속성에 setState가 들어가야 함
<ReactSortable list={expectedStudents} setList={setExpectedStudents} animation={200} handle=".handle">
  {expectedStudents.map((item, index) => (
    <TextListBox key={item.id} item={item} list={expectedStudents} setList={setExpectedStudents} index={index} />
  ))}
</ReactSortable>
```

</details>
