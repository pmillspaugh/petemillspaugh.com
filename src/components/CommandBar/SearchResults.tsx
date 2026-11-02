import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";

const SearchResults = ({ results, handleClick }) => {
  return (
    <StyledUl>
      {results.map((result) => (
        <ResultRow key={result.id} result={result} handleClick={handleClick} />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ResultRow = ({ result, handleClick }) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);

      const path = data.url.match(/\/([^/]+)\.html$/);
      const url = path ? path[1] : "";
      setUrl(url);
    }

    fetchData();
  }, [result]);

  const resultHtml = useMemo(() => {
    if (!data) return "";
    return data.sub_results.map((sub) => sub.excerpt).join("... ");
  }, [data]);

  if (!data || !url) return null;

  return (
    <li>
      <StyledLink href={url} onClick={handleClick}>
        <StyledH3>{data.meta.title}</StyledH3>
        <StyledP dangerouslySetInnerHTML={{ __html: resultHtml }} />
      </StyledLink>
    </li>
  );
};

const StyledLink = styled(Link)`
  display: block;
  padding: 16px;
  border: 2px solid var(--link-text-color);
  border-radius: 4px;
  color: var(--text-color);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: var(--link-text-color);
    color: var(--primary-bg);
  }
`;

const StyledH3 = styled.h3`
  font-family: var(--font-open-sans);
  font-weight: 800;
  text-wrap: balance;
  padding-bottom: 8px;
`;

const StyledP = styled.p`
  font-size: 0.875rem;
  text-wrap: pretty;

  &::before,
  &::after {
    content: "...";
  }

  & mark {
    color: var(--text-color);
    background-color: var(--link-text-color-hover);
    padding: 2px;
    border-radius: 2px;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export default SearchResults;
