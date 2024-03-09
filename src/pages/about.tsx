import Head from "next/head";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | About</title>
        <meta
          name="title"
          property="og:title"
          content="About Pete & Pete's garden"
        />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
