import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import styled from "styled-components";
import EdisonBulb from "./EdisonBulb";

export interface LightSwitchProps {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const LightSwitch = ({ lightMode, setLightMode }: LightSwitchProps) => {
  const OFFSET = -20;
  const BOUNCE = 0;
  const RANGE = 32;
  const [dragging, setDragging] = useState(false);
  const [mouseDownY, setMouseDownY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [clicked, setClicked] = useState(false);

  const springProps = useSpring({
    transform: clicked
      ? `translateY(${BOUNCE}px)`
      : `translateY(${currentY - mouseDownY + OFFSET}px)`,
    config: {
      tension: 300,
      friction: 20,
    },
  });

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDragging(true);
    setMouseDownY(event.clientY);
    setCurrentY(event.clientY);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (dragging) {
      event.clientY < mouseDownY
        ? setCurrentY(mouseDownY)
        : setCurrentY(Math.min(event.clientY, mouseDownY + RANGE));
    }
  };

  const handleMouseUp = () => {
    setLightMode(!lightMode);
    setDragging(false);
    document.removeEventListener("mouseup", handleMouseUp);

    if (currentY === mouseDownY && currentY !== 0) {
      setClicked(true);
      setTimeout(() => setClicked(false), 250);
    } else {
      setCurrentY(0);
      setMouseDownY(0);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMouseUp();
    }
  };

  return (
    <StyledButton
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onKeyUp={handleKeyUp}
      aria-label="Theme Toggle"
      style={springProps}
    >
      <VisuallyHidden.Root>
        {lightMode ? "Switch to dark mode" : "Switch to light mode"}
      </VisuallyHidden.Root>
      <EdisonBulb lightMode={lightMode} />
    </StyledButton>
  );
};

const StyledButton = styled(animated.button)`
  padding: 0 8px;
  background: none;
  border: none;

  &:hover {
    cursor: grab;
  }
`;

export default LightSwitch;
