import { ReactNode } from "react";
import styled from "styled-components";
import AllTrails from "./gallery/AllTrails";
import Porkbun from "./gallery/Porkbun";
import MapNotes from "./gallery/MapNotes";
import GraceHopper from "./gallery/GraceHopper";
import DunningKruger from "./gallery/DunningKruger";
import ForgettingCurves from "./gallery/ForgettingCurve";

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

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;

Figure.AllTrails = AllTrails;
Figure.Porkbun = Porkbun;
Figure.MapNotes = MapNotes;
Figure.GraceHopper = GraceHopper;
Figure.DunningKruger = DunningKruger;
Figure.ForgettingCurves = ForgettingCurves;

export default Figure;
