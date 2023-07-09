import styled from "styled-components";

const Paragraph = styled.p`
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${(p) => p.theme.textColor};

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export default Paragraph;
