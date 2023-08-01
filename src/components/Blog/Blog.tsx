import Link from "next/link";
import AnchorLink from "@/components/lib/AnchorLink";
import PageHeader from "@/components/lib/PageHeader";
import Paragraph from "@/components/lib/Paragraph";
import Spacer from "@/components/lib/Spacer";
import { PostMetadata } from "./Post";

export interface BlogProps {
  postsMetadata: PostMetadata[];
}

const Blog = ({ postsMetadata }: BlogProps) => {
  return (
    <>
      <>
        <PageHeader page="Blog" />
        <Paragraph>
          If you find yourself here on my blog placeholder, thanks for digging
          around!
        </Paragraph>
        <Spacer size="20px" />
        <Paragraph>
          I have a handful of half-baked essays that I hope to start shipping
          soonish. Right now (July '23) I am having fun tinkering with and
          writing about Web/browser APIs, so my first post will likely be about
          that.
        </Paragraph>
        <h2>Posts</h2>
        <ul>
          {postsMetadata.map((postMetadata) => (
            <li key={postMetadata.slug}>
              <Link href={`/blog/${postMetadata.slug}`} passHref legacyBehavior>
                <AnchorLink>{postMetadata.title}</AnchorLink>
              </Link>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};

export default Blog;
