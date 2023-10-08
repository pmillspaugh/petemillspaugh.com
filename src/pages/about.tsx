import Head from "next/head";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | About</title>
        <meta name="description" content="Pete Millspaugh - About" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
