import styled from "styled-components";
import CommandBar from "@/components/CommandBar";

const SearchCta = () => {
  // Note: navigator.platform is deprecated, but fallback to isWindows=false is ok
  const isWindows =
    typeof navigator !== "undefined" &&
    navigator.platform.toLowerCase().includes("win");

  return (
    <CommandBar>
      <StyledTrigger>
        <div>Search / Explore</div>
        <StyledShortcut>
          <span>{isWindows ? "⌃" : "⌘"}</span>
          <span>K</span>
        </StyledShortcut>
      </StyledTrigger>
    </CommandBar>
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
  outline: 2px solid ${(p) => p.theme.tagBorderColor};
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

export default SearchCta;
