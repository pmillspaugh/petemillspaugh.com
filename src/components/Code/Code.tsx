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
`;

export default Code;
