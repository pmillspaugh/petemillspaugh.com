import Head from "next/head";
import { getPostData, getPostPaths } from "@/helpers/garden.helpers";
import Garden, { GardenProps } from "@/components/Garden";

const GardenPage = ({ posts }: GardenProps) => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Garden</title>
        <meta
          name="title"
          property="og:title"
          content="Notes, TILs, Brainstorms, Essays, Show 'n tells, and Clippings from Pete's garden"
        />
      </Head>
      <Garden posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const paths = getPostPaths();
  const posts = [];
  for (const { params } of paths) {
    const { metadata } = await getPostData(params.slug);
    posts.push(metadata);
  }

  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return {
    props: {
      posts,
    },
  };
}

export default GardenPage;
