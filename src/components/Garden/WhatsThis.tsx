import Link from "next/link";
import styled from "styled-components";

const WhatsThis = () => {
  return (
    <>
      <H2>This is my digital garden.</H2>
      <StyledP>
        A digital garden is a bit different than a blog where each post is a
        "finished" work ready for public eyes. Instead, writing is made public
        early on while it's still being cultivated and growing.
      </StyledP>
      <StyledP>
        You can filter the garden by format—
        <em>Essays</em>, <em>Brainstorms</em>, <em>Show 'n tells</em>,{" "}
        <em>TILs</em>, <em>Notes</em>—and by status—<em>Seedlings</em>,{" "}
        <em>Buddings</em>, <em>Evergreens</em>.
      </StyledP>
      <StyledP>
        You can start with a{" "}
        <Link href="/tour" target="_blank">
          tour
        </Link>{" "}
        of my garden or read about my gardening habits in full on the{" "}
        <Link href="/about#this-site">about</Link> page. Or, if you want to jump
        directly to a historical tour of digital gardening, read{" "}
        <a href="https://maggieappleton.com/garden-history" target="_blank">
          Maggie Appleton's wonderful essay
        </a>
        .
      </StyledP>
    </>
  );
};

const H2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

const StyledP = styled.p`
  font-size: 0.875rem;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export default WhatsThis;
