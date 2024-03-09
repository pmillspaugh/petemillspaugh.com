import Head from "next/head";
import type { GetStaticProps } from "next";
import { getPostPaths } from "@/helpers/garden.helpers";
import Home from "@/components/Home";
import { ComponentProps } from "react";
import { generateRssFeed } from "@/helpers/rss.helpers";

const HomePage = ({ postPaths }: ComponentProps<typeof Home>) => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh</title>
        <meta name="title" property="og:title" content="Pete Millspaugh" />
        <meta property="og:url" content="https://petemillspaugh.com/" />
      </Head>
      <Home postPaths={postPaths} />
    </>
  );
};

export const getStaticProps = (async () => {
  const postPaths = getPostPaths();

  await generateRssFeed(postPaths);

  return { props: { postPaths } };
}) satisfies GetStaticProps;

export default HomePage;
