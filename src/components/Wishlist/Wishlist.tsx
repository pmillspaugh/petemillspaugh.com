import styled from "styled-components";

const Wishlist = () => {
  return (
    <>
      <StyledH1>Wishlist</StyledH1>
      <p>
        This is a collection of things I am interested to learn/try, in no
        particular order (and not exhaustive). I'll add, remove, and cross
        things off from time to time. I planted this in September 2023, so
        anything I worked with before that didn't make the cut.
      </p>
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
      </StyledUl>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-top: 16px;
`;

const StyledUl = styled.ul`
  margin-top: 16px;

  & > li {
    padding-bottom: 8px;
  }
`;

export default Wishlist;
