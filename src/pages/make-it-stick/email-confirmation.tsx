import Head from "next/head";
import EmailConfirmation from "@/components/EmailConfirmation";

const MakeItStickEmailConfirmationPage = () => {
  return (
    <>
      <Head>
        <title>
          Email confirmation for: Make It Stick (in 10 days, via email)
        </title>
        <meta
          name="description"
          content="Email confirmation for: Make It Stick (in 10 days, via email)"
        />
      </Head>
      <EmailConfirmation
        confirmationUrl="https://petermillspaugh-emailCourseCreator.web.val.run/confirm-verification"
        heading="Thanks for signing up!"
        body={
          <>
            The first lesson of <em>Make It Stick (in 10 days, via email)</em>{" "}
            should show up in your inbox any second now. If you don’t see it,
            shoot me an email me at{" "}
            <a href="mailto:pete@petemillspaugh.com">pete@petemillspaugh.com</a>
            , and I'd be glad to help sort it out.
          </>
        }
      />
    </>
  );
};

export default MakeItStickEmailConfirmationPage;
