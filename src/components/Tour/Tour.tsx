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
        <a href="https://jvns.ca/categories/favorite/">
          Julia Evans’s favorites
        </a>
        . Or feel free to wander through the <Link href="/garden">garden</Link>{" "}
        on your own.
      </StyledP>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <PlantRow {...post} />
          </li>
        ))}
      </ul>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16px;
  margin-left: -2px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const StyledP = styled.p`
  margin-bottom: 32px;

  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 1.75;
  }
`;

export default Tour;
