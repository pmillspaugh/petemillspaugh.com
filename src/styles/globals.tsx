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

    /* Theme colors */
    --primary-bg: ${(p) => p.theme.primaryBg};
    --text-color: ${(p) => p.theme.textColor};
    --link-text-color: ${(p) => p.theme.linkTextColor};
    --link-text-color-hover: ${(p) => p.theme.linkTextColorHover};
    --date-text-color: ${(p) => p.theme.dateTextColor};
    --code-bg: ${(p) => p.theme.codeBg};
    --code-color: ${(p) => p.theme.codeColor};
    --blockquote-color: ${(p) => p.theme.blockquoteColor};
    --tag-border-color: ${(p) => p.theme.tagBorderColor};
    --tag-border-color-hover: ${(p) => p.theme.tagBorderColorHover};
    --popover-bg: ${(p) => p.theme.popoverBg};
    --popover-border-color: ${(p) => p.theme.popoverBorderColor};
    --switch-enabled-bg: ${(p) => p.theme.switchEnabledBg};
    --vt-logo-bg: ${(p) => p.theme.vtLogoBg};
    --vt-logo-color: ${(p) => p.theme.vtLogoColor};

    /* Animations */
    --base-timing: 200ms;
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
}
`;
