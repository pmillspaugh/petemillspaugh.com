import { useContext } from "react";
import styled from "styled-components";
import { LightModeContext } from "pages/_app";
import Logo from "./Logo";
import LightSwitch from "./LightSwitch";

const Header = () => {
  const { lightMode, setLightMode } = useContext(LightModeContext);

  return (
    <StyledHeader>
      <Logo lightMode={lightMode} />
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
