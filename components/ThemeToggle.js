import styled from 'styled-components';
import { Sun, Moon } from 'react-feather';

const ThemeToggle = ({ lightMode, setLightMode }) => {
  return (
    <ToggleButton
      onClick={() => setLightMode(!lightMode)}
      aria-label='Theme Toggle'
    >
      {lightMode ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.buttonBg};
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.buttonBgHover};
  }
`;

const SunIcon = styled(Sun)`
  color: ${(p) => p.theme.buttonTextColor};
`;

const MoonIcon = styled(Moon)`
  color: ${(p) => p.theme.buttonTextColor};
`;

export default ThemeToggle;
