import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const DunningKruger = () => {
  return (
    <Figure caption="The Dunning-Kruger effect">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/dunning-kruger-effect.png"
            alt="The Dunning-Kruger effect"
            width={1131}
            height={679}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default DunningKruger;
