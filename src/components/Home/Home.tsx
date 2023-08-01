import styled from "styled-components";
import Link from "next/link";
import Spacer from "@/components/lib/Spacer";
import Divider from "@/components/lib/Divider";

const Home = () => {
  return (
    <TextWrapper>
      <Firstname>Peter</Firstname>
      <Lastname>Millspaugh</Lastname>
      <Spacer size="24px" />
      <Divider />
      <Spacer size="24px" />
      <LinkWrapper>
        <Link href="/about" passHref legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
        <Spacer size="16px" />
        <Link href="/projects" passHref legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
        <Spacer size="16px" />
        <Link href="/talks" passHref legacyBehavior>
          <NavLink>Talks</NavLink>
        </Link>
        <Spacer size="16px" />
        <Link href="/about#contact" passHref legacyBehavior>
          <NavLink>Contact</NavLink>
        </Link>
      </LinkWrapper>
      <Spacer size="24px" />
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  flex-grow: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Names = styled.h1`
  color: ${(p) => p.theme.textColor};
  text-align: center;
`;

const Firstname = styled(Names)`
  font-size: 5rem;
  font-weight: 400;
  line-height: 3rem;
`;
const Lastname = styled(Names)`
  font-size: 3rem;
`;

const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 24px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

export default Home;
