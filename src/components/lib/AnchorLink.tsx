import styled from "styled-components";

const AnchorLink = styled.a`
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

export default AnchorLink;
