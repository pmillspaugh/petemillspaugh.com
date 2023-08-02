import Head from "next/head";
import Accessibility from "@/components/Talks/Accessibility";

const AccessibilityPage = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Web Accessibility</title>
        <meta
          name="description"
          content="Peter Millspaugh - Web Accessibility for Frontend Developers"
        />
      </Head>
      <Accessibility />
    </>
  );
};

export default AccessibilityPage;
