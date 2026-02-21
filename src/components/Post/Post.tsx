import styled from "styled-components";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";

import { components } from "@/components/index";
import { OuterWrapper, InnerWrapper } from "@/components/Garden";
import { PostFormatDescription, PostMetadata } from "./types";
import Tag from "./Tag";
import Backlinks from "./Backlinks";

export interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  metadata: PostMetadata;
  backlinks: PostMetadata[];
}

const Post = ({ mdxSource, metadata, backlinks }: PostProps) => {
  const { title, planted, watered, format, status } = metadata;

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  return (
    <>
      <StyledH1>{title}</StyledH1>
      <MetadataList data-pagefind-ignore>
        <li>
          Planted:{" "}
          <time dateTime={planted}>
            {formatDate(new Date(`${planted}T00:00:00`))}
          </time>
        </li>
        {planted !== watered && (
          <li>
            Last watered:{" "}
            <time dateTime={watered}>
              {formatDate(new Date(`${watered}T00:00:00`))}
            </time>
          </li>
        )}
        <TagsContainer>
          <li>
            <Tag
              label={format}
              trigger={
                <OuterWrapper>
                  <InnerWrapper>{PostFormatDescription[format]}</InnerWrapper>
                </OuterWrapper>
              }
            />
          </li>
          <li>
            <Tag
              label={status}
              trigger={
                <OuterWrapper>
                  <InnerWrapper>{status}</InnerWrapper>
                </OuterWrapper>
              }
            />
          </li>
        </TagsContainer>
      </MetadataList>
      <div>
        <MDXRemote {...mdxSource} components={components} />
      </div>
      {Boolean(backlinks.length) && <Backlinks backlinks={backlinks} />}
    </>
  );
};

const StyledH1 = styled.h1`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: -1px;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 16px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;

const MetadataList = styled.ul`
  padding-bottom: 24px;

  & > li {
    font-style: italic;
    font-weight: 300;
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem;
    padding-bottom: 44px;
  }
`;

export default Post;
