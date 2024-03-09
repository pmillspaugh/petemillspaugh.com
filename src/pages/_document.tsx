import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class GardenDocument extends Document {
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

      return {
        ...initialProps,
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
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Pete Millspaugh's digital garden"
        />
        <meta
          name="image"
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/images/og-image.png`}
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
        </body>
      </Html>
    );
  }
}

export default GardenDocument;
