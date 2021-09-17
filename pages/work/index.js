import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import nonProphetThumbnail from '../../public/images/nonProphetThumbnail.png';
import tuloThumbnail from '../../public/images/tuloThumbnail.png';
import { Link as LinkIcon, GitHub } from 'react-feather';
import HomeLink from '../../components/HomeLink';
import Layout from '../../components/utils/Layout';
import MaxWidthWrapper from '../../components/utils/MaxWidthWrapper';
import PageHeader from '../../components/utils/PageHeader';
import Spacer from '../../components/utils/Spacer';
import AnchorLink from '../../components/utils/AnchorLink';

const Work = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Work</title>
        <meta name='description' content='Peter Millspaugh - Work' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page='Work' />
          <Spacer size='8px' />
          <ProjectWrapper>
            <ProjectBlurb id='non-prophet'>
              <ImageWrapper>
                <Image
                  src={nonProphetThumbnail}
                  alt='Product thumbnail for the beanie sold on non-prophet, an e-commerce site where all profit is donated to the EJI'
                />
              </ImageWrapper>
              <TextWrapper>
                <ProjectHeading>non-prophet</ProjectHeading>
                <Spacer size='16px' />
                <p>
                  e-commerce brand, all profit donated to the Equal Justice
                  Initiative
                </p>
                <Spacer size='16px' />
                <ProjectLink
                  href='https://non-prophet.dev/'
                  target='_blank'
                  rel='noreferrer'
                >
                  non-prophet.dev <LinkIcon size={12} />
                </ProjectLink>
                <Spacer size='8px' />
                <ProjectLink
                  href='https://github.com/pmillspaugh/non-prophet'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub repo <LinkIcon size={12} />
                </ProjectLink>
                <Spacer size='8px' />
                <TechStack>
                  <Tech>React</Tech>
                  <Tech>Redux</Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>Firebase</Tech>
                </TechStack>
              </TextWrapper>
            </ProjectBlurb>
            <Spacer size='48px' />
            <ProjectBlurb id='tulo'>
              <ImageWrapper>
                <Image
                  src={tuloThumbnail}
                  alt='Logo of tulo.js, an open-source developer tool for client-side caching via service workers'
                />
              </ImageWrapper>
              <TextWrapper>
                <ProjectHeading>tulo.js</ProjectHeading>
                <Spacer size='16px' />
                <p>
                  open-source npm package & monitoring tool to implement
                  client-side caching via service workers
                </p>
                <Spacer size='16px' />
                <ProjectLink
                  href='https://www.tulojs.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  tulojs.com <LinkIcon size={12} />
                </ProjectLink>
                <Spacer size='8px' />
                <ProjectLink
                  href='https://github.com/oslabs-beta/tulo-js'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub repo <LinkIcon size={12} />
                </ProjectLink>
                <Spacer size='8px' />
                <TechStack>
                  <Tech>TypeScript</Tech>
                  <Tech>Next.js</Tech>
                  <Tech>React</Tech>
                  <Tech>Redux</Tech>
                  <Tech>Styled Components</Tech>
                  <Tech>NextAuth.js</Tech>
                  <Tech>MongoDB</Tech>
                  <Tech>Vercel</Tech>
                </TechStack>
              </TextWrapper>
            </ProjectBlurb>
          </ProjectWrapper>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const ProjectWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectBlurb = styled.article`
  flex-basis: 100%;
  width: 100%;
  max-width: 800px;
  background-color: ${(p) => p.theme.secondaryBg};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: 8px;
  text-decoration: none;
  color: ${(p) => p.theme.textColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  max-width: 300px;
  display: flex;
  align-items: center;
`;

const ProjectHeading = styled.h2`
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 2rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: revert;
  }
`;

const ProjectLink = styled(AnchorLink)`
  font-weight: 800;
  font-size: 1.2rem;
`;

const TechStack = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Tech = styled.li`
  padding: 4px 8px;
  background-color: ${(p) => p.theme.primaryBg};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 0.8rem;
  color: ${(p) => p.theme.linkTextColorHover};
`;

export default Work;
