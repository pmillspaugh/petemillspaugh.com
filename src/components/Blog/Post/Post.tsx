import Layout from "@/components/utils/Layout";
import MaxWidthWrapper from "@/components/utils/MaxWidthWrapper";
import HomeLink from "@/components/HomeLink";

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
}

export interface PostProps {
  post: {
    metadata: PostMetadata;
    htmlContent: string;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <main>
            <div>{post.metadata.date}</div>
            <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
          </main>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

export default Post;
