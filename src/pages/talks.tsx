import Head from "next/head";
import Talks from "@/components/Talks";

const TalksPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Talks</title>
        <meta name="description" content="Pete Millspaugh - Talks" />
      </Head>
      <Talks />
    </>
  );
};

export default TalksPage;
