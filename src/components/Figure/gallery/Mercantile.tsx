import Figure from "..";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const Mercantile = () => {
  return (
    <Figure caption="The Mercantile Library, 12th floor">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/merc-book-lady.jpeg"
            alt="Mercantile Library, 12th floor"
            width={690}
            height={916}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default Mercantile;
