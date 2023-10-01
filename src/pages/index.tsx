import Head from "next/head";
import type { GetStaticProps } from "next";
import { getRandomPostPath } from "@/helpers/garden.helpers";
import Home from "@/components/Home";
import { ComponentProps } from "react";

const HomePage = ({ randomSlug }: ComponentProps<typeof Home>) => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh</title>
      </Head>
      <Home randomSlug={randomSlug} />
    </>
  );
};

export const getStaticProps = (async () => {
  const randomSlug = getRandomPostPath();
  return { props: { randomSlug } };
}) satisfies GetStaticProps;

export default HomePage;
