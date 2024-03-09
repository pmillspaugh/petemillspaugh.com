import Head from "next/head";
import Art from "@/components/Art";

const ArtPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Art</title>
        <meta
          name="title"
          property="og:title"
          content="Art from Pete's garden"
        />
      </Head>
      <Art />
    </>
  );
};

export default ArtPage;
