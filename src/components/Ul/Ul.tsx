import { ReactNode } from "react";
import styled from "styled-components";

const Ul = ({ children }: { children: ReactNode }) => {
  return <StyledUl>{children}</StyledUl>;
};

const StyledUl = styled.ul`
  padding-left: 32px;
  margin-bottom: 16px;

  & > li {
    list-style-type: disc;
    padding-left: 8px;
  }

  blockquote > & {
    padding-left: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    margin-bottom: 24px;

    blockquote > & {
      padding-left: 16px;
      font-size: 1rem;
    }
  }
`;

export default Ul;
