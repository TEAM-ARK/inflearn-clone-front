import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
  /* Color */
  --color-light-green : #1dc078;
  --color-dark-grey: #363636;
  --color-smoky-white: #bdbdbd;
  --color-grey: #616161;
  --color-light-grey: #838383;
  --color-dark-white: #ebebeb;
  --color-orange: #feb546;
  --color-yellow: #fdcc11;
  --color-blue: #175cbe;
  --color-light-blue: #3498db;
  --color-midnight-blue: #333b3d;
  --color-light-pink: hsl(321, 63%, 90%);
  --color-red: #e74c3c;
}

/* Universal tags */
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
pre,
textarea,
ul {
  padding: 0;
  margin: 0;
}

body, button, input, select, textarea {
    font-family: Noto Sans KR,-apple-system,"system-ui",BlinkMacSystemFont,Apple SD Gothic Neo,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}

ul, li {
  list-style: none;
}

.container {
  max-width: 1280px;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
}

.title {
  color: var(--color-dark-grey);
}
.slick-slide {
  display: inline-block;
}

.selected-list-view {
  background: #1dc078 !important;
  border-color: transparent !important;
  color: white;
}

.selected-list-view:hover {
  background: #1bb571 !important;
  border-color: transparent !important;
  color: white;
}

.add-icon {
  @media screen and (max-width: 768px) {
    transform: scale(0.7);
  }
}

`;

export default Global;
