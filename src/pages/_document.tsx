import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
        <meta name="title" property="og:title" content="Peter Millspaugh" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Peter Millspaugh — Software Engineer"
        />
        <meta property="og:url" content="https://www.petermillspaugh.com/" />
        <meta
          name="image"
          property="og:image"
          content={`https://${this.props.deploymentURL}/images/socialBanner.png`}
        />
        <link rel="icon" href="/favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PMDocument;
