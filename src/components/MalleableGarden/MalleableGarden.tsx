import { COLORS } from "@/styles/themes";
import styled, { keyframes } from "styled-components";

const MalleableGarden = () => {
  return (
    <Wrapper>
      <MS>
        <span>malleable </span>
        <span>software</span>
      </MS>
      <X>x</X>
      <DG>
        <span>digital </span>
        <span>garden</span>
      </DG>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 32px auto;
  font-family: var(--font-mono);
  font-style: italic;
  display: flex;
  justify-content: center;
  gap: 8px;

  @media (max-width: 400px) {
    transform: scale(0.85);
  }
`;

const moveRight = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(0); }
  30% { transform: translateX(88px); }
  70% { transform: translateX(88px); }
  80% { transform: translateX(0); }
  100% { transform: translateX(0); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  20% { opacity: 1; }
  30% { opacity: 0; }
  70% { opacity: 0; }
  80% { opacity: 1; }
  100% { opacity: 1; }
`;

const MS = styled.div`
  animation: ${moveRight} 10s ease-in-out infinite;

  & span:last-child {
    animation: ${fadeOut} 10s ease-in-out infinite;
  }
`;

const X = styled.span`
  animation: ${fadeOut} 10s ease-in-out infinite;
`;

const moveLeft = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(0); }
  30% { transform: translateX(-88px); }
  70% { transform: translateX(-88px); }
  80% { transform: translateX(0); }
  100% { transform: translateX(0); }
`;

const DG = styled.div`
  animation: ${moveLeft} 10s ease-in-out infinite;

  & span:first-child {
    animation: ${fadeOut} 10s ease-in-out infinite;
  }
`;

export default MalleableGarden;
