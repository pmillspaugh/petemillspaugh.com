import { createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import "@code-hike/mdx/dist/index.css";
import Layout from "@/components/Layout";
import { CSSReset } from "@/styles/cssReset";
import { GlobalStyle } from "@/styles/globals";
import { lightTheme, darkTheme } from "@/styles/themes";
import useLightMode from "@/hooks/useLightMode.hook";

// TODO: move this to a shared /types/index.d.ts file included in tsconfig.json
declare global {
  interface Window {
    pagefind: any;
  }
}

export const LightModeContext = createContext(null);

const App = ({ Component, pageProps }) => {
  const { lightMode, setLightMode } = useLightMode();

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind generated after build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (error) {
          window.pagefind = {
            debouncedSearch: () => ({
              results: [
                {
                  id: "pretzels",
                  data: async () => ({
                    url: "/pretzels.html",
                    meta: { title: "These pretzels are making me thirsty" },
                    excerpt:
                      "these <mark>pretzels</mark> are making me thirsty",
                  }),
                },
              ],
            }),
          };
        }
      }
    }
    loadPagefind();
  }, []);

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
        <CSSReset />
        <GlobalStyle />
      </ThemeProvider>
    </LightModeContext.Provider>
  );
};

export default App;
