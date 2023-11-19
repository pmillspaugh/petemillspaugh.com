import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Not found</title>
        <meta name="description" content="Pete Millspaugh - Not found" />
      </Head>
      <StyledWrapper data-pagefind-ignore>
        <h1>404</h1>
        <p>
          Nothing planted here. Try looking{" "}
          <Link href="/garden">in the garden</Link>?
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

export default NotFoundPage;
