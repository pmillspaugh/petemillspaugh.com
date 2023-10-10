import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Analytics } from "@vercel/analytics/react";

interface PMDocumentProps {
  deploymentURL: string;
}

class PMDocument extends Document<PMDocumentProps> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const deploymentURL = process.env.NEXT_PUBLIC_VERCEL_URL;

      return {
        ...initialProps,
        deploymentURL,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <meta name="title" property="og:title" content="Pete Millspaugh" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Pete Millspaugh"
        />
        <meta property="og:url" content="https://www.petermillspaugh.com/" />
        <meta
          name="image"
          property="og:image"
          content={`https://${this.props.deploymentURL}/images/socialBanner.png`}
        />
        {/* TODO: add other favicon formats for Apple/Android/etc? */}
        <link
          rel="icon"
          href="/icons/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/icons/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default PMDocument;
