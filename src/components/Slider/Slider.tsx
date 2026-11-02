import styled from "styled-components";
import * as RadixSlider from "@radix-ui/react-slider";
import { useId } from "react";

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  step: number;
  max: number;
}

const Slider = ({ value, onValueChange, step, max }: SliderProps) => {
  const sliderId = useId();

  return (
    <div>
      <Root
        id={sliderId}
        value={value}
        step={step}
        max={max}
        onValueChange={onValueChange}
      >
        <Track>
          <Range />
        </Track>
        <Thumb />
      </Root>
      <StyledLabel
        htmlFor={sliderId}
        style={{
          // @ts-ignore
          "--label-offset": `${value[0] * (200 / max - 20 / max)}px`,
        }}
      >
        {value[0]}
      </StyledLabel>
    </div>
  );
};

const Root = styled(RadixSlider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

const Track = styled(RadixSlider.Track)`
  background-color: var(--text-color);
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 2px;
`;

const Range = styled(RadixSlider.Range)`
  position: absolute;
  background-color: var(--text-color);
  border-radius: 9999px;
  height: 100%;
`;

const Thumb = styled(RadixSlider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--primary-bg);
  border: 2px solid var(--text-color);
  border-radius: 10px;
  transition:
    background-color var(--base-timing) ease-in-out,
    border-color var(--base-timing) ease-in-out;

  &:hover {
    background-color: var(--tag-border-color-hover);
    cursor: pointer;
  }

  &:focus {
    background-color: var(--tag-border-color-hover);
    outline-offset: 2px;
  }
`;

const StyledLabel = styled.label`
  margin-top: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 600;

  transform: translateX(var(--label-offset));
  transition: transform var(--base-timing) ease-in-out;
`;

export default Slider;
