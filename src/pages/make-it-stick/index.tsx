import MakeItStickEmailSignup from "@/components/MakeItStick/EmailSignup";
import Head from "next/head";

const MakeItStickSignupPage = () => {
  return (
    <>
      <Head>
        <title>Sign up for Make It Stick (in 10 days, via email)</title>
        <meta
          name="description"
          content="Make It Stick (in 10 days, via email)"
        />
      </Head>
      <MakeItStickEmailSignup />
    </>
  );
};

export default MakeItStickSignupPage;
