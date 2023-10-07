import Link from "next/link";
import styled from "styled-components";
import { PostFormatDescription, PostMetadata } from "@/components/Post";
import Tag from "@/components/Post/Tag";
import { COLORS } from "@/styles/themes";

const PlantRow = ({ title, slug, format, status, updatedAt }: PostMetadata) => {
  return (
    <>
      <StyledLink href={`/${slug}`}>{title}</StyledLink>
      <StyledMetadata>
        <Tag
          label={format}
          trigger={
            <StyledTagLabel>{PostFormatDescription[format]}</StyledTagLabel>
          }
        />
        ,{" "}
        <Tag
          label={status}
          trigger={<StyledTagLabel>{status}</StyledTagLabel>}
        />
        <StyledTimestamp>
          <time dateTime={new Date(updatedAt).toISOString()}>
            Last watered:{" "}
            {new Date(updatedAt)
              .toLocaleString("en-US", { month: "short", year: "2-digit" })
              .replace(" ", " ’")}
          </time>
        </StyledTimestamp>
      </StyledMetadata>
    </>
  );
};

export default PlantRow;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: ${(p) => p.theme.textColor};
  box-shadow: none;
  margin-left: -2px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledMetadata = styled.div`
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.75rem;
  color: ${(p) => p.theme.textColor};
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-top: 4px;
    font-size: 0.875rem;
  }
`;

const StyledTagLabel = styled.span`
  font-family: var(--font-mono);
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

const StyledTimestamp = styled.span`
  font-family: var(--font-open-sans);
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 400;
  color: ${(p) => p.theme.dateTextColor};

  &::before {
    content: " ◆ ";
    padding: 0 3px;
    font-size: 0.875rem;
    font-style: normal;
    opacity: 0.75;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
