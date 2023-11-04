import styled from "styled-components";

const Wishlist = () => {
  return (
    <>
      <StyledH1>Wishlist</StyledH1>
      <StyledP>
        This is a collection of things I am interested to learn/try, in no
        particular order (and not exhaustive). I'll add, remove, and cross
        things off from time to time. I planted this in September 2023, so
        anything I worked with before then didn't make the cut.
      </StyledP>
      <StyledUl>
        <li>
          <a href="https://www.rust-lang.org/" target="_blank">
            Rust
          </a>
        </li>
        <li>
          <a href="https://bun.sh/" target="_blank">
            Bun
          </a>
        </li>
        <li>
          <a href="https://threejs.org/" target="_blank">
            Three.js
          </a>
        </li>
        <li>
          <a href="https://astro.build/" target="_blank">
            Astro
          </a>
        </li>
        <li>
          <a href="https://remix.run/" target="_blank">
            Remix
          </a>
        </li>
        <li>
          <a href="https://svelte.dev/" target="_blank">
            Svelte
          </a>
        </li>
        <li>
          <a href="https://playwright.dev/" target="_blank">
            Playwright
          </a>
        </li>
        <li>
          <a href="https://www.raspberrypi.com/" target="_blank">
            Raspberry Pi
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
        </li>
        <li>
          <a href="https://trpc.io/" target="_blank">
            tRPC
          </a>
        </li>
        <li>
          Mobile coding, e.g.{" "}
          <a href="https://replit.com/mobile" target="_blank">
            Replit
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
            target="_blank"
          >
            Web Components
          </a>
        </li>
      </StyledUl>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const StyledP = styled.p`
  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
`;

const StyledUl = styled.ul`
  margin-top: 16px;

  & > li {
    padding-bottom: 8px;
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;

    & > li {
      padding-bottom: 16px;
    }
  }
`;

export default Wishlist;
