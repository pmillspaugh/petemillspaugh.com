import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import mountains from "@/images/mountainFooter.png";
import Spacer from "@/components/utils/Spacer";
import Divider from "@/components/utils/Divider";

export async function getStaticProps() {
  const deploymentURL = String(process.env.NEXT_PUBLIC_VERCEL_URL);

  return {
    props: {
      deploymentURL,
    },
  };
}

const Home = ({ deploymentURL }) => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh</title>
        <meta name="title" property="og:title" content="Peter Millspaugh" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Peter Millspaugh - Frontend Developer excited about Web Accessibility and PWAs"
        />
        <meta property="og:url" content="https://www.petermillspaugh.com/" />
        <meta
          name="image"
          property="og:image"
          content={`https://${deploymentURL}/images/socialBanner.png`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
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
            <Link href="/work" passHref legacyBehavior>
              <NavLink>Work</NavLink>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  background-color: ${(p) => p.theme.primaryBg};
  overflow: hidden;
`;

const TextWrapper = styled.main`
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

export default Home;
