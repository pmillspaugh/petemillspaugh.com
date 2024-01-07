import Figure from "..";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const MapNotes = () => {
  return (
    <Figure caption="Raw notes from June 26th map brainstorm">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/map-in-the-woods-raw.png"
            alt="Raw notes from June 26th map brainstorm"
            width={4010}
            height={2221}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default MapNotes;
