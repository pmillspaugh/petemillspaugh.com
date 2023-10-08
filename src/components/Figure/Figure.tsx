import { ReactNode } from "react";
import styled from "styled-components";
import AllTrails from "./AllTrails";

interface FigureProps {
  caption: string;
  children: ReactNode;
}

const Figure = ({ caption, children }: FigureProps) => {
  return (
    <StyledFigure>
      {children}
      <StyledFigcaption>{caption}</StyledFigcaption>
    </StyledFigure>
  );
};

const StyledFigure = styled.figure`
  margin: 48px 0px;
`;

const StyledFigcaption = styled.figcaption`
  font-family: var(--font-open-sans), sans-serif;
  font-size: 0.875rem;
  font-style: italic;
  text-align: center;
  padding-top: 16px;
  color: ${(p) => p.theme.dateTextColor};
`;

Figure.AllTrails = AllTrails;

export default Figure;