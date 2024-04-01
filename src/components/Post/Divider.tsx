import styled from "styled-components";

const Divider = styled.div`
  height: 6px;
  margin-top: 40px;
  border-top: 1.5px solid ${(p) => p.theme.textColor};
  border-bottom: 1.5px solid ${(p) => p.theme.textColor};
`;

export default Divider;
