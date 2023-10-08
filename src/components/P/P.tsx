import { ReactNode } from "react";
import styled from "styled-components";

const P = ({ children }: { children: ReactNode }) => (
  <StyledP>{children}</StyledP>
);

const StyledP = styled.p`
  margin-bottom: 16px;
`;

export default P;
