import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/themes";
import { CSSReset, GlobalStyle } from "@/styles/globals";
import ThemeToggle from "@/components/ThemeToggle";

const App = ({ Component, pageProps }) => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Wrapper>
        <ThemeToggle lightMode={lightMode} setLightMode={setLightMode} />
        <Component {...pageProps} />
      </Wrapper>
      <CSSReset />
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: ${(p) => p.theme.primaryBg};
`;

export default App;
