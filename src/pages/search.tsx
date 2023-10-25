import { useState, useEffect } from "react";

// TODO: move this to a shared /types/index.d.ts file included in tsconfig.json
declare global {
  interface Window {
    pagefind: any;
  }
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind exists only on build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (e) {
          window.pagefind = {
            search: () => ({
              results: [
                {
                  id: "mock-result-id",
                  data: async () => ({
                    url: "/map-in-the-woods",
                    meta: {
                      title: "Downloading a 30MB map in the woods",
                    },
                    excerpt:
                      "The first 128 characters of Unicode, for example, exactly match ASCII and take up one byte per char",
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

  async function handleSearch() {
    if (typeof window === "undefined") return;

    if (window.pagefind) {
      const search = await window.pagefind.search(query);
      console.log({ search });
      setResults(search.results);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <div id="results">
        {results.map((result, index) => (
          <Result key={index} result={result} />
        ))}
      </div>
    </div>
  );
}

function Result({ result }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }

    fetchData();
  }, [result]);

  return data ? (
    <a href={data.url}>
      <h3>{data.meta.title}</h3>
      <p>{data.excerpt}</p>
    </a>
  ) : null;
}
