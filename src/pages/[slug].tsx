import Head from "next/head";
import type { GetStaticProps, GetStaticPaths } from "next";
import {
  getPostPaths,
  getPostData,
  PostParams,
} from "@/helpers/garden.helpers";
import Post, { PostProps } from "@/components/Post";

const PostPage = ({ mdxSource, metadata }: PostProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.title} />
      </Head>
      <Post mdxSource={mdxSource} metadata={metadata} />
    </>
  );
};

export const getStaticPaths = (async () => {
  const paths = getPostPaths();

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }: PostParams) => {
  const { mdxSource, metadata } = await getPostData(params.slug);

  return {
    props: { mdxSource, metadata },
  };
}) satisfies GetStaticProps;

export default PostPage;
