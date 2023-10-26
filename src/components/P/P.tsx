import { ReactNode } from "react";
import styled from "styled-components";

const P = ({ children }: { children: ReactNode }) => (
  <StyledP>{children}</StyledP>
);

const StyledP = styled.p`
  margin-bottom: 16px;
  text-wrap: pretty; /* not supported in all browsers */

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    margin-bottom: 24px;
  }
`;

export default P;
