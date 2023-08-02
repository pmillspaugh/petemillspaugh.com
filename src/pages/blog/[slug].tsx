import Head from "next/head";
import Post, { PostProps } from "@/components/Blog/Post";
import {
  getAllPosts,
  getPostData,
  markdownToHtml,
} from "@/helpers/blog.helpers";

const PostPage = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post} />
    </>
  );
};

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { metadata, markdown } = getPostData(slug);
  const htmlContent = await markdownToHtml(markdown);

  return {
    props: {
      post: { metadata, htmlContent },
    },
  };
}

export default PostPage;
