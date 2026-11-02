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
  border: 2px solid var(--date-text-color);
  border-radius: 4px;
  background-color: var(--tag-border-color);
  padding: 4px;

  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const StyledImage = styled(Image)`
  height: auto;
  padding: 8px;
  background-color: var(--primary-bg);
`;
