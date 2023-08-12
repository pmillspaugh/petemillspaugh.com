import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
import { CSSReset } from "@/styles/cssReset";
import { GlobalStyle } from "@/styles/globals";
import { lightTheme, darkTheme } from "@/styles/themes";

const App = ({ Component, pageProps }) => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Layout lightMode={lightMode} setLightMode={setLightMode}>
        <Component {...pageProps} />
      </Layout>
      <CSSReset />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
