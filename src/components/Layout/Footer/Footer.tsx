import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import mountains from "@/images/mountainFooter.png";

const Footer = () => {
  const isHomePage = useRouter().pathname === "/";

  return (
    <footer>
      <ImageWrapper>
        <Image
          src={mountains}
          width={1920}
          height={492}
          alt="Graphic illustration of mountains and pine trees"
          style={{ minWidth: "100%", height: "auto" }}
          priority={true}
        />
      </ImageWrapper>
      {!isHomePage && (
        <StyledNav>
          {/* TODO: links to stuff here, e.g. socials, intrasite links */}
          <nav>Links will go here</nav>
        </StyledNav>
      )}
    </footer>
  );
};

const ImageWrapper = styled.div`
  flex-grow: 0;
  position: relative;
  height: 35vh;
  width: 100vw;
  min-width: calc((1920 / 492) * 35vh);
  overflow: hidden;
  line-height: 0;

  @media (min-width: 1000px) {
    height: 40vh;
    min-width: calc((1920 / 492) * 40vh);
  }
  @media (min-width: 1200px) {
    height: 45vh;
    min-width: calc((1920 / 492) * 45vh);
  }
  @media (min-width: 1400px) {
    height: 50vh;
    min-width: calc((1920 / 492) * 50vh);
  }
`;

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
