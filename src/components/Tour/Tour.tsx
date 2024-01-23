import styled from "styled-components";
import { GardenProps } from "@/components/Garden";
import PlantRow from "@/components/Garden/PlantRow";
import Link from "next/link";

const Tour = ({ posts }: GardenProps) => {
  return (
    <>
      <StyledH1>Tour</StyledH1>
      <StyledP>
        This guided garden tour is here if you’re not sure what to read.
        Inspired by{" "}
        <a href="https://jvns.ca/categories/favorite/" target="_blank">
          Julia Evans’s favorites
        </a>
        . Or feel free to wander through the <Link href="/garden">garden</Link>{" "}
        on your own.
      </StyledP>
      <StyledUl>
        {posts.map((post) => (
          <li key={post.slug}>
            <PlantRow {...post} />
          </li>
        ))}
      </StyledUl>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const StyledP = styled.p`
  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 16px;
  }
`;

const StyledUl = styled.ul`
  margin-top: 16px;

  & > li {
    padding-bottom: 8px;
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;

    & > li {
      padding-bottom: 16px;
    }
  }
`;

export default Tour;
