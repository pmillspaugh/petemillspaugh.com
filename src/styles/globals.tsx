import { createGlobalStyle } from "styled-components";
import { openSans, petrona } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  /* LAYOUT */
  html, body, #__next {
    height: 100%;
  }

  h1 {
    font-size: 4rem;
    padding-bottom: 24px;
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 20px;
  }

  p {
    padding-bottom: 16px;
  }

  /* TYPOGRAPHY */
  html, body, #__next {
    --font-open-sans: ${openSans.style.fontFamily};
    --font-petrona: ${petrona.style.fontFamily};
  }

  html, body, #__next {
    font-family: var(--font-petrona), serif;
  }
  
  nav, button {
    font-family: var(--font-open-sans), sans-serif;
  }

  a {
    color: ${(p) => p.theme.linkTextColor};

    &:hover {
      color: ${(p) => p.theme.linkTextColorHover};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
    color: ${(p) => p.theme.headingColor};
  }

  p {
    color: ${(p) => p.theme.textColor};
  }
  
  /* COLOR */
  html, body, #__next {
    /* TODO: sync with themes.ts */
    --forrest-green: hsl(165, 41.94%, 24.31%);
    --white: hsl(209, 33%, 96%);
  }
`;
