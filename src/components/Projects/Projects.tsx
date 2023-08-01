import styled from "styled-components";
import Image from "next/image";
import nonProphetThumbnail from "@/images/nonProphetThumbnail.png";
import tuloThumbnail from "@/images/tuloThumbnail.png";
import { Link as LinkIcon, GitHub } from "react-feather";
import PageHeader from "@/components/lib/PageHeader";
import Spacer from "@/components/lib/Spacer";
import AnchorLink from "@/components/lib/AnchorLink";

const Projects = () => {
  return (
    <>
      <PageHeader page="Work" />
      <Spacer size="8px" />
      <ProjectWrapper>
        <ProjectBlurb id="non-prophet">
          <ImageWrapper>
            <Image
              width={1000}
              height={1000}
              src={nonProphetThumbnail}
              alt="Product thumbnail for the beanie sold on non-prophet, an e-commerce site where all profit is donated to the EJI"
              style={{ height: "auto" }}
            />
          </ImageWrapper>
          <TextWrapper>
            <ProjectHeading>non-prophet</ProjectHeading>
            <Spacer size="16px" />
            <p>
              e-commerce brand, all profit donated to the Equal Justice
              Initiative
            </p>
            <Spacer size="16px" />
            <ProjectLink
              href="https://non-prophet.dev/"
              target="_blank"
              rel="noreferrer"
            >
              non-prophet.dev <LinkIcon size={12} />
            </ProjectLink>
            <Spacer size="8px" />
            <ProjectLink
              href="https://github.com/pmillspaugh/non-prophet"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo <LinkIcon size={12} />
            </ProjectLink>
            <Spacer size="8px" />
            <TechStack>
              <Tech>React</Tech>
              <Tech>Redux</Tech>
              <Tech>Styled Components</Tech>
              <Tech>Firebase</Tech>
            </TechStack>
          </TextWrapper>
        </ProjectBlurb>
        <Spacer size="48px" />
        <ProjectBlurb id="tulo">
          <ImageWrapper>
            <Image
              width={640}
              height={640}
              src={tuloThumbnail}
              alt="Logo of tulo.js, an open-source developer tool for client-side caching via service workers"
              style={{ height: "auto" }}
            />
          </ImageWrapper>
          <TextWrapper>
            <ProjectHeading>tulo.js</ProjectHeading>
            <Spacer size="16px" />
            <p>
              open-source npm package & monitoring tool to implement client-side
              caching via service workers
            </p>
            <Spacer size="16px" />
            <ProjectLink
              href="https://www.tulojs.com/"
              target="_blank"
              rel="noreferrer"
            >
              tulojs.com <LinkIcon size={12} />
            </ProjectLink>
            <Spacer size="8px" />
            <ProjectLink
              href="https://github.com/oslabs-beta/tulo-js"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo <LinkIcon size={12} />
            </ProjectLink>
            <Spacer size="8px" />
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

export default Projects;
