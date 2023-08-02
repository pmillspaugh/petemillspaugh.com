import Head from "next/head";
import Blog, { BlogProps } from "@/components/Blog";
import { getAllPosts } from "@/helpers/blog.helpers";

const BlogPage = ({ postsMetadata }: BlogProps) => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Blog</title>
        <meta name="description" content="Peter Millspaugh - Blog" />
      </Head>
      <Blog postsMetadata={postsMetadata} />
    </>
  );
};

export async function getStaticProps() {
  const postsMetadata = getAllPosts();

  return {
    props: {
      postsMetadata,
    },
  };
}

export default BlogPage;
