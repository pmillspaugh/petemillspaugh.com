import { useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import CommandBar from "@/components/CommandBar";
import { PostParams } from "@/helpers/garden.helpers";

const Home = ({ postPaths }: { postPaths: PostParams[] }) => {
  const randomSlug = useMemo(() => {
    const index = Math.floor(Math.random() * postPaths.length);
    const slug = postPaths[index].params.slug;
    return slug;
  }, [postPaths]);

  // Note: navigator.platform is deprecated, but fallback to isWindows=false is ok
  const isWindows =
    typeof navigator !== "undefined" &&
    navigator.platform.toLowerCase().includes("win");

  return (
    <StyledHome>
      <StyledH1>
        <Firstname>Pete</Firstname>
        <Lastname>Millspaugh</Lastname>
      </StyledH1>
      <StyledCta>
        <CommandBar>
          <StyledTrigger>
            <div>Search / Explore</div>
            <StyledShortcut>
              <span>{isWindows ? "⌃" : "⌘"}</span>
              <span>K</span>
            </StyledShortcut>
          </StyledTrigger>
        </CommandBar>
        <em>
          Or, read <Link href={`/${randomSlug}`}>something random</Link>
        </em>
      </StyledCta>
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

const StyledCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: var(--font-petrona);
`;

const StyledTrigger = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  outline: 2px solid ${(p) => p.theme.tagBorderColor};
  padding: 8px 16px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: 768px) {
    padding: 8px;
  }

  &:focus {
    outline: revert;
    outline-offset: 4px;
  }

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.linkTextColor};
    border-color: ${(p) => p.theme.linkTextColor};
  }
`;

const StyledShortcut = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
  }

  & > span {
    padding: 0px 4px;
    border: 1.5px solid ${(p) => p.theme.textColor};
    border-radius: 2px;
  }

  button:hover > & > span {
    border: 1.5px solid ${(p) => p.theme.linkTextColor};
  }
`;

export default Home;
