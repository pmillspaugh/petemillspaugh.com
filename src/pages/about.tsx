import Head from "next/head";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | About</title>
        <meta name="description" content="Peter Millspaugh - About" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
