import Link from "next/link";
import styled from "styled-components";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { LessonMetadata } from "@/helpers/makeItStick.helpers";
import { components } from "@/components/index";
import { OuterWrapper, InnerWrapper } from "@/components/Garden";
import Tag from "@/components/Post/Tag";

export interface LessonProps {
  mdxSource: MDXRemoteSerializeResult;
  metadata: LessonMetadata;
}

const Lesson = ({ mdxSource, metadata }: LessonProps) => {
  const { lesson, title, status } = metadata;

  return (
    <>
      <StyledH1>{title}</StyledH1>
      <StyledMetadata data-pagefind-ignore>
        <OuterWrapper>
          <InnerWrapper>Lesson {lesson + 1}</InnerWrapper>
        </OuterWrapper>
        <Tag
          label={status}
          trigger={
            <OuterWrapper>
              <InnerWrapper>{status}</InnerWrapper>
            </OuterWrapper>
          }
        />
      </StyledMetadata>
      <MDXRemote {...mdxSource} components={components} />
    </>
  );
};

const StyledH1 = styled.h1`
  margin: 16px 0;
  margin-left: -1px;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  text-wrap: balance; /* not supported in all browsers */

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
const StyledMetadata = styled.div`
  padding-bottom: 24px;
  display: flex;
  gap: 8px;

  @media (min-width: 1200px) {
    padding-bottom: 44px;
  }
`;

export default Lesson;
