import { ReactNode } from "react";
import styled from "styled-components";

export const H2 = ({ children }: { children: ReactNode }) => (
  <StyledH2>{children}</StyledH2>
);

const StyledH2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.1;
  margin-top: 36px;
  margin-bottom: 20px;
  margin-left: -1px;
  text-wrap: balance; /* not supported in all browsers */

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const H3 = ({ children }: { children: ReactNode }) => (
  <StyledH3>{children}</StyledH3>
);

const StyledH3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.1;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: -1px;
  text-wrap: balance; /* not supported in all browsers */

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
