import Head from "next/head";
import Link from "next/link";
import EmailConfirmation from "@/components/EmailConfirmation";

const EmailConfirmationPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Email confirmation</title>
        <meta
          name="description"
          content="Pete Millspaugh | Email confirmation"
        />
      </Head>
      <EmailConfirmation
        confirmationUrl="https://petermillspaugh-emailSubscription.web.val.run/confirm-verification"
        heading="You’re all set!"
        body={
          <>
            I’ll send emails monthly-ish with things I write. In the meantime,
            you can read about <Link href="/silly-tlds">Silly TLDs</Link>,{" "}
            <Link href="/edison-bulb">Edison bulb night mode</Link>,{" "}
            <Link href="/map-in-the-woods">
              Downloading a 30MB map in the woods
            </Link>
            , or just wander through <Link href="/garden">the garden</Link>.
          </>
        }
      />
    </>
  );
};

export default EmailConfirmationPage;
