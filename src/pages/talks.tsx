import Head from "next/head";
import Talks from "@/components/Talks";

const TalksPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Talks</title>
        <meta
          name="title"
          property="og:title"
          content="Talks from Pete's garden"
        />
        <meta property="og:url" content="https://petemillspaugh.com/talks" />
      </Head>
      <Talks />
    </>
  );
};

export default TalksPage;
