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
            <Link href={`/${slug}`} target="_blank">
              {title}
            </Link>
          </li>
        ))}
      </StyledUl>
    </>
  );
};

const StyledH2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 1.75rem;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const StyledUl = styled.ul`
  padding-left: 2px;

  & > li::before {
    content: "✦";
    padding-right: 8px;
    color: ${(p) => p.theme.linkTextColor};
  }
`;

export default Backlinks;
