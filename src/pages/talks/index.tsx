import Head from "next/head";
import Talks from "@/components/Talks";

const TalksPage = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Talks</title>
        <meta name="description" content="Peter Millspaugh - Talks" />
      </Head>
      <Talks />
    </>
  );
};

export default TalksPage;
