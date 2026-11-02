import { ReactNode } from "react";
import styled from "styled-components";

const Blockquote = ({ children }: { children: ReactNode }) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};

const StyledBlockquote = styled.blockquote`
  font-size: 0.875rem;
  font-family: var(--font-open-sans);
  margin-bottom: 24px;
  padding-left: 16px;
  color: var(--blockquote-color);
  border-left: 3px solid var(--blockquote-color);

  p,
  ul {
    padding-bottom: 0px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 30px;

    p,
    ul {
      font-size: 1.1rem;
    }
  }
`;

export default Blockquote;
