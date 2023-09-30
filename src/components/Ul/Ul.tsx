import { ReactNode } from "react";
import styled from "styled-components";

const Ul = ({ children }: { children: ReactNode }) => (
  <StyledUl>{children}</StyledUl>
);

const StyledUl = styled.ul`
  padding-left: 0;

  li {
    list-style: none;
  }
`;

export default Ul;
