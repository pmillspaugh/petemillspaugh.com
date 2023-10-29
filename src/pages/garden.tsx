import Head from "next/head";
import { getPostData, getPostPaths } from "@/helpers/garden.helpers";
import Garden, { GardenProps } from "@/components/Garden";

const GardenPage = ({ posts }: GardenProps) => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Garden</title>
        <meta name="description" content="Pete Millspaugh - Garden" />
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

  return {
    props: {
      posts,
    },
  };
}

export default GardenPage;
