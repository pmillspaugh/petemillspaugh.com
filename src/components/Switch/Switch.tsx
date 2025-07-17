import * as RadixSwitch from "@radix-ui/react-switch";
import styled from "styled-components";

const Switch = ({
  isChecked,
  handleCheckedChange,
}: {
  isChecked: boolean;
  handleCheckedChange: (checked: boolean) => void;
}) => {
  return (
    <Root checked={isChecked} onCheckedChange={handleCheckedChange}>
      <Thumb />
    </Root>
  );
};

// CSS adapted from Josh Comeau's Joy of React course. Thanks, Josh!
const Root = styled(RadixSwitch.Root)`
  --size: 17px;
  --padding: calc(var(--size) * 0.1);
  --width: calc(var(--size) * 2 + var(--padding) * 2);
  --radius: calc(var(--size) * 0.25);

  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  width: var(--width);
  padding: var(--padding);

  /* Enlarges target element (easier to click) */
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: var(--radius);
    right: var(--radius);
    bottom: 0;
    margin: auto;
    height: 2px;
    background: ${(p) => p.theme.textColor};
    border-radius: 10px;
  }

  &:focus-visible {
    outline: 2px auto ${(p) => p.theme.textColor};
    outline-offset: 4px;
  }
`;

const Thumb = styled(RadixSwitch.Thumb)`
  display: flex;
  position: relative;
  z-index: 2;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: ${(p) => p.theme.primaryBg};
  border: 2px solid ${(p) => p.theme.textColor};
  outline: 2px solid ${(p) => p.theme.primaryBg};
  transform: translateX(0%);
  transition: transform var(--base-timing) ease-in-out;
  will-change: transform;

  &[data-state="checked"] {
    background: ${(p) => p.theme.switchEnabledBg};
    transform: translateX(100%);
  }
`;

export default Switch;
