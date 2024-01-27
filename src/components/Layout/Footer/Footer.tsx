import { useContext } from "react";
import Link from "next/link";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";
import { LightModeContext } from "pages/_app";
import { PostFormat } from "@/components/Post";
import NewfoundLake from "./NewfoundLake";
import RssIcon from "./RssIcon";
import GitHubIcon from "./GitHubIcon";
import ValTownIcon from "./ValTownIcon";
import TwitterIcon from "./TwitterIcon";
import EmailSignup from "@/components/EmailSignup";

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <footer>
      <NewfoundLake lightMode={lightMode} />
      <StyledWrapper>
        <StyledNav>
          <StyledColumnWrapper>
            <StyledLeftColumn>
              <StyledGardenUl>
                <StyledGardenLi>
                  <StyledLink href="/garden">Garden</StyledLink>
                  <StyledGardenLink href={`/garden?format=${PostFormat.Essay}`}>
                    Essays
                  </StyledGardenLink>
                  <StyledGardenLink
                    href={`/garden?format=${PostFormat.Brainstorm}`}
                  >
                    Brainstorms
                  </StyledGardenLink>
                  <StyledGardenLink
                    href={`/garden?format=${PostFormat.ShowNTell}`}
                  >
                    Show 'n tells
                  </StyledGardenLink>
                  <StyledGardenLink href={`/garden?format=${PostFormat.TIL}`}>
                    TILs
                  </StyledGardenLink>
                  <StyledGardenLink href={`/garden?format=${PostFormat.Note}`}>
                    Notes
                  </StyledGardenLink>
                  <StyledGardenLink href={"/tour"}>Tour</StyledGardenLink>
                </StyledGardenLi>
              </StyledGardenUl>
            </StyledLeftColumn>
            <StyledRightColumn>
              <StyledNavUl>
                <li>
                  <StyledLink href="/about">About</StyledLink>
                </li>
                <li>
                  <StyledLink href="/talks">Talks</StyledLink>
                </li>
                <li>
                  <StyledLink href="/art">Art</StyledLink>
                </li>
                <li>
                  <StyledLink href="/wishlist">Wishlist</StyledLink>
                </li>
                <li>
                  <StyledLink href="/blogroll">Blogroll</StyledLink>
                </li>
                <li>
                  <StyledExternalLink
                    href="https://weeksofyour.life"
                    target="_blank"
                  >
                    weeksofyour.life
                  </StyledExternalLink>
                </li>
              </StyledNavUl>
            </StyledRightColumn>
          </StyledColumnWrapper>
          <StyledRowWrapper>
            <EmailSignup />
            <div>
              <StyledIconUl>
                <li>
                  <StyledRssIconLink href="/rss.xml" target="_blank">
                    <RssIcon />
                    <VisuallyHidden>
                      RSS feed for petemillspaugh.com
                    </VisuallyHidden>
                  </StyledRssIconLink>
                </li>
                <li>
                  <StyledIconLink
                    href="https://github.com/pmillspaugh"
                    target="_blank"
                  >
                    <GitHubIcon />
                    <VisuallyHidden>Pete Millspaugh on GitHub</VisuallyHidden>
                  </StyledIconLink>
                </li>
                <li>
                  <StyledIconLink
                    href="https://twitter.com/pete_millspaugh"
                    target="_blank"
                  >
                    <TwitterIcon />
                    <VisuallyHidden>Pete Millspaugh on Twitter</VisuallyHidden>
                  </StyledIconLink>
                </li>
                <li>
                  <StyledIconLink
                    href="https://www.val.town/u/petermillspaugh"
                    target="_blank"
                  >
                    <ValTownIcon />
                    <VisuallyHidden>Pete Millspaugh on Val Town</VisuallyHidden>
                  </StyledIconLink>
                </li>
              </StyledIconUl>
              <StyledCopyright>
                © 2023{" "}
                <a href="mailto:pete@petemillspaugh.com">Pete Millspaugh</a>
              </StyledCopyright>
            </div>
          </StyledRowWrapper>
        </StyledNav>
      </StyledWrapper>
    </footer>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  background-color: var(--dark-green);
  position: relative;
`;

const StyledNav = styled.nav`
  padding: 48px 16px;
  padding-bottom: 96px;
  margin: 0 auto;
  color: var(--white);

  @media (min-width: 592px) {
    width: 592px;
  }

  @media (min-width: 768px) {
    width: 660px;
  }

  @media (min-width: 1200px) {
    width: 800px;
    font-size: 1.25rem;
  }

  /* Cover up black svg stroke */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--dark-green);
    border-bottom: 1px solid var(--dark-green);
  }
`;

const StyledColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLeftColumn = styled.div``;

const StyledGardenUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledExternalLink = styled.a`
  color: var(--white);
  text-decoration-color: var(--gold);

  &:hover {
    color: var(--gold);
  }
`;

const StyledLink = styled(StyledExternalLink)``;

const StyledGardenLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  padding-bottom: 16px;
`;

const StyledGardenLink = styled(Link)`
  color: var(--white);
  font-style: italic;
  text-decoration: none;

  &:hover {
    color: var(--gold);
  }
`;

const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const StyledNavUl = styled.ul`
  flex-grow: 1;
  margin-left: auto;
  text-align: right;

  & > li {
    padding-bottom: 4px;
  }
`;

const StyledRowWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 32px;

  @media (min-width: 592px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
`;

const StyledIconUl = styled.ul`
  display: flex;
  gap: 16px;
`;

const StyledIconLink = styled.a`
  width: 48px;
  height: 48px;
  color: var(--white);

  &:hover {
    color: var(--gold);
  }
`;

const StyledRssIconLink = styled(Link)`
  width: 48px;
  height: 48px;
  color: var(--white);

  &:hover {
    color: var(--gold);
  }
`;

const StyledCopyright = styled.p`
  margin-bottom: -2px;
  padding-top: 8px;
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 0.79rem;
  font-weight: 600;
  text-align: right;

  & > a {
    color: var(--white);
    text-decoration: none;
  }

  & > a:hover {
    color: var(--gold);
  }
`;

export default Footer;
