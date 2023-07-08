import { ReactNode } from "react";
import styled from "styled-components";

const Spacer = ({ size, children }: { size: string; children?: ReactNode }) => {
  return <Box size={size}>{children}</Box>;
};

const Box = styled.div`
  flex-basis: ${(p) => p.size};
`;

export default Spacer;
