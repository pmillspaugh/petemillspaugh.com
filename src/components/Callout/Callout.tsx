import styled from "styled-components";

const Callout = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

const StyledArticle = styled.article`
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${(p) => p.theme.codeBg};
  border: 1.5px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  font-family: var(--font-mono), monospace;

  & > p {
    font-size: calc(12 / 16 * 1rem);
    margin-bottom: 0px;
  }

  @media (min-width: 1200px) {
    & > p {
      font-size: calc(15 / 16 * 1rem);
    }
  }
`;

export default Callout;
