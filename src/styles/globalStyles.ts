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
    --black: #0d1520;
    --blue: #041b72;
    --dark-gray: #6e6e6e;
    --gray: #f9effb;
    --purple: #8027bd;
    --white: #ffffff;
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
