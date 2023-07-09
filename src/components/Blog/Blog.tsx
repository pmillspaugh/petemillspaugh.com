import Link from "next/link";
import AnchorLink from "@/components/utils/AnchorLink";
import HomeLink from "@/components/HomeLink";
import Layout from "@/components/utils/Layout";
import MaxWidthWrapper from "@/components/utils/MaxWidthWrapper";
import PageHeader from "@/components/utils/PageHeader";
import Paragraph from "@/components/utils/Paragraph";
import Spacer from "@/components/utils/Spacer";
import { PostMetadata } from "./Post";

export interface BlogProps {
  postsMetadata: PostMetadata[];
}

const Blog = ({ postsMetadata }: BlogProps) => {
  return (
    <>
      {/* TODO: move home navlink and Layout to shared component rendered in app.tsx */}
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page="Blog" />
          <Paragraph>
            If you find yourself here on my blog placeholder, thanks for digging
            around!
          </Paragraph>
          <Spacer size="20px" />
          <Paragraph>
            I have a handful of half-baked essays that I hope to start shipping
            soonish. Right now (July '23) I am having fun tinkering with and
            writing about Web/browser APIs, so my first post will likely be
            about that.
          </Paragraph>
          <h2>Posts</h2>
          <ul>
            {postsMetadata.map((postMetadata) => (
              <li key={postMetadata.slug}>
                <Link
                  href={`/blog/${postMetadata.slug}`}
                  passHref
                  legacyBehavior
                >
                  <AnchorLink>{postMetadata.title}</AnchorLink>
                </Link>
              </li>
            ))}
          </ul>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

export default Blog;
