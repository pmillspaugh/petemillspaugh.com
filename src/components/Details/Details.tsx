import styled from "styled-components";

const Details = ({ children }) => {
  return <StyledDetails>{children}</StyledDetails>;
};

const StyledDetails = styled.details`
  padding: 0 24px;
  margin-bottom: 4px;
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;

  & > summary {
    margin-bottom: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  & > summary::before {
    content: "";
    padding-left: 8px;
  }

  @media (min-width: 1200px) {
    font-size: 0.875rem;
    margin-bottom: 12px;
  }
`;

export default Details;
