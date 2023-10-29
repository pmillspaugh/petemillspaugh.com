import Image from "next/image";
import styled from "styled-components";
import Figure from "./Figure";

const MapNotes = () => {
  return (
    <Figure caption="Raw notes from June 26th map brainstorm">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/map-in-the-woods-raw.png"
            alt="Raw notes from June 26th map brainstorm"
            // width x height = 4010 x 2221 = 1.806
            width={4010}
            height={2221}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const StyledImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  border: 2px solid ${(p) => p.theme.dateTextColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 4px;

  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;

const StyledImage = styled(Image)`
  height: auto;
  padding: 8px;
  background-color: ${(p) => p.theme.primaryBg};
`;

export default MapNotes;
