import { useState } from "react";
import styled from "styled-components";
import Slider from "@/components/Slider";
import Curves from "./Curves";

const ForgettingCurve = () => {
  const [repetitions, setRepetitions] = useState(0);

  return (
    <Wrapper>
      <GraphContainer>
        <Graph>
          <YLabel>
            <span>Retention</span>
            <span>100%</span>
          </YLabel>
          <XLabel>Time</XLabel>
          <Curves repetitions={repetitions} />
        </Graph>

        <SliderLabel>Number of repetitions</SliderLabel>
        <Slider
          value={[repetitions]}
          onValueChange={(value) => setRepetitions(value[0])}
          step={1}
          max={3}
        />
      </GraphContainer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 300px;
  margin: -60px auto;
  transform: scale(0.6);
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: initial;
    margin: 60px auto;
    transform: initial;
  }
`;

const GraphContainer = styled.div`
  position: relative;
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.tagBorderColor};
  border: 1.5px solid ${(p) => p.theme.textColor};
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 6px;
    right: 6px;
    background-color: ${(p) => p.theme.primaryBg};
  }
`;

const Graph = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.codeBg};
  border-left: 1.5px solid ${(p) => p.theme.textColor};
  border-bottom: 1.5px solid ${(p) => p.theme.textColor};
`;

const YLabel = styled.div`
  font-weight: 600;

  & > span:first-child {
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: -80px;
    transform: rotate(-90deg);
  }

  & > span:last-child {
    position: absolute;
    top: -2px;
    left: -50px;

    &::after {
      content: " —";
      right: 20px;
      font-weight: 900;
    }
  }
`;

const XLabel = styled.div`
  position: absolute;
  left: 45%;
  right: 55%;
  bottom: -44px;
  font-weight: 600;
`;

const SliderLabel = styled.p`
  padding-top: 100px;
  padding-bottom: 16px;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
`;

export default ForgettingCurve;
