import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--opensans);
    color: inherit;
    text-decoration: none;
    transition: 0.3s;
    scrollbar-width: thin;
    scrollbar-color: inherit inherit;
  }
  
  :root {
    /* Fonts */
    --opensans: 'Open Sans', sans-serif;
    --heading-1: 700 2rem/2.5rem 'Open Sans', sans-serif;
    --heading-2: 700 1.5rem/36px 'Open Sans', sans-serif;
    --heading-3: 700 1rem/1.5 'Open Sans', sans-serif;
    --paragraph: 400 1rem/1.5rem 'Open Sans', sans-serif;

    /* Colors */
    --black: rgb(13, 21, 33);
    --blue: rgb(4, 27, 114);
    --dark-gray: rgb(110, 110, 110);
    --gray: rgb(249, 239, 251);
    --purple: rgb(128, 39, 189);
    --white: rgb(255, 255, 255);
  }

  body {
    background: linear-gradient(180deg, var(--black) 90%, var(--blue));
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  body::-webkit-scrollbar {
    background: inherit;
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background: inherit;
  }

  h2 {
    font: var(--heading-2);
  }

  h3 {
    font: var(--heading-3);
  }

  p {
    font: var(--paragraph);
    color: var(--dark-gray);
  }
`;
