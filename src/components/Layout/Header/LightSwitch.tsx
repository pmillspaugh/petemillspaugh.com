import { useState, useRef, useCallback } from "react";
import { useSpring, animated } from "@react-spring/web";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";
import useLightMode from "@/hooks/useLightMode.hook";
import { LocalStorageKey } from "@/constants";
import EdisonBulb from "./EdisonBulb";

export type LightSwitchProps = ReturnType<typeof useLightMode>;

const LightSwitch = ({ lightMode, setLightMode }: LightSwitchProps) => {
  const OFFSET = -20;
  const BOUNCE = 0;
  const RANGE = 32;

  const [dragging, setDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [clicked, setClicked] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const springProps = useSpring({
    transform: clicked
      ? `translateY(${BOUNCE}px)`
      : `translateY(${currentY - initialY + OFFSET}px)`,
    config: {
      tension: 300,
      friction: 20,
    },
  });

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDragging(true);
    setInitialY(event.clientY);
    setCurrentY(event.clientY);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (dragging) {
      event.clientY < initialY
        ? setCurrentY(initialY)
        : setCurrentY(Math.min(event.clientY, initialY + RANGE));
    }
  };

  const handleMouseUp = () => {
    setLightMode(!lightMode);
    setDragging(false);
    document.removeEventListener("mouseup", handleMouseUp);

    if (currentY === initialY && currentY !== 0) {
      setClicked(true);
      setTimeout(() => setClicked(false), 250);
    } else {
      setCurrentY(0);
      setInitialY(0);
    }

    if (JSON.parse(localStorage.getItem(LocalStorageKey.AudioEnabled))) {
      audioRef.current?.play();
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMouseUp();
      setClicked(true);
      setTimeout(() => setClicked(false), 250);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
    // Prevent pull-to-refresh behavior on mobile
    document.documentElement.style.overscrollBehavior = "none";

    setDragging(true);
    setInitialY(event.touches[0].clientY);
    setCurrentY(event.touches[0].clientY);

    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLButtonElement>) => {
    if (dragging) {
      event.touches[0].clientY < initialY
        ? setCurrentY(initialY)
        : setCurrentY(Math.min(event.touches[0].clientY, initialY + RANGE));
    }
  };

  const handleTouchEnd = () => {
    document.documentElement.style.overscrollBehavior = "auto";

    setLightMode(!lightMode);
    setDragging(false);
    setCurrentY(0);
    setInitialY(0);

    // TODO: DRY
    if (JSON.parse(localStorage.getItem(LocalStorageKey.AudioEnabled))) {
      audioRef.current?.play();
    }

    document.removeEventListener("touchend", handleTouchEnd);
  };

  return (
    <StyledButton
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onKeyUp={handleKeyUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Theme Toggle"
      style={springProps}
    >
      <audio ref={audioRef}>
        <source src="./audio/light-switch.m4a" type="audio/mp4" />
      </audio>
      <VisuallyHidden>
        {lightMode ? "Switch to dark mode" : "Switch to light mode"}
      </VisuallyHidden>
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

  /* Enlarges target element (easier to click) */
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0px;
    left: -16px;
    right: -16px;
    bottom: -16px;
  }
`;

export default LightSwitch;
