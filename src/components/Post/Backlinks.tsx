import styled from "styled-components";
import Link from "next/link";
import { PostMetadata } from "./types";

const Backlinks = ({ backlinks }: { backlinks: PostMetadata[] }) => {
  return (
    <>
      <StyledH2>Backlinks</StyledH2>
      <StyledUl>
        {backlinks.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </StyledUl>
    </>
  );
};

const StyledH2 = styled.h2`
  margin: 16px 0;
  font-family: var(--font-open-sans);
  font-weight: 600;
`;

const StyledUl = styled.ul`
  padding-left: 2px;

  & > li::before {
    content: "✦";
    padding-right: 8px;
    color: ${(p) => p.theme.linkTextColor};
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`;

export default Backlinks;
