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
  background-color: var(--code-bg);
  color: var(--code-color);

  a > & {
    color: var(--link-text-color);
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0px 1.5px 0px var(--link-text-color);
  }

  a:hover > & {
    color: var(--link-text-color-hover);
    box-shadow: none;
  }

  @media (min-width: 1200px) {
    font-size: 0.9rem;
  }
`;

export default Code;
