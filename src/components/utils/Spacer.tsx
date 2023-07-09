import { ReactNode } from "react";
import styled from "styled-components";

interface SpacerProps {
  size: string;
  children?: ReactNode;
}

const Spacer = ({ size, children }: SpacerProps) => {
  return <Box size={size}>{children}</Box>;
};

const Box = styled.div<SpacerProps>`
  flex-basis: ${(p) => p.size};
`;

export default Spacer;
