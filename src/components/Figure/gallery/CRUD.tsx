import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const CRUD = () => {
  return (
    <Figure caption="">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/create-read-update-delete.avif"
            alt="Create Read Update Delete: Mastering the elements of good programming."
            width={760}
            height={500}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default CRUD;
