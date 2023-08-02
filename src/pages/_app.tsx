import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
import { CSSReset } from "@/styles/cssReset";
import { GlobalStyle } from "@/styles/globals";
import { lightTheme, darkTheme } from "@/styles/themes";

const App = ({ Component, pageProps }) => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <AppWrapper>
        <Layout lightMode={lightMode} setLightMode={setLightMode}>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
      <CSSReset />
      <GlobalStyle />
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  height: 100%;
  background-color: ${(p) => p.theme.primaryBg};
`;

export default App;
