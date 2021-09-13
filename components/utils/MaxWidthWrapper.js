import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 36px;

  @media (min-width: 592px) {
    padding: 72px;
  }

  @media (min-width: 768px) {
    padding: 72px 108px;
  }

  @media (min-width: 992px) {
    padding: 72px 144px;
  }

  @media (min-width: 1200px) {
    padding: 72px 180px;
    max-width: 1380px;
  }
`;

export default MaxWidthWrapper;