import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import Layout from "@/components/Layout";
import { CSSReset } from "@/styles/cssReset";
import { GlobalStyle } from "@/styles/globals";
import { lightTheme, darkTheme } from "@/styles/themes";
import useLightMode from "@/hooks/useLightMode.hook";
import { components } from "@/components/lib";

const App = ({ Component, pageProps }) => {
  const { lightMode, setLightMode } = useLightMode();

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <MDXProvider components={components}>
        <Layout lightMode={lightMode} setLightMode={setLightMode}>
          <Component {...pageProps} />
        </Layout>
        <CSSReset />
        <GlobalStyle />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
