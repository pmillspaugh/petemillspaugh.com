import Link from "next/link";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledH1>
        <Firstname>Peter</Firstname>
        <Lastname>Millspaugh</Lastname>
      </StyledH1>
      <Divider />
      <StyledNav>
        <Link href="/about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
        <Link href="/talks" passHref legacyBehavior>
          <NavLink>Talks</NavLink>
        </Link>
      </StyledNav>
    </>
  );
};

const StyledH1 = styled.h1`
  padding-bottom: 16px;
  color: ${(p) => p.theme.textColor};
  text-align: center;
`;

const Firstname = styled.div`
  font-size: 5rem;
  font-weight: 400;
  line-height: 1;
`;

const Lastname = styled.div`
  font-size: 3rem;
`;

const Divider = styled.hr`
  width: 50%;
  margin: 0 auto;
  border-color: ${(p) => p.theme.textColor};
`;

const StyledNav = styled.nav`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  text-align: center;
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

export default Home;
