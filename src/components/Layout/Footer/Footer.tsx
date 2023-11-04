import { useContext } from "react";
import Link from "next/link";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";
import { LightModeContext } from "pages/_app";
import { PostFormat } from "@/components/Post";
import NewfoundLake from "./NewfoundLake";
import GitHubIcon from "./GitHubIcon";
import ValTownIcon from "./ValTownIcon";
import TwitterIcon from "./TwitterIcon";

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <footer>
      <NewfoundLake lightMode={lightMode} />
      <StyledWrapper>
        <StyledNav>
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
              <StyledGardenLink href={`/garden?format=${PostFormat.ShowNTell}`}>
                Show 'n tells
              </StyledGardenLink>
              <StyledGardenLink href={`/garden?format=${PostFormat.TIL}`}>
                TILs
              </StyledGardenLink>
            </StyledGardenLi>
          </StyledGardenUl>
          <StyledSecondarySection>
            <StyledNavUl>
              <li>
                <StyledLink href="/about">About</StyledLink>
              </li>
              <li></li>
              <li>
                <StyledLink href="/wishlist">Wishlist</StyledLink>
              </li>
            </StyledNavUl>
            <StyledIconUl>
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
            <StyledCopyright>© 2023 Pete Millspaugh</StyledCopyright>
          </StyledSecondarySection>
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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: var(--white);

  @media (min-width: 592px) {
    width: 592px;
  }

  @media (min-width: 768px) {
    width: 660px;
  }

  @media (min-width: 1200px) {
    width: 800px;
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

const StyledGardenUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration-color: var(--gold);

  &:hover {
    color: var(--gold);
  }
`;

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

const StyledSecondarySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

const StyledNavUl = styled.ul`
  flex-grow: 1;
  margin-left: auto;
  text-align: right;
`;

const StyledIconUl = styled.ul`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

const StyledIconLink = styled.a`
  width: 48px;
  height: 48px;
  color: var(--white);
`;

const StyledCopyright = styled.p`
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
`;

export default Footer;
