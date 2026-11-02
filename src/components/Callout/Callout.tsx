import styled from "styled-components";

const Callout = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

const StyledArticle = styled.article`
  padding: 16px;
  margin-bottom: 32px;
  background-color: var(--code-bg);
  border: 1.5px solid var(--text-color);
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
