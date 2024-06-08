import styled from "styled-components";

const A = ({ href, children }) => {
  return <StyledA href={href}>{children}</StyledA>;
};

const StyledA = styled.a`
  strong > & {
    font-weight: 700;
  }
`;

export default A;
