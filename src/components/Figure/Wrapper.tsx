import Image from "next/image";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const StyledImageWrapper = styled.div`
  flex-shrink: 0;
  max-width: 100%;
  border: 2px solid ${(p) => p.theme.dateTextColor};
  border-radius: 4px;
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 4px;

  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const StyledImage = styled(Image)`
  height: auto;
  padding: 8px;
  background-color: ${(p) => p.theme.primaryBg};
`;
