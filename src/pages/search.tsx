import { useState, useEffect } from "react";

// TODO: ideally move this to a shared /types/index.d.ts file included in tsconfig.json, but that wasn't working
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
        console.log("=== pagefind is undefined ===");
        if (process.env.NODE_ENV === "development") {
          console.log("=== NODE_ENV is development ===");
          const pagefind = await import("../pagefind/pagefind.js");
          console.log({ pagefind });
          window.pagefind = pagefind;
        }
        console.log("=== NODE_ENV is production ===");
        const pagefind = await import("../pagefind/pagefind.js");
        console.log({ pagefind });
        window.pagefind = pagefind;
      }
    }
    console.log("=== pagefind is populated ===");
    console.log({ pagefind: window.pagefind });

    loadPagefind();
  }, []);

  async function handleSearch() {
    if (typeof window === "undefined") return;

    console.log("=== handleSearch ===");
    if (window.pagefind) {
      console.log("=== pagefind is populated ===");
      console.log({ pagefind: window.pagefind });
      // @ts-ignore
      const search = await pagefind.search(query);
      console.log("=== searching ===");
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
