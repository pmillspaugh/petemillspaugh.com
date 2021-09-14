import styled from 'styled-components';
import Link from 'next/link';
import { Home } from 'react-feather';

const HomeLink = () => {
  return (
    <Link href='/' passHref>
      <AnchorLink aria-label='Home'>
        <Home />
      </AnchorLink>
    </Link>
  );
};

const AnchorLink = styled.a`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.buttonBgHover};
    color: ${(p) => p.theme.primaryBg};
  }
`;

export default HomeLink;
