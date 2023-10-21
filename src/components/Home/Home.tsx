import { useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";
import Search from "@/components/Search";
import { PostParams } from "@/helpers/garden.helpers";

const Home = ({ postPaths }: { postPaths: PostParams[] }) => {
  const randomSlug = useMemo(() => {
    const index = Math.floor(Math.random() * postPaths.length);
    const slug = postPaths[index].params.slug;
    return slug;
  }, [postPaths]);

  return (
    <StyledHome>
      <StyledH1>
        <Firstname>Pete</Firstname>
        <Lastname>Millspaugh</Lastname>
      </StyledH1>
      <StyledCta>
        <Search />
        <em>
          Or, read <Link href={`/${randomSlug}`}>something random</Link>
        </em>
      </StyledCta>
    </StyledHome>
  );
};

const StyledCta = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: var(--font-petrona);
`;

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

export default Home;
