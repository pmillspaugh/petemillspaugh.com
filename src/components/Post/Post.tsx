import styled from "styled-components";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";

import { components } from "@/components/index";
import { PostFormatDescription, PostMetadata } from "./types";
import Tag from "./Tag";
import { OuterWrapper, InnerWrapper } from "@/components/Garden";

export interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  metadata: PostMetadata;
}

const Post = ({ mdxSource, metadata }: PostProps) => {
  const { title, createdAt, updatedAt, format, status } = metadata;

  return (
    <>
      <StyledH1>{title}</StyledH1>
      <MetadataList>
        <li>
          Planted:{" "}
          <time dateTime={new Date(createdAt).toISOString()}>{createdAt}</time>
        </li>
        {createdAt !== updatedAt && (
          <li>
            Last watered:{" "}
            <time dateTime={new Date(createdAt).toISOString()}>
              {updatedAt}
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
    </>
  );
};

const StyledH1 = styled.h1`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: -1px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
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
`;

export default Post;
