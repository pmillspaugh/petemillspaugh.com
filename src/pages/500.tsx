import Link from "next/link";
import styled from "styled-components";

const ServerErrorPage = () => {
  return (
    <StyledWrapper data-pagefind-ignore>
      <h1>500</h1>
      <p>
        Gardener error.{" "}
        <a href="https://twitter.com/pete_millspaugh" target="_blank">
          Lmk
        </a>{" "}
        if my plants need watering, so to speak.
      </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-size: 4rem;
    font-weight: 900;
  }
`;

export default ServerErrorPage;
