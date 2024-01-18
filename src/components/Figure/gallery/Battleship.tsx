import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const Battleship = () => {
  return (
    <Figure caption="Battleship game (column letters, row numbers are low contrast)">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/battleship.jpeg"
            alt="Battleship game"
            width={400}
            height={359}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default Battleship;
