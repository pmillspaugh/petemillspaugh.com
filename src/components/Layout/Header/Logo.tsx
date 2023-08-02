import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";

const Logo = () => {
  return (
    <LogoLink href="/" aria-label="Home">
      <Image
        src={logo}
        width={48}
        height={48}
        alt="Logo for the website, a stylized letter 'P'"
      />
    </LogoLink>
  );
};

const LogoLink = styled(Link)`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    cursor: pointer;
    border: 2px solid ${(p) => p.theme.buttonBgHover};
    border-radius: 8px;
    color: ${(p) => p.theme.primaryBg};
  }
`;

export default Logo;
