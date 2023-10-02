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
        Writing also has many shapes. I have four writing formats:{" "}
        <em>Essays</em>, <em>Brainstorms</em>, <em>Show 'n tells</em>, and{" "}
        <em>TILs</em>. Each piece of content also has a status or growth stage:{" "}
        <em>Seedlings</em>, <em>Buddings</em>, and <em>Evergreens</em>.
      </StyledP>
      <StyledP>
        I cover my gardening habits in full on the{" "}
        <a href="/about#this-site">About</a> page. Or, if you want to jump
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
`;

export default WhatsThis;
