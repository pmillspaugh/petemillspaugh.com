import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 36px;

  @media (min-width: 592px) {
    width: 520px;
  }

  @media (min-width: 768px) {
    width: 660px;
  }

  @media (min-width: 992px) {
    width: 848px;
  }

  @media (min-width: 1200px) {
    width: 1020px;
  }
`;

export default MaxWidthWrapper;
