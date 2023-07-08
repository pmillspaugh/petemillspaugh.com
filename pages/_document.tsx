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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" property="og:title" content="Peter Millspaugh" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          property="og:description"
          content="Peter Millspaugh – Frontend Developer excited about Web Accessibility and PWAs"
        />
        <meta property="og:url" content="https://www.petermillspaugh.com/" />
        <meta
          name="image"
          property="og:image"
          content={`https://${this.props.deploymentURL}/images/socialBanner.png`}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PMDocument;
