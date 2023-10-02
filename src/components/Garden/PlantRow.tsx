import Link from "next/link";
import styled from "styled-components";
import { PostFormatDescription, PostMetadata } from "@/components/Post";
import Tag from "@/components/Post/Tag";

const PlantRow = ({ title, slug, format, status }: PostMetadata) => {
  return (
    <>
      <StyledLink href={`/${slug}`}>{title}</StyledLink>
      <StyledTagWrapper>
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
      </StyledTagWrapper>
    </>
  );
};

export default PlantRow;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(p) => p.theme.textColor};
  box-shadow: none;

  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const StyledTagWrapper = styled.div`
  padding-bottom: 24px;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 0.875rem;
  color: ${(p) => p.theme.textColor};
`;

const StyledTagLabel = styled.span`
  font-family: var(--font-mono);
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;
