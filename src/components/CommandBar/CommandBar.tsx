import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Dialog from "@/components/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const CommandBar = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

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
    >
      <>
        <VisuallyHidden>
          <label htmlFor="search">Search</label>
        </VisuallyHidden>
        <StyledInput
          id="search"
          ref={searchInputRef}
          placeholder="Search the garden"
        />
        <StyledNav>
          <ul>
            <li>
              <StyledNavLink href="/garden">Garden</StyledNavLink>
            </li>
            <li>
              <StyledNavLink href="/about">About</StyledNavLink>
            </li>
            <li>
              <StyledNavLink href="/wishlist">Wishlist</StyledNavLink>
            </li>
          </ul>
        </StyledNav>
        {/* TODO: favorites section of suggested reading? */}
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
    outline-offset: 4px;
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

const StyledInput = styled.input`
  width: calc(100% - 52px);
  background-color: var(--white);
  border: 2px solid var(--black);
  border-radius: 4px;
  padding: 8px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
`;

const StyledNav = styled.nav`
  padding: 16px 8px;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }
`;

const StyledNavLink = styled(Link)`
  font-weight: 700;
  box-shadow: none;
  display: block;
  outline-offset: 8px;
`;

export default CommandBar;
