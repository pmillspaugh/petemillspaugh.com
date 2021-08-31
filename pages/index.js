import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import mountains from '../public/images/mountainFooter.png';

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Peter Millspaugh</title>
        <meta
          name='description'
          content='Peter Millspaugh - Frontend Developer'
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/work'>
        <a>Work</a>
      </Link>
      <Link href='/talks'>
        <a>Talks</a>
      </Link>
      <Link href='#'>
        <a>Contact</a>
      </Link>
      <ImageWrapper>
        <Image
          src={mountains}
          alt='Graphic illustration of mountains and pine trees'
        />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-top: auto;
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
