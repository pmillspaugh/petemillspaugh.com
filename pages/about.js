import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, Linkedin, GitHub } from 'react-feather';
import HomeLink from '../components/HomeLink';
import Layout from '../components/utils/Layout';
import MaxWidthWrapper from '../components/utils/MaxWidthWrapper';
import PageHeader from '../components/utils/PageHeader';
import Paragraph from '../components/utils/Paragraph';
import SubHeading from '../components/utils/SubHeading';
import AnchorLink from '../components/utils/AnchorLink';
import Spacer from '../components/utils/Spacer';

const About = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | About</title>
        <meta
          name='description'
          content='Peter Millspaugh - Frontend Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page='About' />
          <SubHeading>Hi there 👋</SubHeading>
          <Spacer size='20px' />
          <Paragraph>Thanks for visiting my site!</Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I&apos;m Peter (or Pete – your call), and I&apos;m a developer based
            in New York.
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I enjoy working across the stack in the TypeScript/JavaScript
            ecosystem (React, Redux, Node.js) with a core focus on frontend
            technologies. I&apos;m especially excited about Accessibility and
            PWAs. In July, I gave a{' '}
            <Link href='/talks/accessibility' passHref>
              <AnchorLink>talk on Web Accessibility</AnchorLink>
            </Link>{' '}
            – let me know what you think!
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            Recently, I&apos;ve been working with a terrific team on{' '}
            <Link href='/work#tulo' passHref>
              <AnchorLink>tulo.js</AnchorLink>
            </Link>
            , an open-source developer tool for client-side caching via service
            workers. I&apos;m also building{' '}
            <Link href='/work#non-prophet' passHref>
              <AnchorLink>non-prophet</AnchorLink>
            </Link>
            , an e-commerce brand. Once it officially launches, all profit will
            go to the Equal Justice Initiative.
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I designed this site with{' '}
            <AnchorLink href='https://www.figma.com/' target='_blank'>
              Figma
            </AnchorLink>{' '}
            and built it out using{' '}
            <AnchorLink href='https://nextjs.org/' target='_blank'>
              Next.js
            </AnchorLink>{' '}
            and{' '}
            <AnchorLink href='https://styled-components.com/' target='_blank'>
              Styled Components
            </AnchorLink>
            . The iconography is from the{' '}
            <AnchorLink href='https://feathericons.com/' target='_blank'>
              Feather
            </AnchorLink>{' '}
            open-source library. The developer experience working with those
            tools is fantastic – I&apos;d love to chat more about it if
            you&apos;re interested!
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            When I&apos;m not coding, I do a lot of cooking (
            <em>read: pasta</em>) and running.
          </Paragraph>
          <Spacer size='28px' />
          <SubHeading id='contact'>Let&apos;s connect! ☕</SubHeading>
          <Spacer size='20px' />
          <IconWrapper>
            <IconLink
              href='mailto:peterdgmillspaugh@gmail.com'
              target='_blank'
              aria-label="Peter's email address"
            >
              <Mail size={24} />
            </IconLink>
            <Spacer size='20px' />
            <IconLink
              href='https://www.linkedin.com/in/peter-millspaugh/'
              target='_blank'
              aria-label="Peter's LinkedIn profile"
            >
              <Linkedin size={24} />
            </IconLink>
            <Spacer size='20px' />
            <IconLink
              href='https://github.com/pmillspaugh'
              target='_blank'
              aria-label="Peter's GitHub profile"
            >
              <GitHub size={24} />
            </IconLink>
          </IconWrapper>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const IconLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(p) => p.theme.buttonBg};
  color: ${(p) => p.theme.buttonTextColor};

  &:hover {
    background-color: ${(p) => p.theme.buttonBgHover};
  }
`;

export default About;
