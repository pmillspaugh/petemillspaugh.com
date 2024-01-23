import Head from "next/head";
import Blogroll from "@/components/Blogroll";

const BlogrollPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Blogroll</title>
        <meta name="description" content="Pete Millspaugh - Blogroll" />
      </Head>
      <Blogroll />
    </>
  );
};

export default BlogrollPage;
