import styled from "styled-components";
import Logo from "./Logo";
import LightSwitch, { LightSwitchProps } from "./LightSwitch";

export interface HeaderProps extends LightSwitchProps {}

const Header = ({ lightMode, setLightMode }: HeaderProps) => {
  return (
    <StyledHeader>
      <Logo />
      <nav>{/* TODO: */}</nav>
      <LightSwitch lightMode={lightMode} setLightMode={setLightMode} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 72px;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
