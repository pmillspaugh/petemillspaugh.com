import styled from "styled-components";
import Logo from "./Logo";
import ThemeToggle, { ThemeToggleProps } from "./ThemeToggle";

export interface HeaderProps extends ThemeToggleProps {}

const Header = ({ lightMode, setLightMode }: HeaderProps) => {
  return (
    <StyledHeader>
      <Logo />
      <nav>{/* TODO: */}</nav>
      {/* TODO: update toggle design */}
      <ThemeToggle lightMode={lightMode} setLightMode={setLightMode} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
