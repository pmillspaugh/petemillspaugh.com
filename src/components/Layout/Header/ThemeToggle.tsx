// TODO: redesign
import styled from "styled-components";

export interface ThemeToggleProps {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle = ({ lightMode, setLightMode }: ThemeToggleProps) => {
  return (
    <ToggleButton
      onClick={() => setLightMode(!lightMode)}
      aria-label="Theme Toggle"
    >
      {lightMode ? "Dark" : "Light"}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.buttonTextColor};
  background-color: ${(p) => p.theme.buttonBg};
  border: none;
  border-radius: 4px;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background-color: ${(p) => p.theme.buttonBgHover};
    }
  }
`;

export default ThemeToggle;
