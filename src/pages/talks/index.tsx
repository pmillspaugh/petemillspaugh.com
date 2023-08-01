import Talks from "@/components/Talks";
import Head from "next/head";

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
