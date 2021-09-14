import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import mountains from '../public/images/mountainFooter.png';
import Spacer from '../components/utils/Spacer';
import Divider from '../components/utils/Divider';

const Home = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh</title>
        <meta
          name='description'
          content='Peter Millspaugh - Frontend Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <TextWrapper>
          <Firstname>PETER</Firstname>
          <Lastname>MILLSPAUGH</Lastname>
          <Spacer size='24px' />
          <Divider />
          <Spacer size='24px' />
          <LinkWrapper>
            <Link href='/about' passHref>
              <NavLink>About</NavLink>
            </Link>
            <Spacer size='16px' />
            <Link href='/work' passHref>
              <NavLink>Work</NavLink>
            </Link>
            <Spacer size='16px' />
            <Link href='/talks' passHref>
              <NavLink>Talks</NavLink>
            </Link>
            <Spacer size='16px' />
            <Link href='/about#contact' passHref>
              <NavLink>Contact</NavLink>
            </Link>
          </LinkWrapper>
          <Spacer size='24px' />
        </TextWrapper>
        <ImageWrapper>
          <Image
            src={mountains}
            alt='Graphic illustration of mountains and pine trees'
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
  font-size: 3.5rem;
  line-height: 3rem;
`;
const Lastname = styled(Names)`
  font-size: 2rem;
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
  font-weight: 600;
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
