import { createGlobalStyle } from "styled-components";

// CSS reset adapted from Josh Comeau's awesome CSS-for-JS-devs course:
// https://courses.joshwcomeau.com/css-for-js
export const CSSReset = createGlobalStyle`
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin and padding
  */
  * {
    margin: 0;
  }

  ul {
    padding: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html, body, #__next {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  /*
    10. Remove all animations, transitions and smooth scroll for people that prefer not to see them
  */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
