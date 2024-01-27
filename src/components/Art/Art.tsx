import Image from "next/image";
import styled from "styled-components";
import elephantDrawing from "@/images/elephant-drawing.jpeg";
import monkeyPainting from "@/images/monkey-painting.jpeg";
import { H2 } from "@/components/H";

const Art = () => {
  return (
    <>
      <StyledH1>Art</StyledH1>
      <StyledP>
        I’ve always liked to draw, but I haven’t drawn consistently since I was
        18 or so. Planting this /art page is my way of nudging myself to draw
        more. Inspired by{" "}
        <a href="https://macwright.com/drawings/" target="_blank">
          macwright.com/drawings
        </a>
        .
      </StyledP>

      <H2>Elephant on the wall</H2>
      <StyledP>
        Last summer my roommate found this big ole frame on the street in
        Brooklyn (large yellow bicycle below for scale). I stuck it on a wall in
        my room and started drawing this elephant that I took a picture of in
        India. I’m drawing directly on the wall with no canvas or anything,
        which feels rather freeing. It’s a work in progress, as you can see.
      </StyledP>
      <StyledFigure>
        <Image
          src={elephantDrawing}
          alt="Elephant Drawing"
          width={400}
          height={599}
        />
        <figcaption>Elephant on the wall. 3x5ft (ish) frame</figcaption>
      </StyledFigure>

      <H2>Monochrome monkey</H2>
      <StyledP>
        That elephant is the most recent art I made that hangs in my apartment.
        This monkey is the oldest art I made that still hangs in my apartment. I
        started painting in ninth grade, and this was the first thing I remember
        working on besides one obligatory still life on day 1.
      </StyledP>
      <StyledFigure>
        <Image
          src={monkeyPainting}
          alt="Monkey oil painting"
          width={400}
          height={303}
        />
        <figcaption>Monkey. 18x24in. Oil.</figcaption>
      </StyledFigure>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 16px;
  text-wrap: pretty;

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  & > img {
    border: 1.5px solid var(--black);
    border-radius: 4px;
  }

  & > figcaption {
    font-size: 0.875rem;
    font-style: italic;
    font-family: var(--font-open-sans);
  }
`;

export default Art;
