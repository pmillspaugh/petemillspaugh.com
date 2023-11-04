import Link from "next/link";
import styled from "styled-components";

const Nav = ({ handleClick }) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink href="/garden" onClick={handleClick}>
            Garden
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/about" onClick={handleClick}>
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/wishlist" onClick={handleClick}>
            Wishlist
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 16px 8px;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }
`;

const StyledNavLink = styled(Link)`
  font-family: var(--font-mono);
  font-weight: 700;
  text-decoration: none;
  display: block;
  outline-offset: 8px;

  &:after {
    content: " →";
  }

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

export default Nav;
