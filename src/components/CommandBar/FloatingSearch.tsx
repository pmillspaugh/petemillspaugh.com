import { useRouter } from "next/router";
import styled from "styled-components";
import VisuallyHidden from "@/components/VisuallyHidden";
import CommandBar from "@/components/CommandBar";
import useIsWindowsOrFirefox from "@/hooks/useIsWindowsOrFirefox.hook";
import SearchIcon from "./SearchIcon";

const FloatingSearch = () => {
  const router = useRouter();
  const isWindowsOrFirefox = useIsWindowsOrFirefox();

  if (router.pathname === "/") return null;

  return (
    <CommandBar>
      <StyledTrigger>
        <VisuallyHidden>Search and explore</VisuallyHidden>
        <StyledShortcut>
          <div>Search</div>
          <span>{isWindowsOrFirefox ? "⌃" : "⌘"}</span>
          <span>K</span>
        </StyledShortcut>
        <StyledIconWrapper>
          <SearchIcon />
        </StyledIconWrapper>
      </StyledTrigger>
    </CommandBar>
  );
};

const StyledTrigger = styled.button`
  all: unset;

  position: fixed;
  bottom: 16px;
  right: 16px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-bg);
  border: 2px solid var(--text-color);
  border-radius: 4px;
  outline: 2px solid var(--tag-border-color);

  @media (min-width: 768px) {
    padding: 8px;
  }

  &:focus {
    outline: revert;
    outline-offset: 4px;
  }

  &:hover {
    cursor: pointer;
    color: var(--link-text-color);
    border-color: var(--link-text-color);
  }
`;

const StyledShortcut = styled.div`
  display: none;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
  }

  & > div {
    margin-right: 4px;
    padding-top: 2px;
  }

  & > span {
    padding: 0px 4px;
    border: 1.5px solid var(--text-color);
    border-radius: 2px;
  }

  button:hover > & > span {
    border: 1.5px solid var(--link-text-color);
  }
`;

const StyledIconWrapper = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

export default FloatingSearch;
