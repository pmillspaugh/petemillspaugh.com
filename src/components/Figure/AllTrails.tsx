import Image from "next/image";
import styled from "styled-components";
import Figure from "./Figure";

const AllTrails = () => {
  return (
    <Figure caption="AllTrails map download formats">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/AllTrails-map-download.jpeg"
            alt="AllTrails mobile map download"
            // width x height = 1170 / 2103 = 0.556
            width={222.4}
            height={400}
          />
        </StyledImageWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/AllTrails-map-download-formats.png"
            alt="AllTrails map download formats"
            // width x height = 1132 / 1540 = 0.735
            width={294}
            height={400}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 32px;
  overflow-x: scroll;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledImageWrapper = styled.div`
  flex-shrink: 0;
  border: 2px solid ${(p) => p.theme.dateTextColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 4px;
`;

const StyledImage = styled(Image)`
  padding: 8px;
  background-color: ${(p) => p.theme.primaryBg};
`;

export default AllTrails;
