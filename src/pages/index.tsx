import Head from "next/head";
import { getPostPaths } from "@/helpers/garden.helpers";
import Home from "@/components/Home";
import { generateRssFeed } from "@/helpers/rss.helpers";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh</title>
        <meta name="title" property="og:title" content="Pete Millspaugh" />
        <meta property="og:url" content="https://petemillspaugh.com/" />
      </Head>
      <Home />
    </>
  );
};

/**
 * Generate RSS feed.
 * TODO: move to post-build script?
 */
export const getStaticProps = async () => {
  const postPaths = getPostPaths();
  await generateRssFeed(postPaths);
  return { props: {} };
};

export default HomePage;
