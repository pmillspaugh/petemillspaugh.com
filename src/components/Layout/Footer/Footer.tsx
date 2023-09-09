import { useRouter } from "next/router";
import styled from "styled-components";
import NewfoundLake, { NewfoundLakeProps } from "./NewfoundLake";

const Footer = ({ lightMode }: NewfoundLakeProps) => {
  const isHomePage = useRouter().pathname === "/";

  return (
    <footer>
      <NewfoundLake lightMode={lightMode} />
      {!isHomePage && (
        <StyledNav>
          {/* TODO: links to stuff here, e.g. socials, intrasite links */}
          <nav>Links will go here</nav>
        </StyledNav>
      )}
    </footer>
  );
};

const StyledNav = styled.nav`
  /* TODO: temp height for sizing/general style */
  /* TODO: what's up with the thin line on the top border on mobile emulation? */
  height: 30vh;
  width: 100vw;
  padding: 48px;
  margin: auto;
  background-color: var(--dark-green);
  color: var(--white);
`;

export default Footer;
