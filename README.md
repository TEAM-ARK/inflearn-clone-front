# π Inflearn-Clone-Frontend

## π κ°μ(Summary)

μΈνλ° μΉμ±μ λ§λ€μ΄λ³΄λ ννλ‘μ νΈ

[Inflearn-clone-back repository](https://github.com/Ark-inflearn/inflearn-clone-back)

---

<br />

## π― λͺ©ν(Objectives)

- ννλ‘μ νΈ λ° νμ κ²½ν
- Hard skill λ° Soft skill ν₯μ

---

<br />

## π κ°λ°κΈ°κ°(Develop period)

2021.07.05 ~ μ§νμ€

---

<br />

## π» λΌμ΄λΈλ¬λ¦¬ λ° κΈ°μ  μ€ν(Library & Stack)

- Language : Typescript
- Library : Reactjs
- Server : Nextjs
- Style : Meterial-UI & Styled-components

---

<br />

## π ν  μΌ (Things to do)

- [x] νλ‘ νΈμλ μΈν : Typescript, Layout ...
- [ ] λ©μΈ νμ΄μ§
- [ ] νμκ°μ νμ΄μ§
- [ ] Header, Footer layout

---

<br />

## β¨ μ£Όμ κΈ°λ₯

- λ°μν μΉ νμ΄μ§
- SSR

---

<br />

## π μμ λ΄μ©

<details>
<summary>2021.07.08(NOAH))</summary>

github repository μμ±

- collaborator μ΄λ
- branch protect rule μ€μ 

</details>

<details>
<summary>2021.07.09(NOAH))</summary>

Readme μμ±
react-hook-form μ μ©

μ°Έκ³ λ¬Έν

