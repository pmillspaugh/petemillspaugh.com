import { createGlobalStyle } from "styled-components";
import { openSans, petrona, jetbrainsMono } from "./fonts";
import { COLORS } from "./themes";

export const GlobalStyle = createGlobalStyle`
  /*
    CSS VARIABLES
  */

  :root {
    /* Fonts */
    --font-open-sans: ${openSans.style.fontFamily};
    --font-petrona: ${petrona.style.fontFamily};
    --font-mono: ${jetbrainsMono.style.fontFamily};

    /* Colors */
    --white: ${COLORS.Frost};
    --black: ${COLORS.Black};
    --green: ${COLORS.Green};
    --dark-green: ${COLORS.DarkGreen};
    --charcoal: ${COLORS.Charcoal};
    --gold: ${COLORS.Gold};
    --aqua: ${COLORS.Aqua};

    /* Animations */
    --base-timing: 150ms;
  }

  /*
    LAYOUT
  */
  html, body, #__next {
    height: 100%;
  }

  /*
    TYPOGRAPHY
  */
  html, body, #__next {
    font-family: var(--font-petrona), serif;

    ::selection {
      background-color: var(--green);
      color: var(--white);
    }
  }
  
  nav, button {
    font-family: var(--font-open-sans), sans-serif;
  }
  
  a {
    font-weight: 500;
    color: var(--link-text-color);
    text-decoration-thickness: 1.5px;
    text-underline-offset: 0.125em;

    &:hover {
      text-decoration-color: var(--link-text-color-hover);
    }
  }

  /*
    THEME
  */
  html {
    color: var(--text-color);
    background-color: var(--primary-bg);
  }
  
  /*
    OVERRIDES
  */

  /* Code Hike */
  code, .ch-editor-frame, .ch-codegroup, .ch-codeblock, .ch-code-scroll-parent {
    font-family: var(--font-mono), monospace;
    font-size: 0.75rem;
    text-decoration: none;

    @media (min-width: 1200px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  .ch-frame-title-bar {
    font-family: var(--font-open-sans), sans-serif;
    font-size: 0.75rem;

    @media (min-width: 1200px) {
      font-size: 1rem;
    }
  }
  .ch-codegroup, .ch-codeblock {
    margin-top: 24px;
    margin-bottom: 36px;
  }
  .ch-code-scroll-parent {
    width: 100% !important;
  }
  .ch-code-scroll-content {
    overflow: auto !important;
  }
`;
