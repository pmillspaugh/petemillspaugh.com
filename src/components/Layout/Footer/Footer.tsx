import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LightModeContext } from "pages/_app";
import styled from "styled-components";
import NewfoundLake from "./NewfoundLake";
import { PostFormat } from "@/components/Garden";
import GitHubIcon from "./GithubIcon";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import ValTownIcon from "./ValTownIcon";
import TwitterIcon from "./TwitterIcon";

const Footer = () => {
  const { lightMode } = useContext(LightModeContext);
  const isHomePage = useRouter().pathname === "/";

  return (
    <footer>
      <NewfoundLake lightMode={lightMode} />
      {!isHomePage && (
        <StyledWrapper>
          <StyledNav>
            <StyledUl>
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
              </StyledGardenLi>
              <li>
                <StyledLink href="/about">About</StyledLink>
              </li>
              <li>
                <StyledLink href="/talks">Talks</StyledLink>
              </li>
              <li>
                <StyledLink href="/wishlist">Wishlist</StyledLink>
              </li>
            </StyledUl>
            <StyledIconUl>
              <li>
                <StyledIconLink
                  href="https://github.com/pmillspaugh"
                  target="_blank"
                >
                  <GitHubIcon />
                  <VisuallyHidden.Root>
                    Pete Millspaugh on GitHub
                  </VisuallyHidden.Root>
                </StyledIconLink>
              </li>
              <li>
                <StyledIconLink
                  href="https://www.val.town/u/petermillspaugh"
                  target="_blank"
                >
                  <ValTownIcon />
                  <VisuallyHidden.Root>
                    Pete Millspaugh on Val Town
                  </VisuallyHidden.Root>
                </StyledIconLink>
              </li>
              <li>
                <StyledIconLink
                  href="https://twitter.com/pete_millspaugh"
                  target="_blank"
                >
                  <TwitterIcon />
                  <VisuallyHidden.Root>
                    Pete Millspaugh on Twitter
                  </VisuallyHidden.Root>
                </StyledIconLink>
              </li>
            </StyledIconUl>
            {/* TODO: © 2023 Peter Millspaugh */}
          </StyledNav>
        </StyledWrapper>
      )}
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
    width: 520px;
  }

  @media (min-width: 768px) {
    width: 660px;
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

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  color: var(--white);
  box-shadow: 0px 1.25px 0px var(--gold);

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
  box-shadow: none;
`;

const StyledIconUl = styled.ul`
  li {
    list-style: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 8px;
`;

const StyledIconLink = styled.a`
  width: 48px;
  height: 48px;
  color: var(--white);
`;

export default Footer;
