import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  getPostPaths,
  getPostData,
  PostMetadata,
  PostParams,
} from "@/helpers/garden.helpers";

const PostPage = ({
  body,
  metadata,
}: {
  body: MDXRemoteSerializeResult;
  metadata: PostMetadata;
}) => {
  const { title, createdAt, updatedAt, format, status } = metadata;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <h1>{title}</h1>
      <p>
        {createdAt} | {updatedAt} | {format} | {status}
      </p>
      <MDXRemote {...body} />
    </>
  );
};

export async function getStaticPaths() {
  const paths = getPostPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PostParams) {
  const { body, metadata } = await getPostData(params.slug);

  return {
    props: { body, metadata },
  };
}

export default PostPage;
