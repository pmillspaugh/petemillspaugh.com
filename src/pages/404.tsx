import Link from "next/link";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <StyledWrapper data-pagefind-ignore>
      <h1>404</h1>
      <p>
        Nothing planted here. Try looking{" "}
        <Link href="/garden">in the garden</Link>?
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

export default NotFoundPage;
