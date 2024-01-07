import styled from "styled-components";
import Figure from "..";
import { StyledImage } from "../Wrapper";

const ForgettingCurves = () => {
  return (
    <Figure caption="Forgetting curves">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/forgetting-curve-1.png"
            alt="Forgetting curve with no retrieval"
            width={506}
            height={400}
          />
        </StyledImageWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/forgetting-curve-2.png"
            alt="Forgetting curve with one retrieval"
            width={506}
            height={400}
          />
        </StyledImageWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/forgetting-curve-3.png"
            alt="Forgetting curve with two retrievals"
            width={506}
            height={400}
          />
        </StyledImageWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/forgetting-curve-4.png"
            alt="Forgetting curve with three retrievals"
            width={506}
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
  overflow-x: auto;
`;

const StyledImageWrapper = styled.div`
  flex-shrink: 0;
  max-width: 100%;

  border: 2px solid ${(p) => p.theme.dateTextColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 4px;
`;

export default ForgettingCurves;
