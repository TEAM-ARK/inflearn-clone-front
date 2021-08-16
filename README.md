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
