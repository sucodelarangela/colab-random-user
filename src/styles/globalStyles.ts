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
    scrollbar-color: var(--purple) var(--black);
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

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(180deg, var(--black) 70%, var(--blue));
    background-attachment: fixed;
    background-repeat: no-repeat;
    margin-bottom: 8rem;
  }

  body::-webkit-scrollbar {
    background: var(--black);
    width: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background: var(--purple);
  }
  
  h2 {
    font: var(--heading-2);
  }
  
  h3 {
    font: var(--heading-3);
  }
  
  p {
    color: var(--dark-gray);
  }

  button {
    border: none;
    box-shadow: 0 0 16px var(--blue);
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 32px var(--blue);
      background: var(--blue);
    }
  }
  
  .loadBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--gray);
    border-radius: 8px;
    font: var(--heading-3);
    margin: 24px auto;
    width: fit-content;
    padding: 8px 16px;
    svg {
      margin-right: 8px;
    }
  }

  .backToTop {
    position: fixed;
    right: 2.5rem;
    bottom: 2.5rem;
    background: var(--black);
    border-radius: 50%;
    padding: 8px;
    svg {
      fill: var(--gray);
    }
  }
`;
