import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
  /* Color */
  --color-light-green : #27D68C;
  --color-dark-grey: #363636;
  --color-grey: #616161;
  --color-light-grey: #838383;
  --color-orange: #feb546;
  --color-yellow: #fdcc11;
  --color-blue: #175cbe;
  --color-light-pink: hsl(321, 63%, 90%);
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
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

ul {
  list-style: none;
}

.container {
  max-width: 1200px;
  padding: 0 10px;
  margin: auto;
}

.title {
  color: var(--color-dark-grey);
}
.slick-slide {
  display: inline-block;
}



`;

export default Global;
