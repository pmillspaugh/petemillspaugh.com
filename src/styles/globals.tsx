import { createGlobalStyle } from "styled-components";
import { openSans, petrona } from "./fonts";
import { COLORS } from "./themes";

export const GlobalStyle = createGlobalStyle`
  /*
    CSS VARIABLES
  */

  :root {
    /* Fonts */
    --font-open-sans: ${openSans.style.fontFamily};
    --font-petrona: ${petrona.style.fontFamily};

    /* Colors */
    --white: ${COLORS.Frost};
    --blue: ${COLORS.Blue};
    --green: ${COLORS.Green};
    --dark-green: ${COLORS.DarkGreen};
    --charcoal: ${COLORS.Charcoal};
    --gold: ${COLORS.Gold};
    --aqua: ${COLORS.Aqua};

    /* Animations */
    --base-timing: 500ms;
  }

  /*
    LAYOUT
  */
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

  /*
    TYPOGRAPHY
  */
  html, body, #__next {
    font-family: var(--font-petrona), serif;

    ::selection {
      background-color: var(--gold);
      color: var(--dark-green);
    }
  }
  
  nav, button {
    font-family: var(--font-open-sans), sans-serif;
  }

  /*
    THEME
  */
  html, body, #__next {
    color: ${(p) => p.theme.textColor};
    background-color: ${(p) => p.theme.primaryBg};
    transition: all var(--base-timing) ease-in-out;
  }
  
  a {
    color: ${(p) => p.theme.linkTextColor};
    transition: all var(--base-timing) ease-in-out;

    &:hover {
      color: ${(p) => p.theme.linkTextColorHover};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
    color: ${(p) => p.theme.headingColor};
    transition: all var(--base-timing) ease-in-out;
  }
`;
