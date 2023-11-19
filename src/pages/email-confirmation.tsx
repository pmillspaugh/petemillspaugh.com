import Head from "next/head";
import EmailConfirmation from "@/components/EmailConfirmation";

const EmailConfirmationPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Email confirmation</title>
        <meta
          name="description"
          content="Pete Millspaugh - Email Confirmation"
        />
      </Head>
      <EmailConfirmation />
    </>
  );
};

export default EmailConfirmationPage;
