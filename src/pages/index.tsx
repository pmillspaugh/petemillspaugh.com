import Head from "next/head";
import type { GetStaticProps } from "next";
import { getPostPaths } from "@/helpers/garden.helpers";
import Home from "@/components/Home";
import { ComponentProps } from "react";

const HomePage = ({ postPaths }: ComponentProps<typeof Home>) => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh</title>
      </Head>
      <Home postPaths={postPaths} />
    </>
  );
};

export const getStaticProps = (async () => {
  const postPaths = getPostPaths();
  return { props: { postPaths } };
}) satisfies GetStaticProps;

export default HomePage;
