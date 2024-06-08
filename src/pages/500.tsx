import Head from "next/head";
import styled from "styled-components";

const ServerErrorPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Gardener error</title>
        <meta name="description" content="Pete Millspaugh - Gardener error" />
      </Head>
      <StyledWrapper data-pagefind-ignore>
        <h1>500</h1>
        <p>
          Gardener error. <a href="https://twitter.com/pete_millspaugh">Lmk</a>{" "}
          if my plants need watering, so to speak.
        </p>
      </StyledWrapper>
    </>
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

  @media (min-width: 1200px) {
    & > p {
      font-size: 1.25rem;
      line-height: 1.75;
    }
  }
`;

export default ServerErrorPage;
