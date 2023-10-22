import { useState, useEffect } from "react";
import * as pagefind from "@/public/pagefind/pagefind.js";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch() {
    console.log("=== handleSearch ===");
    if (pagefind) {
      console.log("=== pagefind is populated ===");
      console.log({ pagefind });
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

  async function fetchData() {
    const data = await result.data();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <a href={data.url}>
      <h3>{data.meta.title}</h3>
      <p>{data.excerpt}</p>
    </a>
  ) : null;
}