- [nextjs, typescript, meterial-ui and jest set-up](https://documentationnerds.com/blog/tech/setup-next-frontend-with-typescript-eslint-prettier-jest-and-react-testing-library)
</details>

<details>
<summary>2021.07.10(Tony)</summary>

### npm run dev μ€ν μλ¨

- [x] nextμ next devμ μ°¨μ΄λ ?

  - [What is the difference between next (dev) and next build && next start ?](https://github.com/vercel/next.js/discussions/15053)
  - κ°λ€

- [x] cross-env NODE_OPTIONS='--inspect' next devλ μ€νμ΄ μλλ€.
  - NODE_OPTIONS='--inspect' μ΄κ² λλ¬Έμ μλ¨
    - NODE_OPTIONS=inspect μΌλ‘ μμ νλ©΄ μ€ν λ¨
    - NODE_OPTIONS μ΄λ νκ²½λ³μκ° μ νμνμ§ μ λͺ¨λ₯΄κ² μ

### dir λ°°μΉ μμ 

- [x] src μμ λ€μ΄κ°μΌ ν  κ²μ ?
  - https://nextjs.org/docs/advanced-features/src-directory
  - μ±μ μ€ννλλ° νμν λ΄κ° μμ±ν μμ€μ½λ

### λ μ΄μμ λ° μ»΄ν¬λνΈ μμ ([Semantic tag](https://velog.io/@ru_bryunak/HTML-%EA%B8%B0%EC%B4%88-2-%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8%EB%9E%80#:~:text=2%2F8-,%EC%8B%9C%EB%A7%A8%ED%8B%B1%20%ED%83%9C%EA%B7%B8%EB%9E%80%3F,%EC%9D%B4%20%EC%8B%A4%ED%98%84%EB%90%A0%20%EC%88%98%20%EC%9E%88%EB%8B%A4.))

- [x] nav νκ·Έλ₯Ό divμμ navλ‘ λ³κ²½, navλ₯Ό headerλ‘ κ°μΈμ€

  - inflearn κ³΅νμμ κ°λ°μ λκ΅¬λ‘ νκ·Έλ₯Ό νμΈνμ¬ λκ°μ΄ λ§λ€μ΄ μ€

- [ ] pages dir μμ \_document, \_app, index λ± nextμμ μ μνλ νμ΄μ§ κ΅¬μ±λ°©μ νμΈ ν μ λ¦¬
  - \_document :
  - \_app :
  - index :

### κΈ°ν μ€μ νμΌ νμΈ

- [ ] tsconfig.json μμ include λΆλΆ λ€μ νμΈνκΈ°

</details>

<details>
<summary>2021.07.11(Tony)</summary>

- [x] header, footer μ€κ³½λ§ μ‘κΈ°

### home page

- [ ] slider κ³΅κ°λ§ λ§λ€κΈ°
- [x] κ²μμ°½ λͺ¨μλ§ λ§λ€κΈ°
- [ ] κ°μ μΉ΄λ μ»΄ν¬λνΈ λ§λ€κΈ°
  - li.lecture\_\_card{card$}\*10
  - [emmetμ ν΅ν΄ ν¨μ¨μ μΌλ‘ μμ±](https://webruden.tistory.com/77)

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

- [x] κ°μ μΉ΄λ μ»΄ν¬λνΈ λ§λ€κΈ°
- [x] λλ―Έ λ°μ΄ν°(json)μΌλ‘ κ°μ μ»΄ν¬λνΈ homeμ λμ°κΈ°
  - [ ] μ€μ λ‘ apiλ‘ λ°μμ€λ κ³Όμ  μμλ³΄κΈ°
- [ ] media query λ‘ λ°μν νλ©΄ λ§λ€ λ μ€ν¬λ¦° μ¬μ΄μ¦ λλλ κ΅¬κ° μμλ³΄κΈ°
- [x] slider κ³΅κ°λ§ λ§λ€κΈ°
- [ ] searchμμ title λ¬Έκ΅¬ λ§€μΌ λ°λκ² νκΈ°

### home page

- html μλ¬λ¬ νμ : `&#8361;`
- μ²λ¨μ μ½€λ§ : [μ κ·μ μ΄μ©](https://hianna.tistory.com/441)

### μ°Έκ³  λ¬Έν

- [htmlμ μλ¬λ¬ νμ λμ  reverse solidus λμ¬ λ](https://sqlplus.tistory.com/entry/html-%EC%86%8C%EC%8A%A4%EC%97%90-%EC%9B%90%ED%99%94%ED%86%B5%ED%99%94%ED%91%9C%EC%8B%9C%EB%A5%BC-%ED%95%A0%EB%95%8C-%EC%97%AD%EC%8A%AC%EB%A0%88%EC%89%AC%EB%A1%9C-%EB%82%98%EC%98%AC%EB%95%8C-%EC%B2%98%EB%A6%AC%EB%B0%A9%EB%B2%95)

</details>

<details>
<summary>2021.07.17(Tony)</summary>

### tsconfig.json μμ±

- [μ»΄νμΌλ¬ μ΅μ μ€μ ](https://typescript-kr.github.io/pages/compiler-options.html)

- include, exclude μμ±μ globκ³Ό μ μ¬ν νμΌ ν¨ν΄ λͺ©λ‘μ κ°μ§

  - \*: λͺ¨λ  λ¬Έμ(λλ ν λ¦¬ κ΅¬λΆκΈ°νΈ μ μΈ)
  - ?: ν λ¬Έμμ λ§€μΉ­(λλ ν λ¦¬ κ΅¬λΆκΈ°νΈ μ μΈ)
  - \*\*/ : λ°λ³΅μ μΌλ‘ λͺ¨λ  νμ λλ ν λ¦¬μ λ§€μΉ­
  - "src/\*/\*\*" : src μμ λͺ¨λ  νμ λλ ν λ¦¬ + μ§μνλ νμ₯μ(ex. .ts, .tsx, .d.ts)
    - allowJsκ° true(trueλ‘ μ€μ  ν΄λμ μν)μ΄λ©΄ .jsμ .jsx λ ν¬ν¨

- [ ] nextμμ typescript return type, prop type μμλ³΄κΈ°
  - [x] type vs interface
    - interfaceλ‘ ννν  μ μλ ννκ° μλλ©΄ interfaceλ₯Ό μ΄μ©νμ
  - [ ] nextμμ return type, prop typeμ μ΄λ»κ² μ§μ νλκ² μ’μμ§ μμλ³΄κΈ°

### μ°Έκ³  λ¬Έν

- [typescript-kr, tsconfig.json](https://typescript-kr.github.io/pages/tsconfig.json.html)
- [type vs interfaceκ° λ λ«λ€](https://yceffort.kr/2021/03/typescript-interface-vs-type)
- [typeκ³Ό interface μ°¨μ΄](https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c)

</details>

<details>
<summary>2021.07.23(Tony)</summary>

## Issue #9 : AppLayout κ΅¬μ‘° μ μ©

### \_document, \_app, index μ°μ μμ νμ

- \_document.jsλ μμμ  : HTML Document
- \_app.js : κ³΅ν΅μ λ μ΄μμ μμ±
- index.js : "/"λ‘ μμλλ κ²½λ‘
- \_error.js : Error page : μμ§ μ λͺ¨λ¦

μ°Έκ³  λ¬Έν

- [κ°μΈλΈλ‘κ·Έ : next.js κ΅¬μ‘°](https://salgum1114.github.io/nextjs/2019-05-06-nextjs-static-website-1/)

document > app > index μμΌλ‘ λ΄λ €μμ indexμ λ³Έκ²©μ μΌλ‘ λ§λ€λ©΄ λ  κ² κ°λ€

- νμ¬ AppLayout μ΄λΌλ κ³΅ν΅ componentλ₯Ό λ§λ€μ΄μ headerμ footerκ° νμν κ³³μ΄λ©΄ μ¬μ© ν  μ μκ² ν¨

### styled component μ€μΉ

- npm i styled-components
- noahλνκ³  μμνκ³  μ¬λ§νλ©΄ .cssνμΌμ μμ±νμ§ μλ λ°©ν₯μΌλ‘ μ§νν΄λ³Ό μμ 

typescriptλ μλ ₯μ΄ μμλλ propsμ λν typeκ²μ¬λ ν  μ μκ² μ§λ§
reactμμ μ΄λ»κ² μ¨μΌλλμ§λ μμλ³Ό νμκ° μμ

</details>

<details>
<summary>2021.07.24(Tony)</summary>

### μμλ΄μ©

- MainSlider μ»΄ν¬λνΈ μΆκ°
  - react-slick λΌμ΄λΈλ¬λ¦¬ μ¬μ©

### ν₯ν κ³ν

#### style

- [ ] .CSS νμΌ styled componentλ‘ λ³κ²½ν  μμ 
- [ ] CSS style κ΄λ ¨ κ³΅ν΅μΌλ‘ μ¬μ©νλ μμ λ±μ λν μμκ°μ λͺ¨μλμ νμΌ μμ±

#### slider κΈ°λ₯ μΆκ° λ° μμ 

- [ ] ν₯ν λ°°κ²½μμ μ΄λ―Έμ§μ κ°κ²νλ λ°©λ²μ λν΄ μκ°ν΄λ³΄κ³  λ³κ²½
- [ ] ν΄λΉ μ¬λΌμ΄λλ‘ μ΄λνλ λ²νΌ μΆκ°
- [ ] λͺ¨λ°μΌ νλ©΄μ μ¬λΌμ΄λ λͺ¨μ λ³ννλλ‘ μμ 
- [ ] μ¬λΌμ΄λμ λ§ν¬ μΆκ°

#### λ¦¬λμ€ λ° μ¬κ° μ€μ 

</details>

<details>
<summary>2021.08.03(NOAH)</summary>

### μμλ΄μ©

- signup page μμ±
  - Material-UI( CSS)
    - TextField: inputκ³Ό κ°μ μ­ν μ ν¨
    - Typography: divμ κ°μ μ­ν 
    - Grid: Gridλ₯Ό μ¬μ©νμ¬ Flexλ Gridμ κ°μ λμμΈμ μ½κ² κ΅¬ν
    - IconButton: Materialμμ μ κ³΅νλ iconμ buttonμΌλ‘ μ¬μ©νκ² ν΄μ€
    - styles.ts: custom cssνμΌ, classNameμΌλ‘ λ³μκ°μ λκΈ°λ©΄ custom λμμΈμ΄ μ μ©λ¨
  - react-hook-form( form)
  - yup( signup rule)

### ν₯ν κ³ν

#### style

- [x] SNS λ‘κ·ΈμΈ λμμΈ

#### νμκ°μ rule

- [x] yupμ μ¬μ©νμ¬ νμκ°μ rule μ€μ 
- [x] ruleμ λ§μ§ μμ κ²½μ° error λ©μμ§ μΆλ ₯
- [ ] μ΄μ©μ½κ΄, κ°μΈμ λ³΄μ·¨κΈλ°©μΉ¨ νμ΄μ§ μμ±

</details>

<details>
<summary>2021.08.01~2, 5, 7, 8(Tony)</summary>

## Redux setting

### 1. μ€μΉ λͺ¨λ

#### npm install redux next-redux-wrapper react-redux --save

- redux
- next-redux-wrapper
  - Next.jsμ μλ²μ¬μ΄λ λ λλ§ κ΄λ ¨ λ³΅μ‘ν μ€μ μ μ½κ² ν΄μ£Όλ HOC
- react-redux
  - react λ°μΈλ©

#### npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux

- redux-devtools-extension : κ°λ°μ λκ΅¬ μ¬μ©μ μν λΌμ΄λΈλ¬λ¦¬

#### npm install redux-saga

- redux-sagaλ typeμ μμ²΄μ μΌλ‘ μ§μνκΈ° λλ¬Έμ @type/redux-sagaλ νμ μμ(deprecated λ¨)

#### npm i immer

- μμμ λΆλ³μ±μ μ§μΌμ£Όλ λΌμ΄λΈλ¬λ¦¬

#### npm i faker shortid

- npm i --save-dev @types/faker
- npm i --save-dev @types/shortid

- dummy data testλ₯Ό λμ μΌλ‘ νκΈ° μν΄ fakerμ shortidλ₯Ό μ€μΉ

#### npm i axios

- sagaμμ μ¬μ©, λΉλκΈ° httpν΅μ (Promise based HTTP client for the browser and node.js)

#### npm i -S @redux-saga/core

- eslintκ° μ§μ ν΄μ€μ μ€μΉν¨

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

#### 2-1. commonState class μ­μ 

- loading, done, errorμ λ°λ³΅λλ νμ΄νμ νΌνλ €κ³  νμΌλ doneμ μ κ±°νκ³  loading, errorλ§ μ¬μ©νλ©΄ μλκ² λ μ§κ΄μ μ΄λΌμ μλκ² λ«λ€κ³  νλ¨ ν¨
- dataλ class member λ³μλ‘ μμμΌλ λ§μ μ¬μ©ν΄λ³΄λ class λ΄ λ©€λ²λ³μμ μμ νμκ° μμμ

### 3. κΈ°ν

#### λ¦¬λμ€ μ€μΉ λ° μΈν μ€

- [x] State type μ μ ν΄μΌ λ¨
- [x] User, Lecture - reducer, saga μ€κ³
  - lectureλ§ μνλ‘ μμ±

#### eslint rule μ€ 'no-param-reassign': 'off' => immer μ¬μ©μ μν΄

#### main(home) page redux λμ νλ¦

- μ²μ νλ©΄μ λΆλ¬μ¬ λ LOAD_REQUEST actionμ μμμΌλ‘ λ°μ΄ν°(Lecture card)λ₯Ό λΆλ¬ μ΄
- add λ²νΌμ λλ₯Ό λλ§λ€ λ°μ΄ν°κ°(Lecture card) μΆκ° λ¨
- μ§κΈμ λλ―Έ λ°μ΄ν°λ‘ λΆλ¬ μ€μ§λ§ apiλ₯Ό μμ²­ν  κ²½μ° requestμμ νΈμΆ νλ λΆλΆλ§ μΆκ°νλ©΄ λ¨

#### λ³μ  νμ λ°©μ

- μμμ  λ μ§Έ μλ¦¬μμ λ°μ¬λ¦Ό ν μμμ  μ²« μ§Έ μλ¦¬ μ μ₯
- n.2 ~ n.8 κΉμ§ λ³ λ°κ°(3.2~3.8μ 3κ° λ°)
- n.1 μ κΉμ§ λ²λ¦Ό(3.1μ λ³ 3κ°λ‘ νμ)
- n.9 μ μ μ¬λ¦Ό(3.9λ λ³ 4κ°λ‘ νμ λ¨)

### 4. μ°Έκ³  λ¬Έν

- https://jktech.tistory.com/46
- μΈνλ° λΈλλ²λ κ°μ
- https://medium.com/@raphat/next-js-typescript-redux-3fbc990cb901
- [next-redux-wrapper κ³΅μλ¬Έμ](https://github.com/kirill-konshin/next-redux-wrapper)
- [RootState](https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate)

### 5. νλ‘ νΈ νμ μκ±΄

- [ ] νμ μ μ₯ μμΉ : interfaceλ typeμ ν΄λΉ νμΌμ λμ κ²μΈμ§ λ°λ‘ νμΌμ λ§λ€μ΄μ μ λ¦¬λ₯Ό ν  κ² μΈμ§
- [ ] λ¦¬λμ€κ° μ μ²΄ κ°μ λ‘λνλ λΆλΆμ μνλ‘ λ§λ€μλλ° μμ μ΄ λ§λ€ UIκ΄λ ¨ λ¦¬λμ€λ μ§μ  λ§λλ κ²μ΄ μ’μ κ² κ°μ
- [ ] κ΄λ¦¬μ νμ΄μ§λ₯Ό λ§λ€μ΄μΌ νλ..? slider λ°°κ²½μμ DBμμ κ°μ ΈμμΌ λ  κ² κ°μλ° μ΄κ±Έ λ§€λ² λ°±μλ κ°λ°μκ° μ μ₯νλ κ² λ³΄λ€ κ΄λ¦¬μνμ΄μ§κ° μμΌλ©΄ μ’μ κ² κ°μ
  - μ°μ μμ λ?μ

</details>

<details>
<summary>2021.08.10(Tony)</summary>

μ¬λΌμ΄λ λ¦¬λμ€ μ°κ²°
slider νλ λλ¬Έμ reducerμ sagaμ νμΌμ νλμ© λ§λ€κΈ° λ²κ±°λ‘μμ
lectureνμΌμ ν©μ³μ μμνμ΅λλ€.

</details>

<details>
<summary>2021.08.10(NOAH)</summary>

### μμλ΄μ©

- signup page error case
  - Material-UI( CSS)
    - useStyle: material-uiμ μ§μ  classNameμΌλ‘ μ€νμΌμ μ μ©νκΈ° μν hook, μ μ©νκ³ μνλ μμ±μ κ°μ²΄λ‘ μμ±νκ³  μ μ©
    - createTheme: meterial-uiμμ μ΄λ―Έ λμμΈλ μμ±λ€μ λ³κ²½νκ³  μΆμ κ²½μ° μ¬μ©, ex) μμ, ν¬κΈ°, ν¨λ©.. λ±
  - react-hook-form( form)
    - Controller: material-uiμ κ°μ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ°λνκΈ° μν wrapper
    - useFormContext: μ€μ²© λ κ΅¬μ‘°μμ λ°μ΄ν°λ₯Ό μ λ¬νκ³ μ ν  λ μ¬μ©, ex) νΉμ  formμ componentλ‘ λΉΌμ κ΄λ¦¬νκ³  react-hook-formμ μ μ©νλ κ²½μ°
    - FormProvider: userFormContextκ° μ μ©νκ³ μ νλκ³³μ wrapper
    - useForm: react-hook-form κΈ°λ³Έ hook
  - yup( signup rule)
    - error νΈλ€μ schema κ°μ²΄μ μλ¬ νΈλ€μ νκ³ μνλ μ¬ν­λ€μ μ λ¦¬νκ³  react-hook-formμ formStateμ errorμμ λ°μμ μ¬μ©, ex) errors.email?.message
    - yupμ νκ·Έμ μ μ©ν λ νκ·Έ nameκ³Ό yupμμμ μ μ μ΄λ¦μ κ°κ² ν΄μΌ μ μ©μ΄ λ¨, ex) name: email / email: yup.string().min(10).max(30)....
    - matches: μ κ·ννμμ μ¬μ©νκΈ° μν method
    - oneOf([yup.ref('email'), null]: λ€λ₯Έ inputκ³Ό κ°μ΄ μΌμΉνλμ§ μ¬λΆλ₯Ό νμΈνκ³ μ ν  λ μ¬μ©
    - error κ°μ²΄μ κ²½μ° submitνκ³  λμ μ μ© λ¨
    - νμ¬ μ κ·ννμμ μλ¬ νΈλ€μ errors κ°μ²΄μ message methodλ₯Ό νμΈνμ¬ μΌμΉνλ λ°©μμΌλ‘ μ μ©

### μ€λ₯ν΄κ²°

- Warning: Failed prop type: Invalid prop `error` of type `object` supplied to `ForwardRef(TextField)`, expected `boolean`
  - TextField νκ·Έμ errorμλ booleanκ°λ§ κ°λ₯νλ° yupμμμ μλ¬ λ©μμ§λ λ¬Έμμ΄μ΄ μμ±λκΈ° λλ¬Έμ λ¬Έμ κ° λλ νμ
    - error νκ·Έμ !!λ₯Ό λλ² λ£μ΄ boolean λ³μλ‘ λ§λ€μ΄μ£Όλ©΄ λ¨, ex) !!error.password

### ν₯ν κ³ν

- Reduxμ μ°κ²°
- λ‘κ·ΈμΈ λͺ¨λ¬ κ΅¬ν
- κ³΅ν΅ λ μ΄μμ κ΅¬ν

#### νμκ°μ rule

- [x] yupμ μ¬μ©νμ¬ νμκ°μ rule μ€μ 
- [x] ruleμ λ§μ§ μμ κ²½μ° error λ©μμ§ μΆλ ₯
- [ ] μ΄μ©μ½κ΄, κ°μΈμ λ³΄μ·¨κΈλ°©μΉ¨ νμ΄μ§ μμ±

</details>

<details>
<summary>2021.08.12(Tony)</summary>

### λ©μΈνμ΄μ§ λ¦¬μ€νΈμ λ‘λ© μ€νΌλ μΆκ°

- μλ²μ¬μ΄λ λ λλ§μ΄κΈ° λλ¬Έμ νμ μμ κ² κ°κΈ°λ ν¨
- μ¬λ―Έλ‘ μΆκ° ν΄λ΄

### λ©μΈνμ΄μ§ κ°μ λ¦¬μ€νΈ

- λ§μ°μ€ νΈλ² μ λμ€λ description μΆκ°
- [ ] μ₯λ°κ΅¬λ, μ’μμ λ± μμ΄μ½μ μ€λͺ λΌλ²¨ μΆκ° ν΄μΌ ν¨
- [ ] μΉ΄λ μ μ²΄μ μΌλ‘ ν¬κΈ° ν€μμΌ ν¨

### κΈ°ν

- μ»΄ν¬λνΈ νμΌλͺ μ²«κΈμ λλ¬Έμλ‘ λ³κ²½(λΈμλ μμ²­μ¬ν­)

### μ°Έκ³ λ¬Έν

- [react onHover event handling](https://upmostly.com/tutorials/react-onhover-event-handling-with-examples)

</details>

<details>
<summary>2021.08.13(Noah)</summary>

### Update Nextjs version 11

- Conformance
  - `npx next lint` λͺλ Ήμ΄λ₯Ό μΉλ©΄ νμ¬ appμ ESLintλ₯Ό μ μ²΄μ μΌλ‘ μνν΄μ λ©μμ§λ‘ CLIμ λ³΄μ¬μ€
- Improved Performance
  - 11λ²μ  μλ°μ΄νΈλ₯Ό νλ©° appμ μ΄κ³  startup timeμ 24%μ΄μ κ°μμν€κ³  React refresh κ΄λ ¨νμ¬ νλ‘μΈμ± νμμ 40%μ΄μ κ°μμν΄
  - Babel κ΄λ ¨ startup time κ°μ
  - μλ‘μ΄ Babel loader κ΅¬μΆ
  - λ‘λ©, λ©λͺ¨λ¦¬ μΊμ±κ³Ό κ΄λ ¨νμ¬ μ΅μ ν
  - κ°λ°μκ° μ€μ λ‘ ν  κ²μ μκ³  updateλ§μΌλ‘ μ΄λ―Έ μ μ©μ΄ λλ μ¬ν­
- Script Optimization

  - `next/script`
  - μΉμ¬μ΄νΈμ λ€λ₯Έκ³³μμ κ°μ Έμμ μ¬μ©νλ κΈ°λ₯λ€μ μΆκ°ν λ λΌμ΄λΈλ¬λ¦¬κ° λ¬΄κ²κ±°λ μ΅μ νμ λ¬Έμ κ° μλλ° μ΄κ²μ Nextjsμ Script νκ·Έκ° ν΄κ²°ν΄μ€( polyfill, widgets λ±)
  - Script νκ·Έμ strategy μμ±μ μΆκ°νλ©΄ μλμ μΌλ‘ μ΅μ ν λ° μ±λ₯ ν₯μ
    - third party λΌμ΄λΈλ¬λ¦¬μ μ€ν μμλ₯Ό μλ§μ λ§κ² μ€μ  ν  μ μμ
    - beforeInteractive, afterInteractive( default), lazyOnload μμ±

- Image Improvements
  - `next/image`
  - Image λ‘λ©κ³Ό κ΄λ ¨νμ¬ μ±λ₯ κ°μ 
    - Nextjsμ Image νκ·Έλ₯Ό μ¬μ©νλ©΄ μ μ μ΄λ―Έμ§μ κ°λ‘/μΈλ‘ ν¬κΈ°λ₯Ό μλμΌλ‘ μ μν΄μ€
    - μΈν°λ·μ΄ λλ¦° μ¬μ©μλ₯Ό μνμ¬ blur μ΄λ―Έμ§λ₯Ό Nextjsμμ νκ·Έ μμ±μΌλ‘ μ κ³΅
- Webpack 5
  - `next.config.js`
  - μΉν©5μ κ΄λ ¨νμ¬ λ€μν νΉμ§ λ° κ°μ μ λ€μ΄ κ΅¬μΆλ¨
- Create React App Migration (Experimental)
  - μλ‘μ΄ ν΄ `@next/codemod` κ°λ°
  - Create React Appμ μλμ μΌλ‘ Nextjsλ‘ λ³κ²½ν΄μ£Όλ ν΄
- Next.js Live (Preview Release)
  - νμμ μν κΈ°λ₯
  - μΉμ¬μ΄νΈλ₯Ό λμλμ μνμμ λΌμ΄λΈλ‘ λ§μ°μ€λ‘ κ³΅κ°μ μ§μ  ν  μ μκ³  μ€μκ° μ±νλ κ°λ₯ν κΈ°λ₯

### μ°Έκ³ λ¬Έν

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

### μμ λ΄μ©

- κ°μ μΉ΄λ λ§μ°μ€ μ€λ² ν  λ λμ€λ μ€λͺ λ° μμ΄μ½ 3κ°μ λ§νμ  μΆκ°
- lectureCard ν΄λλ₯Ό λ§λ€μ΄μ componentsν΄λ μ λ¦¬
- node notifierκ° μλμΌλ‘ μ€μΉλ¨(μλ°μ΄νΈ νλ €κ³  npm i νλ μ€μΉ λ¨)
  - cross platform(windows, mac, linux)μμ μλμ λμΈ μ μλ λͺ¨λ

### μ°Έκ³ λ¬Έν

- [CSSλ‘ λ§νμ  λ§λ€κΈ°](https://ungdoli0916.tistory.com/753)

</details>

<details>
<summary>2021.08.16(Tony)</summary>

### μμ λ΄μ©

- AppLayout, CourseLayoutμ components ν΄λμμ layouts (μ κ·)ν΄λλ‘ μ΄λ
- [ ] create course νμ΄μ§μμ μ λͺ© μλ ₯ ν κ°μ λ§λ€κΈ°λ₯Ό λλ₯΄λ©΄ μμ  νμ΄μ§λ‘ μ΄λ
- κ°μ μμ± ν idλ₯Ό μ μ₯ν  νμλ μμ κ² κ°μμ λ¦¬λμ€λ₯Ό μ¬μ©νμ§ μμ
  - μ΄λ»κ² νλκ² μ’μμ§ ν λ‘  νμ

```typescript
const inputTitle = useRef<HTMLInputElement>(null);
```

- μ΄κΈ°κ°μ nullμ λ°μμ€μΌ λλ€. -> HTMLInputElement | null

#### nextμμ redirect

```typescript
import { useRouter } from 'next/dist/client/router';
const router = useRouter();
router.push(`/course/${id}/edit/course_info`);
```

### λ‘μ»¬ μλ² μΈν

```typescript
// app.ts or index.ts
app.use(
  cors({
    origin: true,
    // credentials: false
  })
);
app.use(express.json()); // frontμμ jsonννμ dataλ₯Ό λ³΄λΌλ κ·Έκ²μ req.bodyμ λ£μ΄μ€
app.use(express.urlencoded({ extended: true })); // form&submitμ νλ©΄ url encodedλ°©μμΌλ‘ dataκ° λμ΄μ€λλ° κ·Έκ²μ req.bodyμ λ£μ΄μ€

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

### λμ€μ μΆκ°ν΄μΌ λ  λΆλΆ

- `/course/${id}/edit/course_info`μΌλ‘ μ΄λ μ λ΄ κ°μκ° μλ κ³³μΌλ‘ μ΄λν  κ²½μ° 404 λμμ€μΌ ν¨
  - μ μ κ° GETλ°©μμΌλ‘ μ μμ μλ ν  λ μλ²μμ κ²μ¦ ν μμ νμ΄μ§λ₯Ό λ³΄μ¬μ€μ§ λ§μ§ κ²°μ 

</details>

<details>
<summary>2021.08.19(Tony)</summary>

### create_course page

- create_courseμμ κ°μ λ§λ€κΈ° λλ₯΄λ©΄ `/course/1/edit/course_info`λ‘ μ΄λνκ² ν¨
  - λμ€μ μλ² λΆμΌ λ μ£Όμ ν΄μ νλ©΄ λ¨
- μ λͺ© μλ κ²½μ° alert λμ  κ²½κ³  λ©μΈμ§κ° λ¨λλ‘ ν¨

### create_course -> edit κ°μ μ λͺ© λκΈ°κΈ°

- λ¦¬λμ€ μ¬μ©
- κΈ°μ‘΄ axiosλ§ μ¬μ©νλ κ²μ reduxλ₯Ό μ΄μ©νλλ‘ λ³κ²½
  - saga effectμ putμ dispatchλ λΉμ·ν¨

### saga call type

- `Generator<T, TReturn, TNext>`
- [x] generator functionμμ type μ§μ νλ λ² μμλ³΄κΈ°
  - https://github.com/microsoft/TypeScript/issues/26959

### test.css νμΌ μμ±

- styled component μμ μλμμ±μ μ μ§μνμ§ μμΌλ―λ‘ cssνμΌμ νμ€νΈλͺ©μ μΌλ‘ λ§λ€μ

### create course btnμ λ‘λ© μ μ©

- λ‘λ© μκ° λμ ν΄λ¦­ λ°©μ§(pointer-events), ν¬λͺλ λ³κ²½(opacity)

### μ°Έκ³ λ¬Έν

- [styled component props](https://styled-components.com/docs/basics)
- [css prevent mouse click](https://stackoverflow.com/questions/44719980/how-to-prevent-the-click-event-using-css)
- [css pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [typescript styled components with props](https://stackoverflow.com/questions/47077210/using-styled-components-with-props-and-typescript)

</details>

<details>
<summary>2021.08.20(Tony)</summary>

### Things to do

- [x] create-courseμμ storeμ μ μ₯ν title κ°μ Έμ€κΈ°
- [ ] edit course info μ± λ μ΄μμ μμ 

</details>
<details>
<summary>2021.08.20, 21(Tony)</summary>

### μμ μ¬ν­

- childrenμ type μ μ©
- header, footer μ΄λ¦μ HeaderLayout, FooterLayoutμΌλ‘ λ³κ²½( Nextμ μ‘΄μ¬νλ μ΄λ¦μ΄κΈ° λλ¬Έμ κ²ΉμΉ¨)
- μ»΄ν¬λνΈμ μ¬μ¬μ©μ±μ μν΄μ κΈ°μ‘΄ stylesλ₯Ό μ§μ°κ³  μ»΄ν¬λνΈλ‘ μ΄λ

### styled(Link) μλ¨

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
  <SeeTheLecture>κ°μλ³΄κΈ°</SeeTheLecture>
</Link>;
```

- Linkμμ buttonνκ·Έ λ£λ λ°©μμΌλ‘ μ€νμΌλ§ μ μ©

  - aνκ·Έλ‘ νλ € νμΌλ widthκ° μ μ©μ΄ μλ¨

- [ ] κ°μ μ μ columnμ ν΄λΉ νμ΄μ§ μΌ λ κΈμ μ λ³ν
  - course_info νμ΄μ§ -> κ°μ μ λ³΄ κΈμ μ μ§νκ²

</details>
<details>
<summary>2021.08.22(NOAH)</summary>

### Things to do

- [ ] λ²νΌμ μ€νμΌ μ μ©
- [ ] responsive νλ©΄ κ΅¬μ±

### μμ μ¬ν­

- νμκ°μ νμ΄μ§ λ° μ»΄ν¬λνΈ λ¦¬ν©ν λ§
- useStyles κ΅¬μ‘°λΆν΄

```typescript
const { classname } = useStyles();
```

### μ μ©μ¬ν­

- Header κ΅¬ν
  - AppBar : λ€λΉκ²μ΄μ μ»¨νμ΄λ
  - ToolBar : μμ μ»¨νμΈ λ₯Ό λ£μΌλ©΄ Flexμ κ°μ΄ μλμ λ ¬
- μ μ©ν΄μΌ ν  λ²νΌμ headerDataλ‘ νμ¬ μΆκ°
  - μΆ ν λ³κ²½μ΄ μμλ μ½κ² μ μ©νκΈ° μν¨

### λ¬Έμ μ¬ν­

- nextjsμμ html,body νκ·Έκ° μ μ²΄νλ©΄μ΄ λμ§ μμ \_app.tsxμ μλ μ€νμΌμ μ μ©νμμΌλ λ©μΈνμ΄μ§μμ μ μ©λμ§ μλ νμ
  - htmlμ΄ μ μ²΄ λ³΄μ΄λ νλ©΄μ ν¬κΈ°κ° μλκΈ° λλ¬Έμ stickyκ° μ€κ°μ μ§€λ¦Ό

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
  - [x] νμ¬ νμ΄μ§μ ν΄λΉνλ λΆλΆ κΈμ μ§νκ²
  - [ ] modal : λκΈΈμ λλ μ λͺ© μμ± κΏν
  - [ ] νμ΄μ§ λ‘λ μ κ΄λ ¨ λ°μ΄ν° κ°μ Έμμ νμ μ‘°κ±΄ μμ±λ νμ΄μ§λ μ΄λ‘μμΌλ‘ v νμ
- [ ] course_info νμ΄μ§ κ΅¬μ±

### CourseLayout.tsx

CourseHeaderContainer height + CourseLayoutGrid padding top(24px) + CourseNav padding top(0.75rem == 12px) μ λμ΄μ sticky

- StepContainerμ headerHeight propμ λ°λ‘ λ£μ΄ μ£Όλ©΄ CourseHeaderContainer heightκ° μΈ‘μ λμ§ μμ μν(undefined)λ‘ κ³μ°μ΄ λμ stickyμ topμ NaNμ΄ λ€μ΄κ°(sticky μ μ© μλ¨)
- νμ΄μ§ λ‘λν  λ useStateμ headerHeightμ κ°μ λ£μ΄μ λμ€μ κ³μ°λ heightκ°μ΄ λ°μ λλλ‘ ν¨

### create_course.tsx

- κ°μ idλ₯Ό μ λ¬ λ°κ³  sagaμμ μ§μ  redirectμν€λλ‘ ν¨(λ€λ‘κ°κΈ° μλλ λ¬Έμ  ν΄κ²°)

</details>

<details>
<summary>2021.08.24(Tony)</summary>

### create_course

- κ°μ λ§λ€κΈ° λ²νΌμ λλ₯΄μ§ μκ³  input textμμ μ λͺ© μλ ₯ ν μν°λ‘λ κ°μ μμ±λλλ‘ λ³κ²½

### CourseLayout

- window.location.pathnameμμ κ°μ μμ±ν μμ νμ΄μ§λ‘ λμ΄κ° λ windowκ°μ²΄λ₯Ό μΈμνμ§ λͺ»ν΄μ useRouterλ₯Ό μ¬μ©ν΄μ νμ¬ κ²½λ‘λ₯Ό μΆμ νλλ‘ ν¨

### λ°μ΄ν° λ‘λν΄μ λ£μ΄μΌ ν¨

- [ ] λ―Έλ¦¬ μ μ₯νλ λ°μ΄ν° λΆλ¬μμ λ°μ΄ν° λ‘λν΄μ λ£μ΄μΌ ν¨

</details>

<details>
<summary>2021.08.25(Tony)</summary>

### μΉ΄νκ³ λ¦¬ λ²νΌ μ€ λ€λ₯Έ μΉ΄νκ³ λ¦¬ μ ννλ©΄ νμ¬ μ νλ μΉ΄νκ³ λ¦¬ μμ μλλλ‘ λλ¦¬κΈ°

- μ¬μ©νλ κ³³μμ useStateλ‘ λ³μ νλ λ§λ€κ³  κ·Έκ²μ propμΌλ‘ μ λ¬

```typescript
// course_info.tsx
const [selectedId, setSelectedId] = useState<string>('');

<CourseCommonButton id="1" text="κ°λ°, νλ‘κ·Έλλ°" selectedId={selectedId} setSelectedId={setSelectedId} />;
```

- λ²νΌ μ»΄ν¬λνΈμ onClickμμ λ²νΌ ν΄λ¦­ν κ²μ λν μ λ³΄(id)λ₯Ό μ μ₯
- λ²νΌ μ»΄ν¬λνΈ μμ useEffectμμ κ·Έκ²κ³Ό μΌμΉνλμ§ μ¬λΆμ λ°λΌ true/falseλ₯Ό styled componentμ μ λ¬

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

### μΆκ° νκΈ° λ²νΌ λλ₯΄λ©΄ add components dynamically

- λ¦¬λμ€μμ state(array)λ₯Ό κ°μ Έμμ μΆκ°ν΄μΌ λ  κ² κ°λ€

#### μμ λ°μ΄ν° κ΅¬μ±

```typescript
data : {
  createLecture : {
    courseInfo : {
      title: string, // κ°μ μ λͺ©
      whatYouCanLearn: string[], // μ΄λ°κ±Έ λ°°μΈ μ μμ΄μ
      expectedStudents: string[], // μ΄λ° λΆλ€μκ² μΆμ²ν΄μ
      requiredKnowledge: string[], // μ μμ§μ
      category: { // μΉ΄νκ³ λ¦¬
        id: string,
        name: string,
      },
      level: string // κ°μ μμ€
    }
    // μμΈμκ°, μ»€λ¦¬νλΌ, μ»€λ²μ΄λ―Έμ§ μ λ³΄λ λμ€μ
  },
  setting : {
    // κ°μμ€μ 
    // μ§μκ³΅μ μ μ€μ 
  }
}
```

### μ°Έκ³  λ¬Έν

- [dynamically-add-child-components-in-react](https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react)

</details>

<details>
<summary>2021.08.27(NOAH)</summary>

### HeaderLayout

- λ©λ΄λ° ν¬μ§μ μμ 

  - λ©λ΄λ°κ° νμμλ relativeμλ€κ° λ©λ΄λ° ν¬κΈ°λ§νΌ λ΄λ €μ¬ κ²½μ° stickyλ‘ λ°λλλ‘ μμ 
  - scroll μ΄λ²€νΈκ° λλ¬΄ μμ£Ό λΆλ¦¬κΈ° λλ¬Έμ lodash λΌμ΄λΈλ¬λ¦¬μ throttle κΈ°λ₯μ μ¬μ©νμ¬ 0.3μ΄μ ν λ²λ§ λΆλ¦¬λλ‘ κ΅¬ν

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

- λͺ¨λ°μΌμ© λ©λ΄λ°
  - μΈνλ° νμ΄μ§μ κ°μ΄ λͺ¨λ°μΌ νλ©΄( 1025px)μ΄νλ‘ λ΄λ €κ° κ²½μ° Layoutμ΄ λ³κ²½λλλ‘ κ΅¬ν
  - λ©λ΄λ₯Ό νμμΌλ‘ λμμ§λλ‘ ν¨

### HeaderLayout κ΅¬νν΄μΌ ν  κ²

- λ‘κ·ΈμΈ λͺ¨λ¬μ°½
- κ²μμ°½ κΈ°λ₯
- λ©λ΄ νμ κΈ°λ₯
- λͺ¨λ°μΌ λ©λ΄ νμ μ€νμΌλ§

### μΆ ν νμΈ

- μΌλ¨ λ μ΄μμμ΄ λλλ‘ CSSλ₯Ό λμ§λμ§ λΆμ¬λ¨λλ° ν¨μ¨μ μΌλ‘ ν  μ μλλ‘ κ²ν ν΄μΌ ν¨

</details>

<details>
<summary>2021.08.27(Tony)</summary>

### κ°μμμ± ν window apiλ‘ νμ΄μ§ μ΄λμ λ°μ΄ν° λ λΌκ°λ λ¬Έμ 

- window.location.href λ₯Ό μ¬μ©νλ©΄ νμ΄μ§κ° μλ‘κ³ μΉ¨λλ©΄μ μλ°μ€ν¬λ¦½νΈ(λ¦¬λμ€ μ€ν μ΄)μ μλ λͺ¨λ  λ°μ΄ν°κ° λ λΌκ°

- reactλ nextμμ μ κ³΅νλ routerλ₯Ό sagaμμ μ¬μ©ν΄μΌ λλλ°
  useRouterλ useHistoryλ hookμ΄κΈ° λλ¬Έμ componentκ° μλ sagaμμ  μ¬μ©μ΄ λΆκ°λ₯ ν¨(hooks rule)

- λ¬Έμ  ν΄κ²°
  - sagaμμ νμ΄μ§ μ΄λμ μν€λ € νμΌλ μμ κ°μ λ¬Έμ λ‘ μ λμ§ μμ
  - 'history', 'react-router-redux' λΌμ΄λΈλ¬λ¦¬ λλ€ μ¨λ΄€λλ° typescriptλ¬Έμ μΈμ§ nextλ¬Έμ μΈμ§ λ­μ§ μ λμ§ μμ
  - κΈ°μ‘΄ λ°©μ λλ‘ μ»΄ν¬λνΈμμ νμ΄μ§λ₯Ό μ΄λ μν€λ λμ  flagλ‘ μ¬μ©μ€μΈ doneλ³μλ₯Ό falseλ‘ λ§λλ dispatchλ₯Ό μ€νλ¬Έ λ§μ§λ§μ μΆκ°ν΄μ μ±κ³΅

</details>

<details>
<summary>2021.08.28(Tony)</summary>

### κ°μ μμ  νμ΄μ§ λ‘λ μ λ°μ΄ν° λ°μμ€κΈ°(redux saga)

- νμΈ

### children componentμ props μ λ¬νκΈ°

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
// κ²°λ‘  μλ¨ => each childμμ storeμμ λ°μ΄ν° κ°μ Έμ€κΈ°
```

- each childμμ storeμμ λ°μ΄ν° κ°μ Έμ€κΈ°

### typescriptμμ initial data λ₯Ό νλνλ λ€ λ£μ΄μ€μΌλλκ±΄μ§ μμλ³΄κΈ°

- μ΄κΈ°κ°μ λ€ λ£μ΄μ€μΌ λ  κ² κ°μ

### μ°Έκ³ λ¬Έν

- [children componentμ props μ λ¬νκΈ°](https://eomtttttt-develop.tistory.com/203)
  - `This JSX tag's 'children' prop expects a single child of type 'ReactElement<any, string | JSXElementConstructor<any>>', but multiple children were provided.` => μλ¨
  - https://stackoverflow.com/questions/42261783/how-to-assign-the-correct-typing-to-react-cloneelement-when-giving-properties-to
    - μλ¨ : React.isValidElement(children) ν΅κ³Όκ° μλ¨
  - https://www.geeksforgeeks.org/how-to-use-react-cloneelement-function/
  - [λ¦¬μ‘νΈ μμ κ²μ¦νκΈ°](https://webisfree.com/2020-08-26/[react]-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0-isvalidelement)
    - νλ μ§λ¦¬λ§ λ¨(`<div>νλ<div>` κ°μ)
      - νλ μ§λ¦¬λ props μ λ¬μ΄ μ μλ¨
- [react-children with typescript](https://www.carlrippon.com/react-children-with-typescript/)

</details>

<details>
<summary>2021.08.31(Tony)</summary>

### eslint => react/require-default-props : off

- https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react

### onClickDelete

#### 1μ°¨ μλ : store state is read-only

```typescript
const onClickDelete = (_list: string[], index: number) => {
  _list.splice(index, 1);
};
<button onClick={() => onClickDelete(list, index)} type="button">
  <DeleteIcon />
</button>;
```

- reduxμ μλ λ°μ΄ν°λ read-only μ
- dispatchλ₯Ό μ΄μ©ν΄μ reducerμμ μμμ νλ €κ³  νμλλ° componentμ λ€μ΄μ€λ string[]μ΄ storeμ κ°κ° λ€λ₯΄κ² μ μ₯λμ΄ μκΈ° λλ¬Έμ κΈ°μ‘΄μ draft.initialState.data κ°μ λ°©μμΌλ‘ μμ ν  μ μμ

#### 2μ°¨ μλ : read-only μ κ±° - setAutoFreeze(false);

```typescript
// storeμμ read-only μμ± μ κ±°
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

- storeμ μλ κ°μ μ§μ  λ³κ²½ κ°λ₯νμ§λ§ re-renderκ° μλ¨
  - μλ reducerλ‘ storeμ κ°μ λ³κ²½νλ©΄ re-renderκ° λλλ° μ΄λ°μμΌλ‘ λ°λ‘ λ°κΏλ²λ¦¬λκΉ μλλ λ―

#### 3μ°¨ μλ : useStateμ storeμ stateλ₯Ό λ£κ³  setStateλ₯Ό μ»΄ν¬λνΈμ μ λ¬

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

- setStateλ₯Ό μ λ¬μ ν΄λ setTextArray(textList) stateλ₯Ό μ§μ  λ³ννκ³  κ·Έκ²μ κ·Έλλ‘ μ λ¬νλ©΄ λ λλ§μ΄ λμ§ μμ
- setTextArray([...textList]); κ°μ΄ λ°°μ΄μ μλ‘ ν λΉν΄μ μ λ¬ν΄μΌ λ λλ§μ΄ λ€μ λ¨
- TextListBoxλ₯Ό μ¬μ©νλ κ°μλ§νΌ useStateλ₯Ό λ§λ€μ΄μ κ°κ° μ λ¬ν  μμ 

#### 'react/no-array-index-key': 'off'

- indexλ₯Ό keyλ‘ μ¬μ©ν  λ λμ€λ eslint κ²½κ³ 
- λμ€μ eslintλλ¬Έμ λ¬Έμ λ  κ² κ°μμ λ―Έλ¦¬ μ κ±°

### μ°Έκ³ λ¬Έν

- [javascript removing element of array cleanest way](https://stackoverflow.com/questions/47023975/what-is-the-cleanest-way-to-remove-an-element-from-an-immutable-array-in-js)
- [Cannot test reducer: Cannot assign to read only property](https://github.com/reduxjs/redux-toolkit/issues/424)

### κ³Όμ° μ΄ λ°©λ²μ΄ μ΅μ μΈκ°?

- μ»΄ν¬λνΈ μ¬μ¬μ©μ μν΄ λ¦¬λμ€μ read-onlyμμ±μ μμ κ³  useStateλ₯Ό κ°κ° λ§λ€λ©΄μ μ¬μ©ν΄μΌλλ κ±΄μ§, λ€λ₯Έ λ μ’μ λ°©λ²μ μλμ§ μ°Ύμλ΄μΌ ν¨

### λ€μ μ§ν μμ 

- [ ] drag and dropμΌλ‘ array μμ λ³ν

</details>

<details>
<summary>2021.09.01(Tony)</summary>

### λΆλ³μ± λ³΄μ₯ νλ©΄μ arrayμμ μμ μ­μ  νκΈ°

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

const indexToRemove = 2; // the 'c'

const result = [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];

console.log(result);

// sliceλ ...arrλ₯Ό λλ²μ΄λ νλ λ²κ±°λ‘μμ΄ μμΌλ―λ‘
const textArray = [...textList];
textArray.splice(index, 1);
// λ°°μ΄ λ³΅μ¬ ν spliceλ₯Ό μ¬μ©
```

### typescript function type

- parameter νμ, return νμμ μ μν΄μ£Όλ©΄ λλ€.

```typescript
fn: (a: string) => void
```

### reduxλ₯Ό typescriptμμ μ¬μ©νλ©΄ initialStateλ μ λΆ μ΄κΈ°κ°μ΄ μμ΄μΌ λλ€.

- reducerμμ action.dataλ₯Ό λ°μμ λ£μ λ optional chainingμ μ¬μ©ν  μ μλ€κ³  λμ΄

### μ°Έκ³  λ¬Έν

- [typescript function type](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>

<details>
<summary>2021.09.02(Tony)</summary>

## TextListBox delete button

### High order function μ μ©

- HOFλ‘ λ°κΏλ μ»΄ν¬λνΈμ ν¨μνμμ κ·Έλλ‘ μ μ©ν΄λ μ μ©λ¨
- [ ] HOFμ μμλ₯Ό λ μ°Ύμλ³΄κ³  μ₯μ μ μμλ³΄κΈ°

### λ²κ·Έ μμ 

- `μ΄λ° λΆλ€μκ² μΆμ²ν΄μ` μμ TextListBoxλ₯Ό μ¬μ©ν  λ list arrayλ₯Ό expectedStudentsκ° μλ whatYouCanLearnμΌλ‘ μ€νκ° μλ λΆλΆμ μμ ν¨

</details>

<details>
<summary>2021.09.05(NOAH)</summary>

## νμκ°μ error λ©μμ§

- err.response.dataμ μλ²μμ λ°μμ¨ μλ¬ λ©μμ§κ° μμ
- AxiosError typescript μ²λ¦¬

```typescript
onError: (err: AxiosError) => {
  console.error(err.response?.data);
};
```

- useInput μ»€μ€ν ν nodebird κ°μμμ κ°μ Έμ΄

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

## κ΅¬ν ν  κ²

- λΉλ°λ²νΈ μ°ΎκΈ° λͺ¨λ¬
- κ°νΈ νμκ°μ
- κ°νΈ λ‘κ·ΈμΈ

</details>

<details>
<summary>2021.09.14(NOAH)</summary>

## λΉλ°λ²νΈ μ°ΎκΈ° Modal κ΅¬ν (Portal μ¬μ©)

- \_document.js νμ΄μ§μ Modalμ λ£μ div tag μΆκ°

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

- Portal wrapper μΆκ°

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

- Contentκ° λλ component μΆκ°
- λΉλ°λ²νΈ μ°ΎκΈ° λ²νΌμ λ°λΌ showFindPasswordModal useState λ³μμ booleanκ°μ λ³κ²½νμ¬ μ μ΄

```typescript
{
  showFindPasswordModal && (
    <Portal selector="#find-password-modal">
      <FindPasswordModal handleCloseModal={handleCloseFindPasswordModal} />
    </Portal>
  );
}
```

## κ΅¬ν ν  κ²

- λ°±μλμͺ½μ Routerκ° κ΅¬νλ ν API μ°κ²° νμ€νΈλ₯Ό ν΄μΌ ν¨

</details>

<details>
<summary>2021.09.19(λν)</summary>

## κ΅¬νν κ²

- κ°μ νμ΄μ§ λ μ΄μμμ λλ΅μ μΌλ‘ κ΅¬ν
- κ°μ μΉ΄νκ³ λ¦¬μ νν°(λμ΄λ, μ Β·λ¬΄λ£ μ ν, μ¨λΌμΈ/μ€νλΌμΈ)λ₯Ό κ°κ° CategoryMenu μ»΄ν¬λνΈμ LectureFilter μ»΄ν¬λνΈλ‘ λΆλ¦¬
- κ°μ κ²μνκΈ° λΆλΆ λμμΈ κ΅¬ν
  - μΈνλ° CSS μ°Έκ³ ν¨.

## μμΌλ‘ μ§νν  μμ

- λλ―Έλ°μ΄ν°λ‘ κ°μ λ¦¬μ€νΈ λνλ΄κΈ°
- μΉ΄λ μ λ ¬ μ€νμΌμ μ ννλ Gridμ List λ²νΌ κ΅¬ννκΈ°

</details>

<details>
<summary>2021.09.13~19.(Tony)</summary>

## κ°μ μμ± λΆ drag and drop

![](https://images.velog.io/images/gth1123/post/f3f4e477-405e-428d-a5c9-2d931999fa2d/dragAndDrop.gif)

javascriptλ‘ μ§μ  κ΅¬ννλ € νμΌλ μ λλ©μ΄μλ°λ λμ€ DOMμ λ³κ²½νκ±°λ
(DOM μμΉκ° λ°λλ©΄ μ λλ©μ΄μμ΄ λ°λ μμΉλ₯Ό κΈ°μ€μΌλ‘ λμνκΈ° λλ¬Έμ κ³μ°μ΄ μ΄λ ΅λ€)
μ λλ©μ΄μμ΄ λλκΈ° μ μ μ λλ©μ΄μμ λμ°©μ§μ μ λ³κ²½νλ κ²μ΄ μ΄λ €μμ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©νκΈ°λ‘ νλ€

### sortablejs vs react-sortable-hoc vs react dnd

#### sortablejs

- Weekly Downloads : μ½ 80λ§
- μλ°μ€ν¬λ¦½νΈμμ μ¬μ©νκΈ° μν΄μ λ§λ€μ΄μ§ λΌμ΄λΈλ¬λ¦¬
- [sortablejs μμ ](http://sortablejs.github.io/Sortable/#simple-list)
- react-sortablejsλ₯Ό μ¬μ©νλ©΄ λ¦¬μ‘νΈμμλ νΈνκ² μ¬μ©κ°λ₯
  - Weekly Downloads : μ½ 8λ§

#### react-sortable-hoc

- Weekly Downloads : μ½ 46λ§
- μμ κ° μ λμ΄μλ€
- [react-sortable-hoc μμ ](http://clauderic.github.io/react-sortable-hoc/#/basic-configuration/basic-usage?_k=mpdxwt)

#### react dnd

- Weekly Downloads : μ½ 81λ§
- drag and drop react λΌμ΄λΈλ¬λ¦¬ μ€ κ°μ₯ λ§μ΄ μ¬μ©λλ€

#### μ μ  κΈ°μ€

- inflearn μ λλ©μ΄μκ³Ό κ°μ₯ μ μ¬ν κ²
- sortablejsκ° κ±°μ λκ°κ³  λλ¨Έμ§ mouseup κ³Ό mousedownμμ μ λλ©μ΄μμ΄ μ΄λλλ λ°©μμ΄μλ€(drag apiλ₯Ό μ¬μ©νμ§ μλ κ²μΌλ‘ λ³΄μ)

### react-sortablejs

```
npm install --save react-sortablejs sortablejs
npm install --save-dev @types/sortablejs
```

- force flagλ₯Ό μ¬μ©ν΄μ μ€μΉλ₯Ό νλ€.

- [npm cli flag: ` force` and ` legacy peer deps`](https://github.com/Ark-inflearn/inflearn-clone-front/wiki/npm-cli-flag:-%60--force%60-and-%60--legacy-peer-deps%60)

#### key !== index

DO NOT use the index as a key for your list items. Sorting will not work.

In all the examples above, I used an object with an ID. You should do the same!

I may even enforce this into the design to eliminate errors.

### type λ³κ²½ λ° μ€μ 

- [x] lectureData?.courseInfoμ μν λ°°μ΄ whatYouCanLearn, expectedStudents, requiredKnowledge νμλ³κ²½
  - string[] -> {name: string, order: number}[]
- [x] ReactSortable(sortablejs λΌμ΄λΈλ¬λ¦¬ μ»΄ν¬λνΈ)μ props type λ§κ² μ€μ 

### redux κ΄λ ¨ μΈν

- [x] λλκ·Έ μ€ λλ ν μ μ₯ λ²νΌ λλ₯΄λ©΄ λ³κ²½λ μμλ‘ λ³΄λ΄κΈ°(saga)
- [x] μ€κ° μ μ₯νλ©΄μ sagaμμ orderλ₯Ό λ΄κ° λ³κ²½ν΄μ λ³΄λ΄μ£Όλκ² λ§λκ±΄μ§ μκ°ν΄λ³΄κΈ°

  - κ·Έλ₯ νλ‘ νΈμμ λ³κ²½λ orderλ‘ λ³΄λ΄μ£Όμ - λμ€μ λ°±μλλ κ°μ΄ κ³ λ―Όν΄λ΄μΌ ν¨

- delete μμ΄μ½ ν΄λ¦­νλ©΄ μ­μ νλ λ°©μ λ³κ²½
  - κΈ°μ‘΄ : reducerμμ storeμ μλ κ²μ λ°λ‘ μ­μ 
  - λ³κ²½ : storeμ μλ κ²μ κ±΄λ€μ§ μκ³  useStateλ‘ μμλ‘ μ μ₯ ν μ­μ  λλ μμμ λ³κ²½μ ν΄λΉ νμ΄μ§μμ μ€κ°μ μ₯ λ²νΌμ λλ₯΄λ©΄ μλ²μ λ°μλλλ‘ λ³κ²½
    - λ³κ²½λ μμλ μλ‘κ³ μΉ¨μ νλ©΄ λ€μ μλ²μμ λ³κ²½ λ°μ΄ν°λ₯Ό storeμ μ μ₯νλ λ°©μ
    - storeλ μλ²μμ λ°μ μ λ³΄λ§μ μ μ₯
    - react-sortablejsμμ μ¬μ©νλ λ°©μκ³Ό λ§μΆλ κ²

## Things to do on this page

- [ ] μΉ΄νκ³ λ¦¬, κ°μ μμ€ λ§λ€κΈ°
- [x] μ€κ° μ μ₯λ²νΌκ³Ό redux, saga μ°κ²°νκΈ°
</details>

<details>
<summary>2021.09.19 ~ 20.(Tony)</summary>

## μΆκ° νκΈ° λ²νΌ κΈ°λ₯ κ΅¬ν

- μΆκ°νκΈ°λ₯Ό λλ₯΄λ©΄ storeκ° μλ setStateμμ λ³κ²½
  - redux storeμ μ§μ  λ³κ²½νμ§ μλ μ΄μ λ react-sortablejsμμ useStateλ₯Ό μ¬μ©νκΈ° λλ¬Έ

```typescript
// ReactSortable μ»΄ν¬λνΈμμ setList μμ±μ setStateκ° λ€μ΄κ°μΌ ν¨
<ReactSortable list={expectedStudents} setList={setExpectedStudents} animation={200} handle=".handle">
  {expectedStudents.map((item, index) => (
    <TextListBox key={item.id} item={item} list={expectedStudents} setList={setExpectedStudents} index={index} />
  ))}
</ReactSortable>
```

</details>

<details>
<summary>2021.09.25.(Tony)</summary>

- [ ] package.jsonμμ devμ ν¬ν¨λ NODE_OPTIONS='--inspect'μμΈν μμλ³΄κΈ°
  - μμ μ μλμλλ° μ§κΈμ λλ μ΄μ 
- [x] create_course.tsx warning μ‘°μ¬ ν μμ νκΈ°
- [ ] course_info.tsx warning μ‘°μ¬ ν μμ νκΈ°
  - λ¬΄μ
- [x] μΆκ°νκΈ° μ΄ν input tag value μ΄κΈ°ν

### create_course.tsx warning μ‘°μ¬ ν μμ νκΈ°

- react_devtools_backend.js:4049 Warning: Received `false` for a non-boolean attribute `loading`.

```
// create_course.tsx

Warning: Received `false` for a non-boolean attribute `loading`.

If you want to write it to the DOM, pass a string instead: loading="false" or loading={value.toString()}.

If you used to conditionally omit it with loading={condition && value}, pass loading={condition ? value : undefined} instead.
```

#### BtnMakeCourseμ loading propμ $λ₯Ό λΆμ¬μ ν΄κ²°

```typescript
// create_course.tsx
interface IBtnProps {
  $loading: boolean;
}

const BtnMakeCourse = styled.button`
  // ...
  pointer-events: ${(props: IBtnProps) => (props.$loading ? 'none' : 'auto')};
  opacity: ${(props: IBtnProps) => (props.$loading ? 0.7 : 1)};
`;

<BtnMakeCourse $loading={createLectureLoading} type="button" onClick={handleSubmit}>
  κ°μ λ§λ€κΈ°
</BtnMakeCourse>;
```

- Transient props : $
  - μ€νμΌμ΄ μ§μ λ κ΅¬μ± μμμ μν΄ μ¬μ©λλ propsκ° κΈ°λ³Έ React λΈλλ‘ μ λ¬λκ±°λ DOM μμμ λ λλ§λλ κ²μ λ°©μ§νλ €λ©΄ prop μ΄λ¦ μμ λ¬λ¬ κΈ°νΈ($)λ₯Ό λΆμ¬ μΌμμ μΈ propμΌλ‘ λ§λ€ μ μμ΅λλ€.

#### μ°Έκ³  λ¬Έν

- https://mygumi.tistory.com/382
- https://stackoverflow.com/questions/49784294/warning-received-false-for-a-non-boolean-attribute-how-do-i-pass-a-boolean-f
- https://styled-components.com/docs/api#transient-props

### course_info.tsx warning

```
Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
```

```typescript
<form onSubmit={handleSubmitAddItem(inputWhatYouCanLearn)}>
  <Label>μ΄λ° κ±Έ λ°°μΈ μ μμ΄μ</Label>
  <BoxInput ref={inputWhatYouCanLearn} type="text" placeholder="e.g., λ¦¬μ‘νΈ λ€μ΄ν°λΈ κ°λ°" />
  <AddButton type="submit">μΆκ°νκΈ°</AddButton>
  <WarnMessage>λ κ° μ΄μ λ£μ΄μ£ΌμΈμ</WarnMessage>
</form>
```

- μ μ½λμμ input tagμμ valueλ₯Ό μ¬μ©νκ³  μμ§ μμ
  - μμΈ νμ μλ¨ - νλ‘κ·Έλ¨μ μν₯μμΌλ λ¬΄μνκΈ°λ‘ ν¨

#### μ°Έκ³  λ¬Έν

- https://bbangaro.tistory.com/28
- https://stackoverflow.com/questions/43556212/failed-form-proptype-you-provided-a-value-prop-to-a-form-field-without-an-on

### μΆκ°νκΈ° μ΄ν input tag value μ΄κΈ°ν

```typescript
// course_info.tsxμ handleSubmitAddItem ν¨μ
inputElement.current.value = ''; // input value μ΄κΈ°ν
```

</details>

<details>
<summary>2021.09.23 ~ 29(λν)</summary>

## κ΅¬νν κ²

- λλ―Έλ°μ΄ν°λ‘ κ°μ λ°μ΄ν°λ₯Ό κ°μ Έμμ Gridμ List μ€νμΌμ λ§λ ννλ‘ κ°μ μΉ΄λλ₯Ό λ³΄μ¬μ€.

  - μ€νμΌ μ ν λ²νΌμ λλ μ λ, μΏΌλ¦¬ νλΌλ―Έν°λ‘ κ°μ μΉ΄λ μ€νμΌ κ°μ μ λ¬

    ```
    http://localhost:3000/courses?view=Gird
    ```

    μ urlλ‘ λ°λ‘ μ κ·Όνμ λ Grid νμμ κ°μ μ€νμΌμ΄ μ μ§λ¨.

    - viewμ μ λ¬ν  μ μλ κ°

      | view κ° | μ­ν         |
      | ------- | ----------- |
      | Grid    | Grid μ€νμΌ |
      | List    | List μ€νμΌ |

- κ°μμ ν μΈμ¨κ³Ό μκ°λ₯Ό λνλ΄λ LecturePrice μ»΄ν¬λνΈ μμ±

  ```jsx
  <LecturePrice price={price} discount={onDiscount} cardStyle="List" />
  ```

  - props μ€λͺ

    | props     | μ­ν                                         | μ λ¬ λ°μ΄ν° κ°                                                                                                                           |
    | --------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | price     | μλ κ°κ²©μ μ λ¬νλ λΆλΆ                   | lecture λλ―Έλ°μ΄ν°μ price                                                                                                               |
    | discount  | ν μΈμ¨μ μ λ¬νλ λΆλΆ                      | lecture λλ―Έλ°μ΄ν°μ onDiscount                                                                                                          |
    | cardStyle | κ° κ°μ μΉ΄λ μ€νμΌμ λ§κ² κ°κ²©μ νμν΄μ€. | <p>Grid: κΈ°μ‘΄ κ°μ μΉ΄λ(LectureCard.tsx)μ λ§λ λμμΈ</p><p>List: μνμΌλ‘ λμμΈλ κ°μ μΉ΄λ(HorizonLectureCard.tsx)μ λ§λ λμμΈ</p> |

- HeaderLayoutμ κ°μ νμ΄μ§ κ²½λ‘μΈ /courses μΆκ°

## μμ΄μ½ λ²νΌ hoverν  λλ§λ€ Card μ»΄ν¬λνΈ λ¦¬λ λλ§ λ¬Έμ  ν΄κ²° κ³Όμ 

- **λ¬Έμ  μν©**
  μΆκ° κ΄λ ¨ μμ΄μ½ λ²νΌμ hover ν  λλ§λ€, λλ€μΌλ‘ μ§μ λλ ν΄μνκ·Έ λΆλΆμ μμμ΄ μ§μμ μΌλ‘ λ³κ²½λλ λ¬Έμ  λ°μ
- **λ¬Έμ  ν΄κ²° κ³Όμ **

  - React Developer Toolsλ‘ μ»΄ν¬λνΈκ° λ λλ§ λ  λ μλ°μ΄νΈ λλ λΆλΆμ νμΈν΄λ³Έ κ²°κ³Ό, ν΄λΉ μμ΄μ½μ΄ μμΉν HorizonLectureCard μ»΄ν¬λνΈ μμ²΄κ° Hoverν  λλ§λ€ λ¦¬λ λλ§ λκ³  μμλ€.
  - μ²μμλ μ΄λ²€νΈ λμμΌλ‘ μΈν λ¬Έμ λΌκ³  μκ°νμΌλ μ΄λ²€νΈ λ²λΈλ§μΌλ‘ μΈν΄ λ°μν λ¬Έμ λ μλμλ€.
    μλνλ©΄ onMouseEnterμ onMouseLeaveλ λ²λΈλ§μ΄ μ‘΄μ¬νμ§ μκ³  μΊ‘μ³ λ¨κ³ λν μκΈ° λλ¬Έμ΄λ€.
    [onMouseEnterμ onMouseLeaveμ λ²λΈλ§ λ¬Έμ  κ΄λ ¨ κΈ](https://github.com/facebook/react/issues/5739)
    [Reactμ λ§μ°μ€ μ΄λ²€νΈ κ΄λ ¨ μκ°κΈ](https://ko.reactjs.org/docs/events.html#mouse-events)

  - μΌλ¨ HorizonLectureCard μ»΄ν¬λνΈ μμμλ§ λ¦¬λ λλ§μ΄ λκ³  μμκΈ° λλ¬Έμ Icon Buttonλ§ λͺ¨μ μ»΄ν¬λνΈ μμμ λ°λ‘ μ€νμν¨λ€λ©΄ λ¬Έμ κ° μ λ  κ² κ°λ€κ³  μκ°νλ€. κ·Έλμ Icon Buttonμ λͺ¨μ IconButtons μ»΄ν¬λνΈλ‘ λΆλ¦¬ν ν hoverλ₯Ό λ€μ μλνλλ λ¬Έμ κ° ν΄κ²°λμλ€.

- **ν΄κ²° κ³Όμ μ ν΅ν΄ μκ²λ λ¬Έμ  λ°μ μ΄μ **
  - isHoverCartμ κ°μ stateλ€μ΄ λ³κ²½λ  λλ§λ€, ν΄λΉ stateκ° μ‘΄μ¬νλ μ»΄ν¬λνΈ μ μ²΄μ μν₯μ λΌμ³μ λ¦¬λ λλ§ λμκΈ° λλ¬Έμ μ΄λ¬ν λ¬Έμ κ° λ°μνκ² λ κ²μ΄λ€.
  - λ¦¬μ‘νΈλ νΉμ  stateκ° λ³κ²½λλ©΄ ν΄λΉ stateκ° μ μΈλ μ»΄ν¬λνΈμ νμ μ»΄ν¬λνΈλ€μ λͺ¨λ λ¦¬λ λλ§ μν¨λ€.
  - λΆνμν λ¦¬λ λλ§μ λ°©μ§νκ³  λ¦¬μ‘νΈ μ±λ₯ μ΅μ νλ₯Ό μν΄μ stateλ₯Ό λ€λ£¨λ μ»΄ν¬λνΈλ λ°λ‘ λΆλ¦¬ μμΌμ€μΌ νλ€.
- **μ°Έκ³ **
  [λ¦¬μ‘νΈμ state μ μΈ μμΉ κ΄λ ¨ κΈ](https://cocoder16.tistory.com/36)

## μμΌλ‘ μ§νν  μμ

- κΈ°μ  κ²μ λΆλΆ κ΅¬ννκΈ°
- μΆμ²μ, μΈκΈ°μ λ± μ λ ¬ μ ν λ²νΌ κ΅¬ννκΈ°
</details>

<details>
<summary>2021.09.27.(Tony)</summary>

# branch : course_info/category

### Things to do

- [x] μΉ΄νκ³ λ¦¬ λͺ©λ‘μ μ²μμ μλ²μμ λ°μμ€κΈ°(DBλ‘ κ΄λ¦¬νλ κ²μ΄ κ΄λ¦¬μνμ΄μ§μμ κ΄λ¦¬νκΈ° νΈνκΈ° λλ¬Έ)
  - CourseLayout.tsx > dispatch(LOAD_EDIT_LECTURE_REQUEST) > saga : loadEditPage

```typescript
// νμ΄μ§ λ°λ λ λ§λ€ μλ²μμ λ°μ΄ν° λ€μ κ°μ Έμ€κΈ°
const currentUrl = useRef('');

function getCurrentPath() {
  currentUrl.current = router.pathname.split('edit')[1];
  // console.log(currentUrl);
  return currentUrl.current;
}

useEffect(() => {
  dispatch({
    type: LOAD_EDIT_LECTURE_REQUEST,
  });
}, [currentUrl.current]);
```

- [x] μΉ΄νκ³ λ¦¬ λ²νΌ ν΄λ¦­ μ μ νν μΉ΄νκ³ λ¦¬ stateμ λ³΄κ΄

  - stateμ λ³΄κ΄ν μΉ΄νκ³ λ¦¬λ `μ μ₯ ν λ€μμ΄λ` λ²νΌμ λλ₯΄λ©΄ μ·¨ν©λΌμ΄ μλ²λ‘ μ μ‘

- [x] μ νλ μΉ΄νκ³ λ¦¬ λ€μ ν΄λ¦­νλ©΄ μ ν ν΄μ 

- [x] κ°μ μμ€λ μΉ΄νκ³ λ¦¬μ κ°μ

</details>

<details>
<summary>2021.10.03.(Tony)</summary>

## μμΈμκ° νμ΄μ§

### Things to do

- [x] κΈ°λ³Έμ μΈ ν μ‘κΈ° : μ λͺ©, μκ°κΈ λ±
  - textarea place holderλ§ μ μ°νκ²

```css
textarea::placeholder {
  color: #dbdbdb;
}
```

- [ ] νμ€νΈ μλν° λ£κΈ°
- [ ] νμ€νΈ μλν°μ μλ²μμ λΆλ¬μ¨ λ΄μ©(HTML κ°μ κ²) λ£κΈ°
- [ ] μμ± νμ μ‘°κ±΄ μ μ© λ° μ μ₯ ν λ€μ μ΄λ

### next.js font μΆκ°

- \_documentμ Headμ μΆκ° ν μ¬μ©

```typescript
<Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
</Head>
```

- font-family λ³κ²½
  - Roboto -> Noto+Sans+KR
  - μΈνλ°κ³Ό λ¬λ¦¬ font-weight 800μ΄ μ‘΄μ¬νμ§ μμμ κΈ°μ‘΄ 800μΈ κ²μ 700μΌλ‘ λ³κ²½ν΄μΌ ν¨

</details>

<details>
<summary>2021.10.02 ~ 04(λν)</summary>

## μΉ΄νκ³ λ¦¬ λ° κ°μ μμ€ λ²νΌ ν΄λ¦­ μ μ μ²΄ νλ©΄ λ¦¬λ λλ§ λ¬Έμ  ν΄κ²° κ³Όμ 

#### λ¬Έμ  μν©

React Developer Toolsλ‘ κ°μ μμ± νμ΄μ§μ μΉ΄νκ³ λ¦¬ λ° κ°μ μμ€ λ²νΌμ ν΄λ¦­ ν  λλ§λ€ μ μ²΄ νλ©΄μ΄ λ¦¬λ λλ§ λλ λ¬Έμ  λ°κ²¬

#### λ¬Έμ  λ°μ μ΄μ 

- '2021.09.23 ~ 29(λν)'μ κΈ°μ¬λ 'μμ΄μ½ λ²νΌ hoverν  λλ§λ€ Card μ»΄ν¬λνΈ λ¦¬λ λλ§ λ¬Έμ  ν΄κ²° κ³Όμ ' κ²½νμ ν΅ν΄ λ²νΌ ν΄λ¦­μ selectedCategoryIdκ° λ³κ²½λλ©΄μ stateκ° μ μΈλ μ»΄ν¬λνΈμ νμ μ»΄ν¬λνΈλ€μ λͺ¨λ λ¦¬λ λλ§ μμΌμ λ°μν λ¬Έμ λΌκ³  μ μΆν  μ μμλ€.

#### λ¬Έμ  ν΄κ²° κ³Όμ 

- μΌλ¨ μΉ΄νκ³ λ¦¬ μμ­μΌλ‘ λ¬Έμ  ν΄κ²°μ μ§νν¨.
- μλμμ λ§νλ λΆλͺ¨ μ»΄ν¬λνΈλ course_info.tsxμ΄κ³  μμ μ»΄ν¬λνΈλ CourseComminButton.tsxμ΄λ€.
- **μλν ν΄κ²° λ°©λ² (1)**
  - μΌλ¨ CourseCommonButtonμ μλ μ»΄ν¬λνΈκ° λ°λ‘ λΆλ¦¬λμ΄ μμλ€. λ€λ§ CourseCommonButtonμμ λ°μμν¨ selectedCategory state λ³κ²½μ΄ λΆλͺ¨ μ»΄ν¬λνΈμ μ λ¬μ΄ λμ΄μ μν₯μ λΌμΉκ³  μμκΈ° λλ¬Έμ course_infoμ μ μΈλ selectedCategory stateλ₯Ό CourseCommonButtonμΌλ‘ ν¬ν¨μμΌ°λ€.
  - μ΄λ κ² κ΅¬ννμ λ λ¦¬λ λλ§μ μ νν λ²νΌμμλ§ λ°μνμ§λ§ μΉ΄νκ³ λ¦¬κ° μ€λ³΅ μ νμ΄ λλ λ¬Έμ κ° λ°μνλ€.
- **μλν ν΄κ²° λ°©λ² (2)**
  - μ²«λ²μ§Έλ‘ μλν ν΄κ²° λ°©λ²μ ν΅ν΄ μ νν λ²νΌλ§ λ¦¬λ λλ§μ΄ λμ΄μΌ νλ κ²μ΄ μλλΌ, μΉ΄νκ³ λ¦¬ λΆλΆ μμ²΄κ° λ¦¬λ λλ§μ΄ λμ΄μΌ μ΄μ μ μ ννλ λ²νΌ λ΄μ­μ μ§μμ€μ μ€λ³΅μΌλ‘ λ²νΌμ΄ μ νλλ λ¬Έμ λ₯Ό ν΄κ²°ν΄μ€ μ μλ€κ³  νλ¨νλ€.
  - κ·Έλμ map μ½λλ ν¬ν¨μμΌμ CourseCommonButton μ»΄ν¬λνΈλ‘ μ΄λμμΌμ λ²νΌ νλλ₯Ό μ ννλ©΄ μΉ΄νκ³ λ¦¬ λ²νΌ μ μ²΄κ° λ¦¬λ λλ§ λκ²λ νλ€.
  - νμ§λ§ λ°μ΄ν°λ₯Ό μ λ¬νλ λ°©μμμ λ¬Έμ κ° λ°μνλ€.
    μμ μ»΄ν¬λνΈκ° κ°κ³  μλ μΉ΄νκ³ λ¦¬ id state κ°μ λΆλͺ¨ μ»΄ν¬λνΈλ‘ μ λ¬ν΄μ€μΌ λμ€μ μλ²λ‘ λ€λ₯Έ λ°μ΄ν°λ€κ³Ό ν¨κ» μ λ¬ ν  μ μλλ°, λΆλͺ¨ μ»΄ν¬λνΈκ° μΉ΄νκ³ λ¦¬ id stateλ₯Ό μ λ¬ λ°μμ λΆλͺ¨ μ»΄ν¬λνΈ λ΄μμ μλ‘ μμ±ν stateμ κ°μ μ μ₯νλ©΄ μ μ²΄ νλ©΄ λ¦¬λ λλ§μ΄ λ°μν΄μ μ»΄ν¬λνΈ λΆλ¦¬λ₯Ό ν μλ―Έκ° μμ΄μ§κ² λλ€.
    κ·Έλ¦¬κ³  reduxλ₯Ό μ¬μ©ν  μλ μμμ§λ§ ν λλκ³Ό μκ²¬μ λλλ κ³Όμ μμ redux μ¬μ©μ΄ μ΄μ©λ©΄ λ¨μν κ³Όμ μ λ²κ±°λ‘­κ² λ§λ€ μ μκ² λ€λ μκ°μ΄ λ€μλ€.
- **μ΅μ’ ν΄κ²° λ°©λ²**

  - [ν λλμ΄ useRefλ‘ μλνμ  λ°©λ²](https://github.com/Ark-inflearn/inflearn-clone-front/issues/83)μμ μμ΄λμ΄λ₯Ό μ»μ΄μ μμ μ»΄ν¬λνΈμμ λΆλͺ¨ μ»΄ν¬λνΈλ‘ μ λ¬ λ°μ μΉ΄νκ³ λ¦¬ idκ°μ useRefλ‘ μ μ₯νλ©΄ λκ² λ€κ³  μκ°μ λλ€.
  - μ°Έκ³ λ‘ [useRefμ current κ°μ΄ λ°λλ€κ³  νμ¬ μ»΄ν¬λνΈκ° λ¦¬λ λλ§ λμ§ μλλ€.](https://ko.reactjs.org/docs/hooks-reference.html#useref)
  - μμ ν CourseCommonButton μ»΄ν¬λνΈλ κ°μ μμ€ μ νμμλ μ¬μ¬μ©μ΄ κ°λ₯νκ²λ λ§λ€μλ€.

  1. λ¨Όμ  CourseCommonButton.tsxμμ μ λ¬λ°μμ μ μ₯ν  categoryIdλ₯Ό useRefλ‘ μ μΈν΄μ€λ€.
     ```javascript
     const categoryId = (useRef < string) | (number > '');
     const levelId = (useRef < string) | (number > '');
     ```
  2. course_info.tsxμμ μΉ΄νκ³ λ¦¬ μ ν μμ­μ κΈ°μ‘΄ map ν¨μκ° μλ μλ¦¬μ `<CourseCommonButton />` μ»΄ν¬λνΈλ§ μλ μ½λλ‘ λ°κΏμ€λ€. μ΄ μ»΄ν¬λνΈλ kindλ‘ categoryκ°μ κ°μ§κΈ° λλ¬Έμ μΉ΄νκ³ λ¦¬ λ²νΌμ λ΄λΉνλ€.

     ```jsx
     <FieldDivMarginTop>
       <Label>μΉ΄νκ³ λ¦¬</Label>
       <CourseCommonButton kind="category" handleId={handleId} data={lectureData.courseInfo.category} />
     </FieldDivMarginTop>
     ```

     κ°μ μμ€ μ ν μμ­μ μλμ κ°μ΄ μ½λλ₯Ό μμ±νλ€.

     ```jsx
     <FieldDivMarginTop>
       <Label>κ°μ μμ€</Label>
       <CourseCommonButton kind="level" handleId={handleId} data={lectureData.courseInfo.level} />
     </FieldDivMarginTop>
     ```

     - props μ€λͺ

     | props    | μ­ν                                                                         | μ λ¬νλ λ°μ΄ν°                                                 |
     | -------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- |
     | kind     | λ²νΌ μ’λ₯ μ ννλ λΆλΆ                                                     | <p>category: μΉ΄νκ³ λ¦¬ λ²νΌ</p><p>level: κ°μ μμ€ μ ν λ²νΌ</p> |
     | handleId | μΉ΄νκ³ λ¦¬ νΉμ κ°μ μμ€(level)μ idμ kindκ° μ μ₯λ κ°μ²΄ κ°μ μ λ¬λ°λ λΆλΆ | course_infoμ μ μΈλ handleId ν¨μ                              |
     | data     | μΉ΄νκ³ λ¦¬ λ° κ°μ μμ€μ κ΄ν κ°μ μ λ¬νλ λΆλΆ                             | lectureDataμμ λ°°μ΄λ‘ λ category νΉμ level λ°μ΄ν°            |

  3. κ·Έλ¦¬κ³  CourseCommonButton.tsxμλ λ€μκ³Ό κ°μ΄ μ½λλ₯Ό μμ ν΄μ€¬λ€. μ°Έκ³ λ‘ useEffect λΆλΆκ³Ό μκ΄μμ΄ λ²νΌμ μ νν  λλ§λ€ λ¦¬λ λλ§μ΄ λμ΄μ useEffect μ½λλ₯Ό κ΅¬ννμ§ μμλ€.
     selectedId stateλ μ νν λ²νΌμ μμ΄λλ₯Ό μ μ₯νλ κ²μΌλ‘, μ΄μ μ μ¬μ©νλ selectedCategoryIdμ κ°μ μ­ν μ νλλ° μΉ΄νκ³ λ¦¬ λΏλ§μλλΌ κ°μ μμ€ λ²νΌμ κ΅¬νν  λλ selectedLevelId μ­ν μ νλ€.
     ```jsx
     const [selectedId, setSelectedId] = (useState < string) | (number > '');
     ```
     κ·Έλ¦¬κ³  λ²νΌ ν΄λ¦­μΌλ‘ onClickButtonμ΄ μ€νλ  λ μ νν λ²νΌμ item.id κ°μ΄ μ λ¬λκ² ν΄μ€¬λ€.
     ```jsx
     return (
       <>
         {data.map((item) => (
           <CourseCommonButtonStyle
             onClick={() => onClickButton(item.id)}
             key={item.id}
             isSelected={item.id === selectedId}
           >
             {item.name}
           </CourseCommonButtonStyle>
         ))}
       </>
     );
     ```
     μ€νλ onClickButtonμ κ° μ‘°κ±΄λ¬Έ μμλ handleId νλ‘νΌν°λ₯Ό ν΅ν΄ μ νν λ²νΌμ idμ νμ¬ μ€νλκ³  μλ λ²νΌμ μ’λ₯λ₯Ό κ°μ²΄λ‘ μ λ¬νλ€.
     ```javascript
     const onClickButton = (id: string | number) => {
       if (id === selectedId) {
         // true - μ νλ μν
         setSelectedId('');
         handleId({ id: '', kind });
       } else {
         // μ νλ μνκ° μλ κ²½μ°
         setSelectedId(id);
         handleId({ id, kind });
       }
     };
     ```
  4. μ handleIdκ° μ€νλ  λ course_infoμ μ μΈλμ΄μλ hadleId ν¨μλ‘ μΈμ κ°μ΄ μ λ¬λλ€. λ§€κ° λ³μμμ kind μμ±μ νμΈνμ¬ κ° λ²νΌ μ’λ₯μ idμ λ§κ² κ°μ μ μ₯μμΌμ€λ€.
     ```javascript
     const handleId = (value: { id: string | number, kind: string }) => {
       // valueλ CourseCommonButtonμ handleId νλ‘νΌν°μ μΈμλ₯Ό ν΅ν΄ μ λ¬ λ°μ κ°
       if (value.kind === 'category') categoryId.current = value.id;
       if (value.kind === 'level') levelId.current = value.id;
     };
     ```
     μ΄λ κ² μ μ₯ν κ°μΈ categoryId.currentμ levelId.currentλ onClickSaveButtonμ΄ μ€νλμ λ μλ²λ‘ μ λ¬νλ μλμ data κ°μ²΄μ κ°μ΄ μ€μ΄μ λ³΄λΌ μ μκ² λλ€.
     ```
       const data = {
         whatYouCanLearnList,
         expectedStudentsList,
         requiredKnowledgeList,
         selectedCategoryId: categoryId.current,
         selectedLevelId: levelId.current,
       };
     ```

</details>

<details>
<summary>2021.10.08 ~ 09, 11(λν)</summary>

## μλΌ μ¬ν­ λ°μ

- λ³μ  ν¬κΈ°λ₯Ό λ°μν μΉμ λ§κ² μ‘°μ 

  - propsλ‘ `responsive`λ₯Ό μΆκ°ν΄μ€μΌ λ°μνμΌλ‘ λμνκ³  `reponsive`λ₯Ό μΆκ°ν΄μ£Όμ§ μμΌλ©΄ κ³ μ λ ν¬κΈ°λ‘ λμνλ€.
  - μ°Έκ³ λ‘ `responsive` λ§ μ λ κ²κ³Ό `responsive={true}`λ κ°μ μ­ν μ νλ€.
    - λ°μν μΉμ λ§κ² λ³μ ν¬κΈ°λ₯Ό λ³κ²½νλ € ν  λ
      ```jsx
      <RatingStar rating={rating} size="1.5rem" responsive />
      ```
    - κ³ μ λ λ³μ  ν¬κΈ°λ₯Ό λνλ΄λ € ν  λ
      ```jsx
      <RatingStar rating={rating} size="1.5rem" />
      ```

- LectureCard.tsxμμ κ°κ²©μ λνλ΄λ λΆλΆμ LecturePrice μ»΄ν¬λνΈλ‘ μμ 

- LectureCardμ HorizonLectureCardμμ λμμ μ¬μ©ν  μ μκ² IconButtons μ»΄ν¬λνΈλ‘ μμ 

  - view propsμ μ λ¬νλ κ°μ λ°λΌ κ°μ λ¦¬μ€νΈ μ€νμΌμ λ§λ μμ΄μ½ λ²νΌμ λ³΄μ¬μ€ μ μλλ‘ νλ€.

    ```
    <IconButtons view="Grid" />
    ```

    - props μ€λͺ

      | props | μ­ν                                   | μ λ¬νλ κ°                                      |
      | ----- | ------------------------------------- | ------------------------------------------------ |
      | view  | κ°μ λ¦¬μ€νΈ μ€νμΌ κ°μ μ λ¬νλ λΆλΆ | <p>Grid: Grid μ€νμΌ</p><p>List: List μ€νμΌ</p> |

## μ΄μ ν΄κ²°

- κ°μ νμ΄μ§μμ Gridλ List λ²νΌμ ν΄λ¦­ν ν λ°μ΄ν°λ₯Ό λΆλ¬μ¬ λ κΈ°μ‘΄ νλ©΄ μμ μ€νΌλ λΆλ¬μ€κΈ°

  - μ΄λ―Έ μ νλ λ²νΌμ λλ μ κ²½μ°μλ λ°μ΄ν° μ¬μμ²­μ νμ§ μλλ‘ νλ€.
  - κ·Έλ¦¬κ³  λ²νΌμ λλ₯΄μλ§μ μ€νΌλκ° μ€νλμ΄μ κΈ°μ‘΄μ νλ©΄ μ ν μκ°μ΄ μ€λ κ±Έλ¦¬λ λ¨μ λ ν¨κ» λ³΄μλλ€.

- /courses?view=Grid -> /courses?view=List λλ₯΄κ³  λ€λ‘κ°κΈ° λ²νΌμ λλ₯΄λ©΄ μ΄μ  νμ΄μ§λ‘ μ΄λνμ§ μκ³  /courses?view=List -> /courses?view=Gird μ΄νμ μ΄μ  νμ΄μ§λ‘ μ΄λνλ λ¬Έμ λ₯Ό ν΄κ²°
  - κΈ°μ‘΄ router.pushλ₯Ό μ¬μ©νλ©΄ urlμ΄ λ³κ²½ λ  λ λ§λ€ History(λΈλΌμ°μ  μΈμ κΈ°λ‘) Stackμ μμ΄κ² λμ΄ 'λ€λ‘κ°κΈ°'λ₯Ό λλ μ λ viewκ° λ³κ²½λ λ΄μ­μ΄ λ€ λ°μλλ€.
  - router.replaceλ₯Ό μ¬μ©νμ κ²½μ° urlμ λ³κ²½λμ§λ§ History stackμλ λ°μλμ§ μμμ λ€λ‘κ°κΈ°λ₯Ό λλ μ λ, κ°μ νμ΄μ§μ μ κ·ΌνκΈ° μ μ νμ΄μ§λ‘ λ°λ‘ μ΄λνλ€.
- selected-list-view λΆλΆμ css μ½λλ₯Ό GlobalStyle.cssκ° μλ selected-list-viewμ μ¬μ©νκ³  μλ λ΄λΆ μ»΄ν¬λνΈμ css μ½λλ₯Ό μμ±

  - getSelectedStyle ν¨μμ κΈ°μ‘΄ selected-list-view css μ½λλ₯Ό μ μ₯νμ¬, λ²νΌμ΄ μ νλμμ λ ν¨μλ₯Ό νΈμΆνμ¬ λ°μ΄ν°λ₯Ό λΆλ¬μ€κ² νλ€.

    ```
    const getSelectedStyle = () => `
      background: #1dc078 !important;
      border-color: transparent !important;
      color: white;

      &:hover {
        background: #1bb571 !important;
        border-color: transparent !important;
        color: white;
      }
    `;

    const ListViewBtn = styled.button<ListViewProps>`
      ${(props) => (props.isSelected ? getSelectedStyle() : '')}
      ...
    `;
    ```

  - μ°Έκ³ λ‘ `` const selected style = `background: #1dc078;...`; `` μ΄λ κ² μμλ‘ css μ½λλ₯Ό μ μΈν  μλ μμμ§λ§ κΈ°μ‘΄ styled-components μ½λμ ν·κ°λ¦΄ μ μλ€κ³  μκ°νμ¬ ν¨μλ‘ μ μΈνλ€.

## μμΌλ‘ μ§νν  μμ

- κ° μ‘°κ±΄ μ ν λ²νΌ λΆλΆμ μ»΄ν¬λνΈλ‘ λΆλ¦¬ν  λ, μΏΌλ¦¬μ€νΈλ§ μ λ¬ λ¬Έμ μ λν΄ κ³ λ―Όν ν κ°μ λ¦¬μ€νΈ μ€νμΌ μ ν λ²νΌμ λ°λ‘ μ»΄ν¬λνΈ λΆλ¦¬νκΈ°
- λΈλΌμ°μ  λλΉμ λ°λΌ λ³κ²½λλ λ³μ  ν¬κΈ°μ λ§μΆμ΄ λ±λ‘λ λ¦¬λ·°μ κΈμ λνλ΄λ λΆλΆλ ν¬κΈ° μ‘°μ νκΈ°
- μ λ ¬μ λ²νΌ κ΅¬ννκΈ°

</details>

<details>
<summary>2021.10.13, 20 ~ 22(λν)</summary>

## κ΅¬νν κ²

- μ λ ¬μ μ ν λ²νΌ λμμΈ λ° viewλ₯Ό μ νν κ°κ³Ό ν¨κ» μ λ ¬μ μ ν κ°μ΄ URL μΏΌλ¦¬μ λ°μλλλ‘ κ΅¬ν

  - μ λ ¬μμ μ ννμ λ urlλ‘ λνλ΄λ©΄ λ€μκ³Ό κ°λ€.

    ```
    http://localhost:3000/courses?order=popular
    ```

    - orderμ μ λ¬ν  μ μλ κ°

      | order κ°  | μ­ν      |
      | --------- | -------- |
      | recommend | μΆμ²μ   |
      | popular   | μΈκΈ°μ   |
      | recent    | μ΅μ μ   |
      | rating    | νμ μ   |
      | famous    | νμμμ |

  - viewμ orderλ₯Ό λμμ λνλ΄κ² ν  μ μμΌλ©° orderλ popularμ΄λ viewκ° Grid μΌ λ, viewλ₯Ό Listλ‘ λ³κ²½νλ©΄ orderκ°μ popularλ‘ κ³μ μ μ§κ° λκ³ , viewκ°λ§ Listλ‘ λ³κ²½λλ€. λ°λλ‘ orderκ°λ§ λ³κ²½νλ€κ³  ν΄λ view κ°μ μ μ§λκ³ , orderκ°λ§ λ°λλ€.
    viewμ orderλ₯Ό ν¨κ» url μΏΌλ¦¬μ λ°μνλ©΄ λ€μκ³Ό κ°λ€.
    ```
    http://localhost:3000/courses?view=Grid&order=popular
    ```

- κ²μμμ μΏΌλ¦¬λ‘ μ λ¬ λ°μ λ°μ΄ν°λ₯Ό μλ²μͺ½μΌλ‘ μ μ‘μ΄ κ°λ₯νλλ‘ μ½λ μΆκ° μμ±
  - κ²μ κ΄λ ¨ APIκ° λ§λ€μ΄μ§κΈ° μ κΉμ§λ λλ―Έλ°μ΄ν° νμ©

## viewλ order λ²νΌμ λλ₯Ό λλ§λ€ μ¦κ°μ μΌλ‘ urlμ λ°μμ΄ λμ§ μλ λ¬Έμ  ν΄κ²°

- **λ¬Έμ  μν©**

  - view λ²νΌμ΄λ order λ²νΌμ κ°κ° λ°λ‘ μ΄λ κ² `http://localhost:3000/courses?view=Grid`, `http://localhost:3000/courses?order=popular` λνλ  λλ λ¬Έμ κ° μμλ€.

  - κ·Όλ° `http://localhost:3000/courses?view=Grid&order=popular` μ΄λ κ² κ°μ΄ κ΅¬ννλ €κ³  νλκΉ List λ²νΌμ λλ μ λ urlμ Listκ° μ¦κ°μ μΌλ‘ λ³κ²½λμ§ μκ³ , λ€μ Grid λ²νΌμ λλ μ λ `http://localhost:3000/courses?view=List&order=popular` λ‘ λ€λ¦κ² List κ°μΌλ‘ λ³κ²½μ΄ λλ λ¬Έμ κ° μμλ€.

- **λ¬Έμ κ° λ°μν μ΄μ **

  - `useState`λ‘ viewμ order κ°μ λ°κΏ¨μ λ, λκΈ°μ μΌλ‘ urlμ μ¦κ° κ°μ΄ λ°μλμ΄ λ°λμ§ μμλ€.

- **μλν ν΄κ²° λ°©λ²**

  - useEffectλ₯Ό ν΅ν΄ λ°κΎΌ κ°μ΄ λ°λ‘ λ°μλκ² ν΄μ `router.replace`λ‘ urlμ΄ μ΄λλκ²λ νλ€.

  - νμ§λ§ μ²μ λ‘λ© ν  λ useEffectκ° μ€νμ΄ λλ€λ³΄λ, `router.replace` λλ¬Έμ λΆνμνκ² μ²μ νμ΄μ§λ₯Ό λ‘λ ν  λλ§λ€ url μ΄λμ΄ λ°μνλ€. κ·Έλμ μ΄ λ°©λ²μΌλ‘λ λ¬Έμ λ₯Ό ν΄κ²°νμ§ λͺ»νλ€.

- **μ΅μ’ ν΄κ²° λ°©λ²**

  - `useState`λ‘ viewμ order κ°μ μ μ₯νκ³  λ³κ²½νλ κ² λμ μ, `useRef`λ₯Ό μ¬μ©ν΄μ viewμ order κ°μ΄ μ¦κ°μ μΌλ‘ λ°λκ² νλ€.
  - μλ ν΄κ²° λ°©λ²μ redux-saga μ½λ μΆκ° μ μ κ΅¬νν κ²μ΄λΌ μ΅μ’μ μΌλ‘ κ΅¬νλ μ½λμ μ°¨μ΄κ° μλ€.

  1. `useState`λ‘ μ μλ queryVIewμ queryOrderλ₯Ό `useRef`λ‘ λ€ λ³κ²½μμΌμ€λ€.

  ```jsx
  const queryOrder = (useRef < string) | (null > '');
  const queryView = (useRef < string) | (null > 'Grid');
  ```

  2.  κ·Έλ¦¬κ³  κΈ°μ‘΄ useEffectμμ μλμ μ½λμ κ°μ΄ setQueryViewλ‘ κ°μ λ³κ²½μν€λ λΆλΆμ `queryView.current = view`λ‘, setQueryOrderλ `queryOrder.current = order`λ‘ λ³κ²½ν΄μ€λ€.

      βλ³κ²½ μ 

      ```jsx
      useEffect(() => {
          ...
          if (view) setQueryView(view);
          if (order) setQueryOrder(order);

          dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
        }, []);
      ```

      βλ³κ²½ ν

      ```jsx
      useEffect(() => {
          ...
          if (view) queryView.current = view;
          if (order) queryOrder.current = order;

          dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
        }, []);
      ```

  3.  μ΄ μ½λ λΏλ§ μλλΌ setQueryViewλ‘ λμ΄ μλ λΆλΆμ μ λΆ μμ κ°μ΄ λ°κΏμ€λ€.

  4.  κ·Έλ¦¬κ³  `useRef` ν΅ν΄μ queryListλ₯Ό λΉ κ°μ²΄λ‘ μ μΈνμ¬ viewλ order λ²νΌμ΄ μ νλ  λ κ°μ μ μ₯νλ€. κ·Έλ¦¬κ³  `router.replace`λ‘ query κ°μ΄ μ λ¬λ  λ queryListμ μ μ₯λ κ°μ μ μ₯νλλ‘ νλ€.
      <<<<<<< HEAD

           μλλ view λ²νΌμ μ ννμ λ μ¬μ©λλ handleViewClick μ½λμ μμ΄λ€.

           ```jsx
           const queryList = useRef < queryListProps > {};
           ```

           ```jsx
           const handleViewClick = useCallback(
             (value: string) => {
               // μ νν λ²νΌμ΄ μ΄λ―Έ μ νλμ΄ μλ κ²½μ° ifλ¬Έ μλ μ½λ μ€ν μν¨
               if (queryView.current === value) {
                 return;
               }

               queryList.current.view = value;

               router.replace({
                 pathname: '/courses',
                 query: queryList.current,
               });

               // view λ²νΌ ν΄λ¦­ μ λ§€λ² μ¬μμ²­ νλ κ² κ³ λ―ΌνκΈ°
               // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
               queryView.current = value;
             },
             [queryView, router]
           );
           ```

  5.  # κ·Έλ¦¬κ³  `useRef` ν΅ν΄μ queryListλ₯Ό λΉ κ°μ²΄λ‘ μ μΈνμ¬ viewλ order λ²νΌμ΄ μ νλ  λ κ°μ μ μ₯νλ€. κ·Έλ¦¬κ³  `router.replace`λ‘ query κ°μ΄ μ λ¬λ  λ queryListμ μ μ₯λ κ°μ μ μ₯νλλ‘ νλ€.

      > > > > > > > c3cce09f9fc7ac27d585f55213399a3be8d785f9

           μλλ view λ²νΌμ μ ννμ λ μ¬μ©λλ handleListViewClick μ½λμ μμ΄λ€.

           ```jsx
           const queryList = useRef < queryListProps > {};
           ```

           ```jsx
           const handleListViewClick = useCallback(
             (value: string) => {
               // μ νν λ²νΌμ΄ μ΄λ―Έ μ νλμ΄ μλ κ²½μ° ifλ¬Έ μλ μ½λ μ€ν μν¨
               if (queryView.current === value) {
                 return;
               }

               queryList.current.view = value;

               router.replace({
                 pathname: '/courses',
                 query: queryList.current,
               });

               // view λ²νΌ ν΄λ¦­ μ λ§€λ² μ¬μμ²­ νλ κ² κ³ λ―ΌνκΈ°
               // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
               queryView.current = value;
             },
             [queryView, router]
           );
           ```

  6.  μ΄λ° μμΌλ‘ μ½λλ₯Ό λ°κΏμ£Όλ©΄ urlμ£Όμκ° [http://localhost:3000/courses?view=Grid&order=popular](http://localhost:3000/courses?view=Grid&order=popular) μμ λ, viewλ₯Ό List λ²νΌμΌλ‘ λλ¬μ£Όκ² λλ©΄ [http://localhost:3000/courses?view=List&order=popular](http://localhost:3000/courses?view=List&order=popularλ‘) λ‘ view λΆλΆλ§ λ°λκ² λλ€. order λ²νΌλ λ§μ°¬κ°μ§μ΄λ€.

## κΈ°μ‘΄ μ½λμμ μμ μ¬ν­

- reducers/lecture.tsxμμ `loadLectureLoading: true`μμ `loadLectureLoading: false`λ‘ λ³κ²½
  - μ²μμ νμ΄μ§λ₯Ό λ‘λν  λλ LOAD_ALL_LECTURES_REQUESTλ₯Ό μ¬μ©νκ³ , κ²μμ ν  κ²½μ°μλ SEARCH_LECTURES_REQUESTκ° μ€νλκ² ν¨.
  - μ΄μ λ°λΌ λ‘λ© μ€νΌλλ₯Ό μ€νν  λλ loadLectureLoading λΏλ§μλλΌ κ²μμ ν  κ²½μ°μ μ¬μ©λλ searchLecturesLoadingμ λ°λ‘ μΆκ°νκ² λ¨.
  - κ·Έλμ λ‘λ© μ€νΌλλ₯Ό λΆλ¬μ¬ λ μ¬μ©νλ μ‘°κ±΄λ¬Έμ `loadLectureLoading || searchLecturesLoading`λ‘ μμ ν¨.
  - νμ§λ§ loadLectureLoading μ΄κΈ°κ°μ΄ trueμμ λ°λΌ LOAD_ALL_LECTURES_REQUESTλ₯Ό μμ²­νμ§ μμλ λ‘λ© μ€νΌλκ° μ€νλλ λ¬Έμ κ° λ°μν¨.
  - λμκ² λ°μν λ¬Έμ λ SEARCH_LECTURES_REQUESTλ₯Ό μμ²­ ν SUCCESSκ° λμ΄ searchLecturesLoadingκ° falseλ‘ λ°λμ΄λ loadLectureLoadingκ° κ³μ trueλΌμ `loadLectureLoading || searchLecturesLoading` μ‘°κ±΄λ¬Έμ true λ§ μΆλ ₯μ΄ λκ³ , λ‘λ© μ€νΌλκ° λ¬΄νν μ€νλλ λ¬Έμ κ° λ°μν¨.
  - κ·Έλμ μ΄ λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ `loadLectureLoading: false`λ‘ λ³κ²½ν¨.

## μ§ν λ³΄λ₯ μμ

- μλ κ°μ λ¦¬μ€νΈ μ€νμΌ μ ν λ²νΌ(view)κ³Ό μ λ ¬μ μ ν λ²νΌ(order)λΆλΆμ λ°λ‘ μ»΄ν¬λνΈ λΆλ¦¬
  - κΈ°μ‘΄ `useState`λ₯Ό μ¬μ©ν΄μ μΏΌλ¦¬λ₯Ό λ³κ²½νλ λΆλΆμ `useRef`λ‘ λ°κΎΈλ©΄μ μ΅μ νλ μλΉ λΆλΆ λμ΄ μ»΄ν¬λνΈ λΆλ¦¬μ μ΄μ μ΄ λ³΄μ΄μ§ μλλ€.
  - λ§μ½μ μ»΄ν¬λνΈ λΆλ¦¬λ₯Ό νμ κ²½μ°, μΏΌλ¦¬λ₯Ό λ³κ²½ν΄μΌ νκΈ° λλ¬Έμ λΆλͺ¨ μ»΄ν¬λνΈμμ μμ μ»΄ν¬λνΈ(ex. κ²μ κ΄λ ¨ λ²νΌ)μμ λ³κ²½λ κ°μ λ°μμμΌ νλλ° μ΄ κ³Όμ μμ `useRef` μ¬μ©μΌλ‘ μΈν΄ μ±λ₯ μ΅μ ν νμμ±λ μ€μ΄λ€μ΄μ κ°λμ±μ λν λΆνΈν¨μ κ°μνκ³  λΆλ¦¬ν  μ΄μ κ° μλ€.
  - νλμ μ»΄ν¬λνΈμμ λ³κ²½λλ κ°λ€μ μ΅λν κ°μ΄ κ΄λ¦¬νλκ² ν¨μ¨μ μ΄λΌ μκ°λμ΄ λΆλ¦¬ μμμ μΌλ¨ λ³΄λ₯νκ² λμλ€.

## μμΌλ‘ μ§νν  μμ

- κΈ°μ  κ²μ λΆλΆ κ΅¬ννκΈ°
- κ²μ κ΄λ ¨ API λ¬Έμ μμ±νκΈ°

</details>

<details>
<summary>2021.10.12~13, 16(Tony), 28, 30</summary>

### tinyMCE μ€μΉ

npm install --save @tinymce/tinymce-react
npm i tinymce

- νμμ€ν¬λ¦½νΈμμ tinymceλ₯Ό νμμΌλ‘ μ¬μ©νκΈ° μν΄ μ€μΉ
- μλ κΈ°λ³Έμ μΌλ‘ @tinymce/tinymce-react λ§ μ€μΉν΄λ κ°μ΄ μ€μΉλλ κ² κ°μ§λ§ κ·Έλ΄ κ²½μ° package.jsonμ μΆκ°κ° μλμ΄μμ΄μ νμμ¬μ© λΆκ°λ₯

### .env νμΌ μμ±, gitignoreμ μΆκ°

- [.env νμΌ λ΄μ©(λ©€λ²κ³΅κ°)](https://www.notion.so/00bd4ff4b0c64c16862efeba772417e4?v=213923c71e3141778c982b4f0adb72c7&p=c39a63b09193487dad27eb1fc34e65e9)
- νκ²½λ³μ μμ  : NEXT_PUBLIC_TINYMCE_KEY
  - https://cpro95.tistory.com/464

### λ―Έλ¦¬ μμ±λ HTMLμ νμ νκΈ°

- Editorμ initialValueμμ±μ μλ²μμ λ°μ html stringμ λ£μ΄μ£Όλ©΄ λλ€

### μ¬μ§μ μ΄λ»κ² μλ‘λνκ³  μ μ‘ν κΉ?

- [μ΄λ―Έμ§ νμΌ μλ‘λ λΆμ1](https://velog.io/@gth1123/WYSIWYG-%EC%9D%B4%EB%AF%B8%EC%A7%80%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C)

### κ° propμ λν΄ μμλ³΄κΈ°

### μλν°μμ λ²νΌλ€(μ΄λ―Έμ§ μΆκ° λ²νΌ λ±)μ μ΄λ»κ² μ»€μ€ννλμ§ μμλ³΄κΈ°

### μ μ‘ν  λ

#### μ°Έκ³  λ¬Έν

- [tinyMCE React integration κ³΅μλ¬Έμ](https://www.tiny.cloud/docs/integrations/react/#tinymcereactintegrationquickstartguide)
- https://www.npmjs.com/package/@tinymce/tinymce-react

### image upload

- https://codepen.io/pen/?&prefill_data_id=3a898cfe-8e09-42a7-ae28-ee8d7c70a540
- https://www.tiny.cloud/docs/plugins/opensource/image/#

### WIKI μΆκ° λ³΄μνκΈ°

- [ ] μ΄λ―Έμ§ μλ‘λ κ΄λ ¨
  - [ ] νμΌ λ³ν κ³Όμ μ λν΄ μμΈν μ λ¦¬νκΈ°
    - [ ] base64, blob, file μ°¨μ΄ νμνκΈ°
- [x] μλ²λ‘ λ°μμ λ€μ΄μ€λ λ°μ΄ν° νμΈν΄λ³΄κΈ°

### μ€κ³ λ―Έμ€

- CourseLayoutμμ μ²μμ λͺ¨λ  λ°μ΄ν°λ₯Ό κ°μ Έμ€κ² νλλ° μ΄λ¬λ©΄ μλ  κ² κ°λ€
- νμ΄μ§ λ§λ€ λͺ¨λ  λ°μ΄ν°λ₯Ό λ€ λΆλ¬μ€λ λΆνμν μμ²­μ΄ λ°μνλ€
- CourseLayoutμμ  κ°μ μ λ³΄ / μμΈ μκ° / ... λ± μ΄λ€ κ²μ΄ λ€ μλ ₯μ΄ λ μνμ΄κ³  μ΄λ€ κ²μ΄ μλ μνμΈμ§ νμνλ APIκ° μμ΄μΌ λ  κ² κ°λ€

  - κ·Έλ¦¬κ³  κ° νμ΄μ§μμ κ°νμ΄μ§μ νμν λ°μ΄ν°λ₯Ό κ°κ° μμ²­ν΄μΌλ  κ² κ°λ€

- [ ] CourseLayoutμμ λ°μ΄ν° μμ²­ νλ λΆλΆ λ¦¬ν©ν°λ§ νκΈ°
  - λ€μ PRμμ μ§νν  μμ 

## νμ΄ νλ‘κ·Έλλ°

- [x] μλ²λ‘ μ μ‘ν  λ id λ³΄λ΄μ£Όλ μ½λ μΆκ°
- [x] μ μ‘ μ€ν¨ μ μλμ°½ λμ°κΈ°

</details>

<details>
<summary>2021.11.2, 8(λν)</summary>

## μμ ν μ¬ν­

- addView λΆλΆ μ½λμμ url μΏΌλ¦¬ μ€νΈλ§μ viewκ° μΆκ°λ  λμ κ·Έλ μ§ μμ λμ μ‘°κ±΄μ λ€μ μκ°ν΄μ μ½λ μμ 
- μ΄ν΄κ° μ½κ² λμ§ μλ λΆλΆμ λν΄ μ£Όμ μΆκ°
- handleOrderChangeμ eμ React.ChangeEventHandler νμ μ μ ν e.target.valueμ target λΆλΆμ Property 'target' does not exist on type 'ChangeEventHandler<HTMLSelectElement>'. μλ¬λλ λΆλΆμ ν λλμ΄ μλ €μ£Όμ  λ°©λ²μ ν΅ν΄ ν΄κ²°

## viewλ order λ²νΌ κΈ°λ₯ μ΄μ© ν, μλ¨ λ©λ΄μμ 'κ°μ'λ₯Ό λ€μ λλ μ λ orderμ viewμ κ°μ΄ μ¬μ ν μ μ§λκ³  μλ λ¬Έμ  ν΄κ²°

**λ¬Έμ  μν©**

viewλ order λ²νΌ κΈ°λ₯μ μ΄μ©ν΄μ viewμλ List κ°μ΄ orderμλ recommand κ°μ΄ μλ ₯λμ΄μλ€κ³  ν  λ, μλ¨ λ©λ΄μμ λ€μ 'κ°μ'λ₯Ό λλ¬μ κ°μ νμ΄μ§λ₯Ό λΆλ¬μ€λ©΄ μ΄μ μ μλ ₯νλ κ°λ€μ΄ μ μ§λμ΄ μλ λͺ¨μ΅μ λ³Ό μ μλ€.

μλ₯Ό λ€λ©΄, μλ 'κ°μ'λ₯Ό λλ μ λ μ²μ νμ΄μ§κ° λ‘λ λμμ λλ viewκ° Gridκ°μ΄μ΄μΌν΄μ Grid μνμ κ°μ μΉ΄λ μ λ ¬μ λ³΄μ¬μ€μΌνλλ°, viewμ μ΄μ μ λλ λ κ°μΈ Listκ° μ μ₯λμ΄ μμ΄μ List μ€νμΌμ κ°μ μΉ΄λ μ λ ¬μ λ³΄μ¬μ€λ€.

**λ¬Έμ κ° λ°μν μ΄μ **

viewμ orderλ useRefλ‘ μ μ₯λ κ°μ μ»΄ν¬λνΈκ° unmountλ  λ μ΄κΈ°νλ₯Ό μν€μ§ μμκΈ° λλ¬Έμ΄λ€.

**μλν ν΄κ²° λ°©λ² (1)**

μ²μμλ unmountλ₯Ό κ΅¬ννλ©΄ ν΄κ²°μ΄ λ  μ€ μμλ€. κ·Έλμ μλμ κ°μ μ½λλ₯Ό μΆκ°νλλ° νμ΄μ§λ₯Ό μμ λ²μ΄λμΌ μΈλ§μ΄νΈ λκ³  κ°μ΄ μ΄κΈ°νκ° λκ³ , κ·Έλ μ§ μμΌλ©΄ 'κ°μ' λ©λ΄λ₯Ό λλ¬λ λ¦¬λ λλ§λ§ λ  λΏ μΈλ§μ΄νΈ μνκ° λμ΄ κ°μ΄ μ΄κΈ°νκ° λμ§λ μμλ€.

**μλν ν΄κ²° λ°©λ² (2)**

HeaderLayout.tsxμμ `<Link href={href}>` λμ μ `router.push(href)`λ₯Ό μ¬μ©ν΄λ³΄κ³  next.js API λ¬Έμλ₯Ό μ°Έκ³ ν΄μ νΉμλ νλ λ§μμ Shallow μ΅μλ routerμ μΆκ°ν΄λ΄€μ§λ§ ν΄κ²°μ΄ λμ§ μμλ€.

viewλ order λ²νΌ κΈ°λ₯μ μ΄μ©ν΄μ viewμλ List κ°μ΄ orderμλ recommand κ°μ΄ μλ ₯λμ΄μλ€κ³  ν  λ, μλ¨ λ©λ΄μμ λ€μ 'κ°μ'λ₯Ό λλ¬μ κ°μ νμ΄μ§λ₯Ό λΆλ¬μ€λ©΄ μ΄μ μ μλ ₯νλ κ°λ€μ΄ μ μ§λμ΄ μλ λͺ¨μ΅μ λ³Ό μ μλ€.

μλ₯Ό λ€λ©΄, μλ 'κ°μ'λ₯Ό λλ μ λ μ²μ νμ΄μ§κ° λ‘λ λμμ λλ viewκ° Gridκ°μ΄μ΄μΌν΄μ Grid μνμ κ°μ μΉ΄λ μ λ ¬μ λ³΄μ¬μ€μΌνλλ°, viewμ μ΄μ μ λλ λ κ°μΈ Listκ° μ μ₯λμ΄ μμ΄μ List μ€νμΌμ κ°μ μΉ΄λ μ λ ¬μ λ³΄μ¬μ€λ€.

**λ¬Έμ κ° λ°μν μ΄μ **

viewμ orderλ useRefλ‘ μ μ₯λ κ°μ μ»΄ν¬λνΈκ° unmountλ  λ μ΄κΈ°νλ₯Ό μν€μ§ μμκΈ° λλ¬Έμ΄λ€.

**μλν ν΄κ²° λ°©λ² (1)**

μ²μμλ unmountλ₯Ό κ΅¬ννλ©΄ ν΄κ²°μ΄ λ  μ€ μμλ€. κ·Έλμ μλμ κ°μ μ½λλ₯Ό μΆκ°νλλ° νμ΄μ§λ₯Ό μμ λ²μ΄λμΌ μΈλ§μ΄νΈ λκ³  κ°μ΄ μ΄κΈ°νκ° λκ³ , κ·Έλ μ§ μμΌλ©΄ 'κ°μ' λ©λ΄λ₯Ό λλ¬λ λ¦¬λ λλ§λ§ λ  λΏ μΈλ§μ΄νΈ μνκ° λμ΄ κ°μ΄ μ΄κΈ°νκ° λμ§λ μμλ€.

**μλν ν΄κ²° λ°©λ² (2)**

HeaderLayout.tsxμμ `<Link href={href}>` λμ μ `router.push(href)`λ₯Ό μ¬μ©ν΄λ³΄κ³  next.js API λ¬Έμλ₯Ό μ°Έκ³ ν΄μ νΉμλ νλ λ§μμ Shallow μ΅μλ routerμ μΆκ°ν΄λ΄€μ§λ§ ν΄κ²°μ΄ λμ§ μμλ€.

**μ΅μ’ ν΄κ²° λ°©λ²**

λ¨Όμ  ν΄κ²°νκΈ° μ μ λ¦¬μ‘νΈλ‘ κ΅¬νν μ¬μ΄νΈ μ€ λΌνν ννμ΄μ§λ νν° κΈ°λ₯μ μ΄λ»κ² κ΅¬ννλμ§ μ΄ν΄λ΄€λ€. λΌννμμλ μΌλ¨ urlμ μΏΌλ¦¬ μ€νΈλ§μΌλ‘ νν°κ°μ λ°κ³  μμ§ μμλ€.

κ·Έλ¦¬κ³  λ΄κ° κ΅¬νν λ°©μμΈ useRefλ‘ μ νν νν° κ°μ μ μ₯νκ³  μλ κ² κ°μλ€. μλνλ©΄ λ€λ₯Έ νμ΄μ§λ‘ μ΄λνλ€κ° λ€λ‘κ°κΈ°λ‘ λ€μ 'νκ·Έκ²μ' νμ΄μ§λ‘ λμμ€λ©΄ μ΄μ μ μ ννλ νν°κ°λ€μ΄ μ μ§κ° λκ³  μκΈ° λλ¬Έμ΄λ€. μλ§λ μΈλ§μ΄νΈ μ²λ¦¬λ₯Ό ν΄μ£Όμ§ μμ κ² κ°λ€.

μΈνλ° λ°©μμ λ°λ₯΄λ©΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λλ λΆλ§ν¬λ₯Ό νλ κ²½μ°μ μ΄μ μ΄ μκ³ ,

λΌνν λ°©μμ λ°λ₯΄λ©΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λμ§ μμΌλ λΆλ§ν¬ μ¬μ©μ λΆκ°λ₯νμ§λ§, μ¬μ©μκ° λ©λ΄λ₯Ό λλ¬μ μλ‘ κ³ μΉ¨μ νλ €κ³  μλλ₯Ό νμ λ μ μ΄λ urlμ΄ λ°λμ§ μμΌλ μλ‘κ³ μΉ¨μ΄ λμ§ μλ κ΅¬λνκ³  μ¬μ©μκ° μ€μ€λ‘ νλ¨μ ν  μ μλ νκ²½μ΄λΌκ³  μκ°νλ€.

μ°λ¦¬λ μΌλ¨ κΈ°μ‘΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λ μνμμ λ©λ΄μ 'κ°μ'λ₯Ό λλ μ λ μΏΌλ¦¬ μ€νΈλ§ λΆλΆλ§ μμ΄μ§λ§ νμ΄μ§κ° μ΄κΈ°ν λμ§ μμΌλ μ¬μ©μ μΈ‘λ©΄μμλ μλ‘κ³ μΉ¨μ΄ λμ§ μλ ν΄λΉ νμ΄μ§μ λ¬Έμ κ° μλ€κ³  λλ κ²μ΄λ€.

κ·Έλ¦¬κ³  λ΄κ° κ΅¬νν λ°©μμΈ useRefλ‘ μ νν νν° κ°μ μ μ₯νκ³  μλ κ² κ°μλ€. μλνλ©΄ λ€λ₯Έ νμ΄μ§λ‘ μ΄λνλ€κ° λ€λ‘κ°κΈ°λ‘ λ€μ 'νκ·Έκ²μ' νμ΄μ§λ‘ λμμ€λ©΄ μ΄μ μ μ ννλ νν°κ°λ€μ΄ μ μ§κ° λκ³  μκΈ° λλ¬Έμ΄λ€. μλ§λ μΈλ§μ΄νΈ μ²λ¦¬λ₯Ό ν΄μ£Όμ§ μμ κ² κ°λ€.

μΈνλ° λ°©μμ λ°λ₯΄λ©΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λλ λΆλ§ν¬λ₯Ό νλ κ²½μ°μ μ΄μ μ΄ μκ³ ,

λΌνν λ°©μμ λ°λ₯΄λ©΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λμ§ μμΌλ λΆλ§ν¬ μ¬μ©μ λΆκ°λ₯νμ§λ§, μ¬μ©μκ° λ©λ΄λ₯Ό λλ¬μ μλ‘ κ³ μΉ¨μ νλ €κ³  μλλ₯Ό νμ λ μ μ΄λ urlμ΄ λ°λμ§ μμΌλ μλ‘κ³ μΉ¨μ΄ λμ§ μλ κ΅¬λνκ³  μ¬μ©μκ° μ€μ€λ‘ νλ¨μ ν  μ μλ νκ²½μ΄λΌκ³  μκ°νλ€.

μ°λ¦¬λ μΌλ¨ κΈ°μ‘΄ urlμ μΏΌλ¦¬ μ€νΈλ§μ΄ μΆκ°λ μνμμ λ©λ΄μ 'κ°μ'λ₯Ό λλ μ λ μΏΌλ¦¬ μ€νΈλ§ λΆλΆλ§ μμ΄μ§λ§ νμ΄μ§κ° μ΄κΈ°ν λμ§ μμΌλ μ¬μ©μ μΈ‘λ©΄μμλ μλ‘κ³ μΉ¨μ΄ λμ§ μλ ν΄λΉ νμ΄μ§μ λ¬Έμ κ° μλ€κ³  λλ κ²μ΄λ€.

μ΄λ κ² λ¬Έμ κ° λ°μνλ μ΄μ λ SPAμ λ¬Έμ μΈ κ² κ°κΈ°λ νκ³ , useRefλ₯Ό μ¬μ©ν΄μ κ·Έλ° κ² κ°λ€λ μκ°λ λ€μλ€. μΌλ¨μ ν λλκ³Ό μμνμ¬ λΌννμ²λΌ μ΄κΈ°ν λ²νΌμ μΆκ°νκΈ°λ‘ νλ€.

## μμΌλ‘ μ§νν  μμ

- κΈ°μ  κ²μ λΆλΆ κ΅¬ννκΈ°
</details>

<details>
<summary>2021.11.11 ~ 13(Tony) : Upgrade NextJS from 11 to 12</summary>

# Upgrading from 11 to 12

- https://nextjs.org/docs/upgrading#upgrading-from-11-to-12

### 1) npm i next@latest

- next.jsλ₯Ό μ΅μ  λ²μ (12.0.3)μΌλ‘ μλ°μ΄νΈ
- https://github.com/Ark-inflearn/inflearn-clone-front/wiki/Next.js-version-12

### 2)||4) npm audit fix

- dependenciesμ μ·¨μ½μ μ μλμΌλ‘ ν΄κ²°
- https://github.com/Ark-inflearn/inflearn-clone-front/wiki/npm-fund,-npm-audit-fix

### 3) npm install react@latest react-dom@latest

- νμ¬ react κ³΅μ release λ²μ  : 17.0.2 (μ΄λ―Έ μ΅μ μ΄μμ)

### 5) next.config.js

- SWC μ€μ 
- https://nextjs.org/docs/api-reference/next.config.js/introduction

#### 5-1) SWC replacing Terser for minification

- Terser : https://www.npmjs.com/package/terser
  - A JavaScript parser and mangler/compressor toolkit for ES6+.
- uglify-esλ λ μ΄μ μ μ§λ³΄μ λκ³  μμ§ μκ³ , uglify-jsλ ES6+ λ¬Έλ²μ μ§μνμ§ μμμ λ°κΎΌ κ² κ°λ€
  - https://github.com/vercel/next.js/issues/5021

```javascript
// next.config.js
module.exports = {
  swcMinify: true,
};
```

#### 5-2) κΈ°μ‘΄ .babelrc(Babel compiler) λ₯Ό μ¬μ©νμ§ μκ³  SWC(Rust compiler)λ₯Ό μ¬μ©νκΈ° μν λ³κ²½μ¬ν­

- styled-components κ΄λ ¨ μΈν
  - https://www.reddit.com/r/nextjs/comments/ql5y74/nextjs_12_and_styled_components/

```javascript
// next.config.js
module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
```

- `"displayName": true` λ devμμ default, productμμ  μλ³΄μ΄κ² λ¨
  - https://github.com/vercel/next.js/discussions/30174

#### material-ui

- μμ§ Rust compilerμμ μ§μνμ§ μλ κ² κ°μ(νμΈ νμ)
  - material-UIλ μ λ¨, μ€νλ € styled-componentsκ° λΆμμ  ν¨

## Update Next.js version 12

- μ£Όμ λ³κ²½ μ¬ν­
  - 1. λ¬μ€νΈ μ»΄νμΌλ¬
    - refreshμ build μκ° κ°μ
      - [x] refresh, build μκ° λΉκ΅
  - 2. λ―Έλ€μ¨μ΄
    - [x] λ―Έλ€μ¨μ΄ νμ€νΈ ν΄λ³΄κΈ°
  - 3. React18 λ²μ  μ§μ
  - 4. `<Image />` μ AVIF ν¬λ§· μ§μ
  - 5. Bot-aware ISR Fallback
  - 6. Native ES Modules Support
  - 7. URL Imports (alpha)
  - 8. React Server Components (alpha)

### 1. refresh, build μκ° λΉκ΅

- build time
  - 11λ²μ  : 1λΆ 50μ΄(λΉλμ κ±Έλ¦¬λ μ΄ μκ°)
  - 12λ²μ  : 1λΆ 38μ΄(λΉλμ κ±Έλ¦¬λ μ΄ μκ°)
- refresh time
  - 11λ²μ  : κ°μ λ§λ€κΈ° -> κ°μ μ λ³΄ : 5.41μ΄
  - 12λ²μ  : κ°μ λ§λ€κΈ° -> κ°μ μ λ³΄ : 3.16μ΄

#### 12.0.2 can't build react-hook-form

- https://github.com/react-hook-form/react-hook-form/discussions/6961
- https://github.com/react-hook-form/resolvers/issues/271
- 12.0.1 λ²μ μμ  μλ¬κ° μλλ€κ³  νλ λ²μ μ λ€μ΄μν€κ³  λΉλ ν¨
  - npm i next@12.0.1

#### λΉλ μ  μλ¬ μ‘κΈ° -> λμ€μ μ λΆ μμ ν΄μΌ λ¨

- typescript
  - μ μΈ ν μ¬μ©νμ§ μλ λ³μλ€ μ£Όμμ²λ¦¬
    - λλ¬΄ λ§μμ§ κ² κ°μμ tsconfigμ "noUnusedParameters" μ΅μ μ£Όμμ²λ¦¬
  - λΌμ΄λΈλ¬λ¦¬μμ λΆλ¬μμ μ¬μ©νμ§ μλ λ©μλ
    - tsconfigμ "noUnusedLocals" μ΅μ μ£Όμμ²λ¦¬
- redux
  - store, rootReducer μΈν λ°©λ² μμλ³΄κΈ°
  - @ts-nocheckλ‘ λ³΄λ₯
  - Minified Redux error #12; visit https://redux.js.org/Errors?code=12 for the full message or use the non-minified dev environment for full errors.
    - The slice reducer for key "" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
      - initialState μ΄κΈ°κ° undefined -> κ° μ§μ (0, '' λ±)
      - λλ¨Έμ§ undefined κ΄λ ¨ λ€ μμ°
        - [x] μμμ λ λλμ§ μ€νν΄λ³΄κΈ°
          - μμμ λ λλ κ±°μμ
      - reducers/index.tsμμ state = {} μ ={}λ₯Ό μ§μ μλλ° λ€μ λΆμ΄λκΉ λ¨
- eslintrc.jsμ μλν­λͺ© rule off
  - '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-this-in-sfc': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',

### 2. λ―Έλ€μ¨μ΄ μ¬μ© ν΄λ³΄κΈ°

- [x] κ°λ¨νκ² νμ€νΈ
  - course/[id] μ λ―Έλ€μ¨μ΄λ₯Ό λ§λ€κΈ°
  - idκ° 1μ΄ μλλ©΄ 404 νλ©΄μ λμ°κΈ°
    - 404 νλ©΄ μ»΄ν¬λνΈ νμ
    - \_middleware.ts μμ  λ¦¬μ‘νΈ μ»΄ν¬λνΈ λ¬Έλ²(jsx or tsx)λ₯Ό μ¬μ©ν  μ μμ
  - μλ²μͺ½ μ½λλΌκ³  μκ°νλ©΄ λ  κ² κ°λ€
    - console.logλ μλ²(node.js) ν°λ―Έλμ μ°ν
  - μμ§μ μΈμ  μ΄λ»κ² μ¨μΌν μ§ μ§μΌλ΄μΌκ² λ€
  - μμ ν MVC ν¨ν΄μ²λΌ μλ²μμ μ½λ©νλ λλμ΄λ€
- Next.js κ³΅μ μμ  μ½λ
  - https://github.com/vercel/examples/tree/main/edge-functions
- λ―Έλ€μ¨μ΄μμ redirectλ₯Ό ν΄λΉ λ―Έλ€μ¨μ΄κ° ν¬ν¨λ λΌμ°ν° ν΄λλ‘ λ³΄λ΄λ©΄ λ¬΄ν λ£¨νμ λΉ μ§

### 4. `<Image />` μ AVIF ν¬λ§· μ§μ

- https://nextjs.org/docs/api-reference/next/image
- λ€λ₯Έ λλ©μΈμ asset(image λ±)μ κ°μ Έμ¬ λ
  - https://nextjs.org/docs/messages/next-image-unconfigured-host
- Error: Image with src "https://cdn.inflearn.com/assets/brand/brand_logo.png" must use "width" and "height" properties or "layout='fill'" property.
  - Image νκ·Έλ λΆνΈνκ² ν­μ width, heightμ μ§μ ν΄μ€μΌ λ¨

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
};
```

- widthμ heightμ μ§μ ν  λ '80%'λ₯Ό μλ ₯κ°μ μ£Όλ©΄ 80pxλ‘ μΈμν¨
  - %λ₯Ό μ΄ν΄ λͺ» νλ κ² κ°μ
- `Image` νκ·Έλ κ±°μ μ¬μ© μ ν  κ² κ°μ

#### `<Link></Link>` λ htmlλ‘ λ³νμ μλλλ° κ°μΈμ Έμ μ΄λμ λ¨

- styleμ μ€ μ μμ
  - a νκ·Έλ₯Ό λ£κ³  κ·Έ μμ styleμ μ£Όλ©΄ λ¨

```javascript
const LogoLink = styled.a``;

<Link href="/">
  <LogoLink>
    <img src="https://cdn.inflearn.com/assets/brand/brand_logo.png" width="180px" alt="logo" />
  </LogoLink>
</Link>;
```

### 7. URL Imports (alpha) μ¬μ©ν΄λ³΄κΈ°

- https://nextjs.org/docs/api-reference/next.config.js/url-imports
- μ¬μ©ν  URL
  - `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`
- URL κ°μ Έμ€κΈ°κ° κ°μ§λλ©΄ Next.jsλ μκ²© λ¦¬μμ€λ₯Ό μΆμ νκΈ° μν΄ next.lock νμΌμ μμ±ν©λλ€. URL κ°μ Έμ€κΈ°λ μ€νλΌμΈμμ κ³μ μμν  μ μλλ‘ λ‘μ»¬λ‘ μΊμλ©λλ€.
- μ μλ¨ : testPage.tsx
  - next.lock ν΄λ μκΈ°κ³  κ·Έ μμ jsνμΌ λλ μ΄λ―Έμ§ νμΌ λ€μ΄μ¨κ±° λ³΄λ©΄ λ  κ²λ κ°μλ° μ μ§ λͺ¨λ₯΄κ² μλ¨

### 8. React Server components μ¬μ© ν΄λ³΄κΈ°

Error: Flag `experimental.concurrentFeatures` is required to be enabled along with `experimental.serverComponents`.

- serverComponentsλ₯Ό μ¬μ©νκΈ° μν΄μ  concurrentFeaturesλ trueλ‘ ν΄μ€μΌ νλ€

```javascript
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};
```

#### React 18 μ€μΉ

npm install react@alpha react-dom@alpha

```
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.8.0 || ^17.0.0" from @material-ui/core@4.12.2
npm ERR! node_modules/@material-ui/core
npm ERR!   peer @material-ui/core@"^4.0.0" from @material-ui/icons@4.11.2
npm ERR!   node_modules/@material-ui/icons
npm ERR!     @material-ui/icons@"^4.11.2" from the root project
npm ERR!   @material-ui/core@"^4.12.1" from the root project
```

- material UI μ dependency μ‘°κ±΄μ μν΄ μ€ν λΆκ°λ₯

![image](https://user-images.githubusercontent.com/58352248/141493885-7a9f15c8-6f0e-4311-92b6-4b18028856ff.png)

#### λ¬Έμ μ 1 : React 18λ²μ μ΄ νμνμ§λ§ material UIμ dependency μ‘°κ±΄κ³Ό λ§μ§ μμ μ€μΉ λΆκ°λ₯

-> React 18λ²μ  μ μ μΆμ λ° material UI λ²μ  μ¬λ¦° λ€ λ€μ μλν  μμ 

#### λ¬Έμ μ 2 : Typescriptμμ μμ§ μ§μμ΄ μλλ κ²μΌλ‘ λ³΄μ

- tsνμΌλ‘ λ§λ€ κ²½μ° jsx λ¬Έλ² μ¬μ© λΆκ°λ₯
  - index.tsx -> index.server.jsλ§ κ°λ₯ (index.server.ts : μλ¬)

## κ³ μ°°

- μ΄λ² next.jsλ₯Ό 12λ²μ μΌλ‘ μ¬λ¦¬κΈ° μν΄ λΉλλ₯Ό νλ©΄μ μ°λ¦¬ μ±μμ λΆμ‘±ν μ λ€μ λ§μ΄ μ°Ύμ μ μμλ€.
- κ·Έ λμ κΈ°μ λΆμ±λ₯Ό μμμλ κ²μ λν΄ μκ°ν  μ μλ μ’μ κΈ°νμλ€.
- 12λ²μ μμ build timeκ³Ό refresh timeμ μΈ‘μ νκΈ° μν΄ buildλ₯Ό νλ©΄μ λ°μνλ μ€λ₯λ€μ μΈμ§ν  μ μμλ€.
- λͺ¨λ  μ€λ₯λ₯Ό μ μμ μΌλ‘ ν΄κ²°νμ§ μμμ§λ§ νμ€νΈμ½λμ CI/CD μ΄ν λ¦¬ν©ν°λ§ νλ©΄μ μ‘°κΈμ© ν΄κ²°ν΄κ° μμ μ΄λ€.

### babel compilerλ₯Ό λ€μ μ¬μ©ν μ§ κ³ λ―Ό μ€

- styled componentλ inline style cssλ₯Ό κ°μ΄ μμ΄μ μΈ μ μμ(404.tsx)
  - temp ν΄λ μμ μλ .babelrcλ₯Ό κΊΌλ΄λ©΄ λ¨
- μΌλ¨ 12.1.0 μ΄μ λ²μ μ΄ λμ¬ λ κΉμ§ babel compilerλ₯Ό μ¬μ©νλ κ²μ΄ λμ κ² κ°μμ rust μ»΄νμΌλ¬μμ babel μ»΄νμΌλ¬λ‘ λλλ¦Ό

### inline css μ styled-components νΈν μλ¨

- https://github.com/Ark-inflearn/inflearn-clone-front/pull/110#issuecomment-967797484
  - `<div style={{ zIndex: 2, position: 'absolute' }}>` μ΄λ°μμΌλ‘
  - inline styleκ³Ό styled-componentsλ₯Ό κ°μ νμΌλ΄μ μμ±μ νλ©΄
  - rust μ»΄νμΌλ¬μμ styled-componentsλ λ¬΄μ

#### style jsx μ¬μ©ν΄λ³΄κΈ°(404μ»΄ν¬λνΈ)

- https://merrily-code.tistory.com/56
- κ·Έλ₯ styled-components μ°λκ² λμ κ² κ°λ€(λ³ μ°¨μ΄μλλ° propsλ₯Ό μ λ¬ν  μ μμ)
  - μλμμ± μ§μμ΄ μλ¨(extensionλ μλ λ―)
- inline cssμ λ§μ°¬κ°μ§λ‘ styled-componentsμ νΈν μλ¨

## μ λ¦¬κΈ

- https://github.com/Ark-inflearn/inflearn-clone-front/wiki/Next.js-12-%EC%A0%81%EC%9A%A9-%ED%9B%84%EA%B8%B0

</details>

<details>
<summary>2021.11.13(λν, ν λ)</summary>

## νμ΄ νλ‘κ·Έλλ°

- μμΈ μκ° μμ± ν μ μ₯ν  λ, μλ² λ¬Έμ  λ°μμΌλ‘ λνλλ alertλ₯Ό Material UIμ alertλ‘ λ³κ²½

</details>

<details>
<summary>2021.11.16 ~ 17(λν)</summary>

## κ΅¬νν κ²

- κΈ°μ  κ²μ λΆλΆμ UI/UX
  - κΈ°μ  νκ·Έλ₯Ό μ ννμ λμ μ νμ μ·¨μνμ λλ₯Ό κ΅¬ν
    μλ₯Ό λ€λ©΄, λ²νΌ νλμ© λλ μ λ λ§¨ μμ μΆκ°λκ³ , κΈ°μ‘΄μ λ²νΌμ λλ₯΄μ§ μμ λͺ©λ‘λ€ μ¬μ λ ¬ν΄μ μ νν λ²νΌμ μλ³΄μ΄κ² ν¨.
    λ°λλ‘ μ νμ μ·¨μνμ λλ κΈ°μ‘΄ μ νλ κΈ°μ  νκ·Έ λͺ©λ‘μμ μ μΈμν€κ³ , μ ννμ§ μμ νκ·Έ λͺ©λ‘μ μλ μμΉλ‘ λμκ°κ² ν¨.
  - μ ννμ§ μμ κΈ°μ  νκ·Έλ€μ μ²μμ 15κ°λ§ λ³΄μ΄κ² ν¨.
    λν κΈ°μ  νκ·Έλ₯Ό μ ννλλΌλ μ ννμ§ μμ κΈ°μ λ€μ 15κ°λ‘ κ³μ κ³ μ λμ΄ λ³΄μ΄κ² ν¨.
  - κΈ°μ  νκ·Έ λλ³΄κΈ°/μ κΈ° κ΅¬ν
  - κΈ°μ  κ²μ νΌμ μ΄κ³  λ«λ κΈ°λ₯ κ΅¬ν

## μμΌλ‘ μ§νν  μμ

- μ±λ₯ μ΅μ νλ₯Ό μν΄ κΈ°μ  κ²μ λΆλΆ μ»΄ν¬λνΈ λΆλ¦¬
- μ νν κΈ°μ λ€μ url μΏΌλ¦¬μ μΆκ°
- redux-saga λΆλΆμ κ΅¬ννμ¬ κΈ°μ  κ²μ μ μμλ‘ μλ² ν΅μ νλ κ² μ²λΌ λλ―Έ λ°μ΄ν° λ‘λνκΈ°
- λ²νΌ λμμΈ κ΅¬νν  λ μμμ μ μΈν font-size, margin λ±μ κ°μ΄ κ²ΉμΉλ κ²μ classλ‘ λΉΌμ μ€νμΌμ΄ μ μ©κ°λ₯νκ²λ νκΈ°

</details>

<details>
<summary>2021.11.21 ~ 22 login (Tony)</summary>

### λ‘κ·ΈμΈ μ°λ

- νμ¬ λ‘κ·ΈμΈ μ 200μΌλ‘ μλ΅μ΄ μ€μ§λ§ μλ²μμ λ³΄λΈ μΏ ν€λ₯Ό μ μ₯νμ§ λͺ» νκ³  μμ
  - SameSite: Lax

### Things to do

- [x] λ‘κ·ΈμΈ ν λ©μΈνμ΄μ§μμ μ°½ μλ«νλ νμ μμ 
- [ ] λ‘κ·ΈμΈ μΈμν΄μ ν€λ UI λ³κ²½
- [ ] λ‘κ·ΈμΈ μ¬λΆ λ¦¬λμ€μ μ μ₯
  - react-queryμμ λ‘μ»¬λ³μ κ΄λ¦¬νλ λ°©λ²μ μ°Ύμλ³΄λκ° λ¦¬λμ€λ‘ κ΄λ¦¬ν΄μΌ ν¨
  - μΌλ¨ μμλ‘ trueλ‘ μ€μ 

### λ‘κ·ΈμΈ μ μΏ ν€ λͺ» κ°μ Έμ€λ λ¬Έμ 

#### λλ©μΈμ΄ λ¬λΌμ μλ‘ withCredentialsμ trueλ‘ μ€μ ν΄μ€μΌν¨

```typescript
// utils/fetcher.ts
axios.defaults.withCredentials = true;

// redux/sagas/index.ts
axios.defaults.withCredentials = true;
```

#### SSRμμ μ€μ 

- [ ] μΏ ν€λ₯Ό λ¨Όμ  κ°μ Έμ€λ κ²μ μ€μ  ν μ΄νμ μ§νν  μμ 
  - [ ] httpsλ‘ λ°°ν¬λ₯Ό ν΄μΌ λ  κ² κ°μ

### λ°±μλ μ£Όμ λ³κ²½

```javascript
// config/config.js
export const backUrl = 'https://www.ark-inflearn.shop'; // κΈ°μ‘΄ : 'http://3.34.236.174';
```

### μ°Έκ³ 

- [λλ©μΈμ΄ λ€λ₯Ό λ cookie μ λ¬νκΈ°](https://velog.io/@gth1123/%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%B4-%EB%8B%A4%EB%A5%BC-%EB%95%8C-cookie-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0)

</details>

<details>
<summary>2021.11.28 (λν)</summary>

## κ΅¬νν κ²

- [κΈ°μ  κ²μ λΆλΆμμ μΆκ°λ‘ μ§νν  μμ](https://github.com/TEAM-ARK/inflearn-clone-front/issues/118)μμ μ±λ₯ μ΅μ νλ₯Ό μν΄ κΈ°μ  κ²μ λΆλΆ μ»΄ν¬λνΈ λΆλ¦¬ν¨.

## μμΌλ‘ μ§νν  μμ

- μΉ΄νκ³ λ¦¬ μ ν λΆλΆ UI κ΅¬ν
- κΈ°μ  κ²μ λΆλΆκ³Ό κ΄λ ¨νμ¬ μΆκ°λ‘ μ§νν  μμμ μ μ²΄μ μΈ UI λΆλΆ κ΅¬νμ΄ μλ£λ  λκΉμ§ λ³΄λ₯
</details>

<details>
<summary>2021.11.30 cookie λ¬Έμ  ν΄κ²°νκΈ°(ν λ, λν)</summary>

## νλ‘ νΈ νλ‘μ μ€μ 

- [x] package.json
  - μ μ§ λͺ¨λ₯΄κ² μλλ μ€
  - Next.jsμμ  μλ¨

```json
// package.json μ μλμ κ°μ΄ μΆκ°νλ κ²μ next.jsμμ  λμνμ§ μμ
"proxy" : "https://www.ark-inflearn.shop/"
```

## next.jsμμ νλ‘μ μ€μ νκΈ°

```javascript
// next.config.js μ μλμ κ°μ΄ νλ‘μ μλ² μ£Όμ μΆκ°
module.exports = {
  async rewrites() {
    return [
      {
        destination: 'https://www.ark-inflearn.shop/api/:path*',
        source: '/api/:path*',
      },
    ];
  },
};
```

# μ°Έκ³ 

- https://soulcactus.dev/react/set-next-proxy/

</details>
