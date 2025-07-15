import Head from "next/head";
import Bookshelf from "@/components/Bookshelf";

export default function BookshelfPage() {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Bookshelf</title>
        <meta
          name="title"
          property="og:title"
          content="Pete's garden bookshelf"
        />
        <meta
          property="og:url"
          content="https://petemillspaugh.com/bookshelf"
        />
      </Head>
      <Bookshelf />
    </>
  );
}
