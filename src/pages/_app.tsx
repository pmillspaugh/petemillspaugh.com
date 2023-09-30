import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import "@code-hike/mdx/dist/index.css";

import Layout from "@/components/Layout";
import { CSSReset } from "@/styles/cssReset";
import { GlobalStyle } from "@/styles/globals";
import { lightTheme, darkTheme } from "@/styles/themes";
import useLightMode from "@/hooks/useLightMode.hook";

export const LightModeContext = createContext(null);

const App = ({ Component, pageProps }) => {
  const { lightMode, setLightMode } = useLightMode();

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <TooltipProvider delayDuration={150}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <CSSReset />
          <GlobalStyle />
        </TooltipProvider>
      </ThemeProvider>
    </LightModeContext.Provider>
  );
};

export default App;
