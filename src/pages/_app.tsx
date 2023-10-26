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
            // @ts-expect-error pagefind exists only on build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (error) {
          window.pagefind = {
            search: () => {
              return {
                results: [
                  {
                    id: "1",
                    data: async () => ({
                      url: "/_next/static/chunks/pages/server/pages/nextjs-automatic-webp.html",
                      meta: {
                        title: "Next.js automatically converts PNGs to WebP",
                      },
                      raw_url: "/server/pages/nextjs-automatic-webp.html",
                      excerpt:
                        "since <mark>the</mark> &lt;svg&gt; is rendered inline rather <mark>than</mark> serving a separate image file rendered in an &lt;img&gt; tag. <mark>The</mark> SVG is also more flexible (e.g. dynamic fill color based on",
                      sub_results: [
                        {
                          title: "Next.js automatically converts PNGs to WebP",
                          url: "/_next/static/chunks/pages/server/pages/nextjs-automatic-webp.html",
                          excerpt:
                            "since <mark>the</mark> &lt;svg&gt; is rendered inline rather <mark>than</mark> serving a separate image file rendered in an &lt;img&gt; tag. <mark>The</mark> SVG is also more flexible (e.g. dynamic fill color based on",
                        },
                      ],
                    }),
                  },
                  {
                    id: "2",
                    data: async () => ({
                      url: "/_next/static/chunks/pages/server/pages/edison-bulb.html",
                      meta: {
                        title: "Edison bulb night mode",
                      },
                      raw_url: "/server/pages/edison-bulb.html",
                      excerpt:
                        'dark)" /&gt; <mark>The</mark> click of <mark>the</mark> switch. My skeuomorphic light bulb wouldn’t be complete without <mark>the</mark> satisfying click of <mark>the</mark> switch. Toggle below to enable audio <mark>then</mark> turn <mark>the</mark> lights',
                      sub_results: [
                        {
                          title: "Edison bulb night mode",
                          url: "/_next/static/chunks/pages/server/pages/edison-bulb.html",
                          excerpt:
                            'dark)" /&gt; <mark>The</mark> click of <mark>the</mark> switch. My skeuomorphic light bulb wouldn’t be complete without <mark>the</mark> satisfying click of <mark>the</mark> switch. Toggle below to enable audio <mark>then</mark> turn <mark>the</mark> lights',
                        },
                      ],
                    }),
                  },
                  // {
                  //   id: "3",
                  //   data: async () => ({
                  //     url: "/_next/static/chunks/pages/server/pages/map-in-the-woods.html",
                  //     meta: {
                  //       title: "Downloading a 30MB map in the woods",
                  //       image:
                  //         "/_next/image?url=%2Fimages%2FAllTrails-map-download.jpeg&amp;w=640&amp;q=75",
                  //       image_alt: "AllTrails mobile map download",
                  //     },
                  //     raw_url: "/server/pages/map-in-the-woods.html",
                  //     excerpt:
                  //       "homepageSwitch <mark>to</mark> dark mode Downloading a 30MB map in <mark>the</mark> woods. Planted: June 26, 2023. Last watered: October 8, 2023. Brainstorm. Evergreen. <mark>This</mark> is my first attempt at a new,",
                  //     sub_results: [
                  //       {
                  //         title: "Downloading a 30MB map in the woods",
                  //         url: "/_next/static/chunks/pages/server/pages/map-in-the-woods.html",
                  //         excerpt:
                  //           "homepageSwitch <mark>to</mark> dark mode Downloading a 30MB map in <mark>the</mark> woods. Planted: June 26, 2023. Last watered: October 8, 2023. Brainstorm. Evergreen. <mark>This</mark> is my first attempt at a new,",
                  //       },
                  //     ],
                  //   }),
                  // },
                  // {
                  //   id: "4",
                  //   data: async () => ({
                  //     url: "/_next/static/chunks/pages/server/pages/canonical-link.html",
                  //     meta: {
                  //       title: "HTML canonical link",
                  //     },
                  //     raw_url: "/server/pages/canonical-link.html",
                  //     excerpt:
                  //       'link in <mark>the</mark> HTML head of each post, like <mark>this:</mark> &lt;link. rel="canonical" href="https://blog.logrocket.com/how-to-improve-interface-responsiveness-with-web-workers/" /&gt; From <mark>the</mark> MDN docs: canonical. Valid for &lt;link&gt;, it defines <mark>the</mark> preferred URL for <mark>the</mark> current',
                  //     sub_results: [
                  //       {
                  //         title: "HTML canonical link",
                  //         url: "/_next/static/chunks/pages/server/pages/canonical-link.html",
                  //         excerpt:
                  //           'link in <mark>the</mark> HTML head of each post, like <mark>this:</mark> &lt;link. rel="canonical" href="https://blog.logrocket.com/how-to-improve-interface-responsiveness-with-web-workers/" /&gt; From <mark>the</mark> MDN docs: canonical. Valid for &lt;link&gt;, it defines <mark>the</mark> preferred URL for <mark>the</mark> current',
                  //       },
                  //     ],
                  //   }),
                  // },
                ],
              };
            },
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
