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

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    margin-bottom: 24px;
  }
`;

export default Ol;
