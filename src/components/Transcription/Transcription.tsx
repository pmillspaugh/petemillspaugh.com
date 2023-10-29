import { ReactNode } from "react";
import styled from "styled-components";

const Transcription = ({ children }: { children: ReactNode }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: 16px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.codeBg};
  color: ${(p) => p.theme.codeColor};
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;

  p:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 1200px) {
    p {
      font-size: 0.875rem;
    }
  }
`;

export default Transcription;
