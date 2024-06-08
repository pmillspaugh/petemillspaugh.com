import Link from "next/link";
import styled from "styled-components";

const WISHLIST = [
  {
    name: "Rust",
    url: "https://www.rust-lang.org/",
    description: "",
    update: (
      <>
        writing Rust for my day job at{" "}
        <a href="https://membrane.io">Membrane</a>
      </>
    ),
  },
  {
    name: "Astro",
    url: "https://astro.build/",
    description: "",
    update: (
      <>
        using Astro Starlight for{" "}
        <a href="https://docs.membrane.io">docs.membrane.io</a>
      </>
    ),
  },
  { name: "Remix", url: "https://remix.run/", description: "" },
  { name: "Svelte", url: "https://svelte.dev/", description: "" },
  { name: "Playwright", url: "https://playwright.dev/", description: "" },
  { name: "Replit", url: "https://replit.com/mobile", description: "" },
  { name: "Bun", url: "https://bun.sh/", description: "" },
  {
    name: "Raspberry Pi",
    url: "https://www.raspberrypi.com/",
    description: "",
  },
  {
    name: "Three.js",
    url: "https://threejs.org/",
    description: "",
  },
  {
    name: "Web Components",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components",
    description: "",
  },
  {
    name: "Framer Motion",
    url: "https://www.framer.com/motion/",
    description: "",
    update: (
      <>
        used for <a href="https://weeksofyour.life">weeksofyour.life</a>
      </>
    ),
  },
  {
    name: "SQLite",
    url: "https://www.sqlite.org/index.html",
    description: "",
    update: (
      <>
        used in garden <Link href="/cultivating-emails">Clippings</Link>
      </>
    ),
  },
  {
    name: "Hono",
    url: "https://hono.dev/",
    description: "",
    update: (
      <>
        used in garden <Link href="/cultivating-emails">Clippings</Link>
      </>
    ),
  },
];

const Wishlist = () => {
  const alphabetizedWishlist = WISHLIST.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <StyledH1>Wishlist</StyledH1>
      <StyledP>
        This is an alphabetized collection of things I am interested to
        learn/try (not exhaustive). I'll add, remove, and cross things off from
        time to time. I planted this in September 2023, so anything I worked
        with before then didn't make the cut.
      </StyledP>

      {/* TODO: render a <detail> or accordion for each item with a description */}
      <StyledUl>
        {alphabetizedWishlist.map(({ name, url, description, update }) => {
          const link = <a href={url}>{name}</a>;

          return (
            <li key={name}>
              {update ? (
                <>
                  <del>{link}</del> <em>{update}</em>
                </>
              ) : (
                link
              )}
            </li>
          );
        })}
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
