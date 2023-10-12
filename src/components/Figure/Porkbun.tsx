import Image from "next/image";
import styled from "styled-components";
import Figure from "./Figure";

const Porkbun = () => {
  return (
    <Figure caption="Porkbun TLDs">
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/porkbun-tlds.png"
            alt="Porkbun TLDs"
            // width x height = 932 / 1708 = 0.545
            width={272.8}
            height={500}
          />
        </StyledImageWrapper>
        <StyledImageWrapper>
          <StyledImage
            src="/images/porkbun-tlds-2.png"
            alt="Porkbun TLDs"
            // width x height = 1832 / 1708 = 1.072
            width={536.3}
            height={500}
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
  border: 2px solid ${(p) => p.theme.dateTextColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 4px;

  &:last-child {
    display: none;
  }

  @media (min-width: 768px) {
    &:first-child {
      display: none;
    }
    &:last-child {
      display: block;
    }
  }
`;

const StyledImage = styled(Image)`
  padding: 8px;
  background-color: ${(p) => p.theme.primaryBg};
`;

export default Porkbun;
