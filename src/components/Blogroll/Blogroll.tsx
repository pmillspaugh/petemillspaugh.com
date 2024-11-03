import Link from "next/link";
import styled from "styled-components";

const Blogroll = () => {
  return (
    <>
      <StyledH1>Blogroll</StyledH1>
      <StyledP>
        This is a list of websites I like, which I added to my garden in January
        2024. They are listed alphabetically. I’ll add new ones as I discover
        them.
      </StyledP>
      <StyledP>
        I actually hadn’t heard{" "}
        <Link href="/blogrolls">the word “blogroll”</Link> until 2024. I think{" "}
        <a href="https://manuelmoreale.com/blogroll">Manu Moreale’s blogroll</a>{" "}
        is where I first saw it.{" "}
      </StyledP>
      <StyledH2>Personal websites I like</StyledH2>
      <StyledUl>
        <li>
          <a href="https://chriscoyier.net/">chriscoyier.net</a>
        </li>
        <li>
          <a href="https://jakelazaroff.com/">jakelazaroff.com</a>
        </li>
        <li>
          <a href="https://www.joshwcomeau.com/">joshwcomeau.com</a>
        </li>
        <li>
          <a href="https://jvns.ca/">jvns.ca</a>
        </li>
        <li>
          <a href="https://macwright.com/">macwright.com</a>
        </li>
        <li>
          <a href="https://maggieappleton.com/">maggieappleton.com</a>
        </li>
        <li>
          <a href="https://neal.fun/">neal.fun</a>
        </li>
        <li>
          <a href="https://robinrendle.com/">robinrendle.com</a>
        </li>
        <li>
          <a href="https://thesephist.com/">thesephist.com</a>
        </li>
        <li>
          <a href="https://wattenberger.com/">wattenberger.com</a>
        </li>
      </StyledUl>
      <StyledH2>Other websites I like</StyledH2>
      <StyledUl>
        <li>
          <a href="https://emoji.supply/kitchen/">emoji.supply</a>
        </li>
        <li>
          <a href="https://peopleandblogs.com/">peopleandblogs.com</a>
        </li>
        <li>
          <a href="https://press.stripe.com/">press.stripe.com</a>
        </li>
        <li>
          <a href="https://radio.garden/">radio.garden</a>
        </li>
        <li>
          <a href="https://rotatingsandwiches.com/">rotatingsandwiches.com</a>
        </li>
        <li>
          <a href="https://same.energy/">same.energy</a>
        </li>
      </StyledUl>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;
  margin-left: -2px;

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

const StyledH2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 300;
  margin-top: 24px;
  margin-left: -2px;
  line-height: 1.1;
  text-wrap: balance;

  @media (min-width: 1200px) {
    font-size: 2.75rem;
  }
`;

const StyledUl = styled.ul`
  margin-top: 16px;

  & > li {
    padding-bottom: 8px;
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;

    & > li {
      padding-bottom: 16px;
    }
  }
`;

export default Blogroll;
