import styled from "styled-components";

const Talks = () => {
  return (
    <>
      <StyledH1>Talks</StyledH1>
      <StyledP>
        I've only ever given one public, recorded talk as you can see below. I'd
        like to give more talks, mainly because preparing for one (“talk-driven
        development”) encourages thorough learning much like teaching and
        writing.
      </StyledP>
      <StyledUl>
        <li>
          <a href="https://www.youtube.com/watch?v=pPX0Gk0l6Vo&t=12s">
            Introduction to Web Accessibility (July 2021)
          </a>
        </li>
      </StyledUl>
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

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
`;

const StyledUl = styled.ul`
  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`;

export default Talks;
