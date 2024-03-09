import Head from "next/head";
import Blogroll from "@/components/Blogroll";

const BlogrollPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Blogroll</title>
        <meta
          name="title"
          property="og:title"
          content="Pete's garden blogroll"
        />
      </Head>
      <Blogroll />
    </>
  );
};

export default BlogrollPage;
