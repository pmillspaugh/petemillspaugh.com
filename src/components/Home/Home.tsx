import Link from "next/link";
import styled from "styled-components";
import LeafIcon from "./LeafIcon";

const Home = ({ randomSlug }: { randomSlug: string }) => {
  return (
    <StyledHome>
      <StyledH1>
        <Firstname>Pete</Firstname>
        <Lastname>Millspaugh</Lastname>
      </StyledH1>
      <StyledNav>
        <StyledGardenLinkWrapper>
          <StyledGardenLink href="/garden">
            Visit the garden <LeafIcon size="20" />
          </StyledGardenLink>
        </StyledGardenLinkWrapper>
        <em>
          Or, read <Link href={`/${randomSlug}`}>something random</Link>
        </em>
      </StyledNav>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  padding-bottom: 32px;
  text-align: center;
`;

const Firstname = styled.div`
  font-size: 5rem;
  font-weight: 400;
  line-height: 0.875;
`;

const Lastname = styled.div`
  font-size: 3rem;
  font-weight: 200;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: var(--font-petrona);
`;

const StyledGardenLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid var(--black);
  box-shadow: none;
  background-color: ${(p) => p.theme.tooltipBg};
  font-family: var(--font-open-sans);
  color: ${(p) => p.theme.textColor};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    font-weight: 800;

    svg {
      stroke-width: 3;
      transition: stroke-width var(--base-timing) ease-out;
    }
  }
`;

const StyledGardenLinkWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid var(--black);
  background-color: ${(p) => p.theme.tagBorderColor};
  padding: 3px;
`;

export default Home;
