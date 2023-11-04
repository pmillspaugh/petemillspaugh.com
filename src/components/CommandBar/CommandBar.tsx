import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import VisuallyHidden from "@/components/VisuallyHidden";
import Dialog from "@/components/Dialog";
import SearchResults from "./SearchResults";
import Nav from "./Nav";

const CommandBar = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        (event.metaKey && event.key === "k") || // For macOS (Command+K)
        (event.ctrlKey && event.key === "k") // For Windows/Linux (Ctrl+K)
      ) {
        setDialogIsOpen(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleDialogOpenChange() {
    if (dialogIsOpen) {
      setDialogIsOpen(false);
      setQuery("");
      return;
    }

    setDialogIsOpen(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }

  async function handleSearch() {
    if (window.pagefind) {
      const search = await window.pagefind.search(query);
      setResults(search.results);
    }
  }

  return (
    <Dialog
      open={dialogIsOpen}
      onOpenChange={handleDialogOpenChange}
      srTitle="Search and explore"
      srDescription="Find content by searching, or follow navigation links."
      trigger={children}
    >
      <search>
        <form onSubmit={(e) => e.preventDefault()}>
          <VisuallyHidden>
            <label htmlFor="search">Search</label>
          </VisuallyHidden>
          <StyledInput
            type="text"
            id="search"
            placeholder="Search the garden"
            ref={searchInputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onInput={handleSearch}
          />
        </form>
        {query ? (
          <SearchResults
            results={results}
            handleClick={handleDialogOpenChange}
          />
        ) : (
          <Nav handleClick={handleDialogOpenChange} />
        )}
      </search>
    </Dialog>
  );
};

const StyledInput = styled.input`
  width: calc(100% - 52px);
  background-color: ${(p) => p.theme.primaryBg};
  border: 2px solid ${(p) => p.theme.textColor};
  border-radius: 4px;
  padding: 8px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
`;

export default CommandBar;
