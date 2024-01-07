import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const GraceHopper = () => {
  return (
    <Figure caption="Portrait of Grace Hopper in 1984">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/grace-hopper.jpg"
            alt="Portrait of Grace Hopper in 1984"
            width={480}
            height={600}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default GraceHopper;
