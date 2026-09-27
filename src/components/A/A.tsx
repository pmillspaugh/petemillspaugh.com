import type { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const A = ({ children, ...props }: ComponentPropsWithoutRef<"a">) => {
  return <StyledA {...props}>{children}</StyledA>;
};

const StyledA = styled.a`
  strong > & {
    font-weight: 700;
  }
`;

export default A;
