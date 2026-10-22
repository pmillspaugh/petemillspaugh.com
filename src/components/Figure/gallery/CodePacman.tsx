import Figure from "../Figure";
import { StyledWrapper, StyledImageWrapper, StyledImage } from "../Wrapper";

const CodePacman = () => {
  return (
    <Figure caption="">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/code-pacman.avif"
            alt="Pie chart: code produced in the last week (90%) vs code produced since 1843 (10%). Not based on real data, just a hunch"
            width={500}
            height={500}
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </Figure>
  );
};

export default CodePacman;
