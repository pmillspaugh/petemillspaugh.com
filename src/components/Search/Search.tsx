import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Dialog from "@/components/Dialog";

const Search = () => {
  // TODO: rm. Temporary for testing pagefind
  useEffect(() => {
    async function pagefinder() {
      // @ts-ignore
      const pagefind = await import("../../../public/pagefind/pagefind.js");
      console.log({ pagefind });
      await pagefind.init();
      const search = await pagefind.search("megabyte");
      console.log({ search });
    }
    pagefinder();
  });

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        (event.metaKey && event.key === "k") || // For macOS (Command+K)
        (event.ctrlKey && event.key === "k") // For Windows/Linux (Ctrl+K)
      ) {
        setDialogIsOpen(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Note: navigator.platform is deprecated, but fallback to isWindows=false is ok
  const isWindows =
    typeof navigator !== "undefined" &&
    navigator.platform.toLowerCase().includes("win");

  return (
    <Dialog
      open={dialogIsOpen}
      onOpenChange={() => setDialogIsOpen(!dialogIsOpen)}
      srTitle="Search and explore"
      srDescription="Find content by searching, or follow navigation links."
      trigger={
        <StyledTrigger>
          <div>Search / Explore</div>
          <StyledShortcut>
            <span>{isWindows ? "⌃" : "⌘"}</span>
            <span>K</span>
          </StyledShortcut>
        </StyledTrigger>
      }
      close={<button>Close</button>}
    >
      <>
        <label htmlFor="search">
          Search
          <input id="search" />
        </label>
        <nav>
          <ul>
            <li>
              <Link href="/garden">Garden</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
          </ul>
          {/* TODO: favorites section of suggested reading? */}
        </nav>
      </>
    </Dialog>
  );
};

const StyledTrigger = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  outline: 2px solid var(--gold);
  padding: 8px 16px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: 768px) {
    padding: 8px;
  }

  &:focus {
    outline: revert;
  }

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.linkTextColor};
    border-color: ${(p) => p.theme.linkTextColor};
  }
`;

const StyledShortcut = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
  }

  & > span {
    padding: 0px 4px;
    border: 1.5px solid ${(p) => p.theme.textColor};
    border-radius: 2px;
  }

  button:hover > & > span {
    border: 1.5px solid ${(p) => p.theme.linkTextColor};
  }
`;

export default Search;
