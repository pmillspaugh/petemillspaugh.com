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
    --base-timing: 500ms;
    --fast-timing: 150ms;
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
    color: ${(p) => p.theme.linkTextColor};
    text-decoration-thickness: 1.5px;
    text-underline-offset: 0.125em;
    transition: all var(--fast-timing) ease-in-out;

    &:hover {
      text-decoration-color: ${(p) => p.theme.linkTextColorHover};
    }
  }

  /*
    THEME
  */
  html, body, #__next {
    color: ${(p) => p.theme.textColor};
    background-color: ${(p) => p.theme.primaryBg};
    transition: color var(--base-timing) ease-in-out, background-color var(--base-timing) ease-in-out;
  }

  /*
    OVERRIDES
  */

  /* Code Hike */
  code, .ch-editor-frame, .ch-codegroup, .ch-codeblock, .ch-code-scroll-parent {
    font-family: var(--font-mono), monospace;
    font-size: 0.75rem;
    text-decoration: none;
  }
  .ch-frame-title-bar {
    font-family: var(--font-open-sans), sans-serif;
    font-size: 0.75rem;
  }
  .ch-codegroup, .ch-codeblock {
    margin-top: 24px;
    margin-bottom: 36px;
  }
  .ch-code-scroll-parent, .ch-code-scroll-content {
    width: calc(100vw - 32px);
  }
`;
