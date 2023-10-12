import styled from "styled-components";
import Link from "next/link";
import { PostMetadata } from "./types";

const Backlinks = ({ backlinks }: { backlinks: PostMetadata[] }) => {
  return (
    <StyledSection>
      <StyledDivider />
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
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-top: 20px;
`;

const StyledDivider = styled.hr`
  border-top: 2px solid ${(p) => p.theme.textColor};
  border-bottom: 2px solid ${(p) => p.theme.textColor};
  border-left: none;
  border-right: none;
  height: 8px;
`;

const StyledH2 = styled.h2`
  margin-top: 16px;
  margin-bottom: 8px;
  font-family: var(--font-mono), monospace;
  font-size: 1.5rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: 200;
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
