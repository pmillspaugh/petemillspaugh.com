import { ReactNode } from "react";
import styled from "styled-components";

const Ul = ({ children }: { children: ReactNode }) => {
  return <StyledUl>{children}</StyledUl>;
};

const StyledUl = styled.ul`
  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`;

export default Ul;
