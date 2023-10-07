import { ReactNode } from "react";
import styled from "styled-components";

const Code = ({ children }: { children: ReactNode }) => {
  return <StyledCode>{children}</StyledCode>;
};

const StyledCode = styled.code`
  display: inline-block;
  transform: translateY(-1px);
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 4px 1px 4px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.codeBg};
  color: ${(p) => p.theme.codeColor};
  transition: all var(--base-timing) ease-in-out;

  a > & {
    color: ${(p) => p.theme.linkTextColor};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 1.25px 0px ${(p) => p.theme.linkTextColor};
    transition: all var(--fast-timing) ease-in-out;
  }

  a:hover > & {
    color: ${(p) => p.theme.linkTextColorHover};
    box-shadow: none;
  }

  pre > & {
    display: block;
    width: calc(100vw - 32px);
    overflow-x: auto;
    margin-top: 24px;
    margin-bottom: 28px;
    padding: 16px;
  }

  @media (min-width: 592px) {
    pre > & {
      width: 100%;
    }
  }
`;

export default Code;
