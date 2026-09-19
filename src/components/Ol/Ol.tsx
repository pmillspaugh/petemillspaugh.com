import { ReactNode } from "react";
import styled from "styled-components";

const Ol = ({ children }: { children: ReactNode }) => {
  return <StyledOl>{children}</StyledOl>;
};

const StyledOl = styled.ul`
  padding-left: 32px;
  margin-bottom: 16px;

  & > li {
    list-style-type: decimal;
    padding-left: 8px;
  }

  [data-footnotes] > & {
    padding-left: 0;
    counter-reset: footnote;

    & > li {
      list-style-type: none;
      padding-left: 0;
      counter-increment: footnote;
    }

    & > li > p:first-child::before {
      content: "[" counter(footnote) "]";
      display: inline-block;
      transform: translateY(-1px);
      font-family: var(--font-mono), monospace;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 2px 4px 1px;
      margin-right: 0.25em;
      border-radius: 4px;
      background-color: ${(p) => p.theme.codeBg};
      color: ${(p) => p.theme.codeColor};
      transition: all var(--base-timing) ease-in-out;

      @media (min-width: 1200px) {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    margin-bottom: 24px;
  }
`;

export default Ol;
