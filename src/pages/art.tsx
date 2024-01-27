import Head from "next/head";
import Art from "@/components/Art";

const ArtPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Art</title>
        <meta name="description" content="Pete Millspaugh - Art" />
      </Head>
      <Art />
    </>
  );
};

export default ArtPage;
