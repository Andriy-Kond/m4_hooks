import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsSearchForm from "./NewsSearchForm";

axios.defaults.headers.common["Authorization"] =
  "Bearer c439d9bd8a0f4e879b73f0b05ea17406";

const APIfetchArticles = async ({
  searchQuery = "",
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};

function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchArticles = () => {
      const options = { searchQuery, currentPage };

      setIsLoading(true);

      APIfetchArticles(options)
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]);
          setCurrentPage(currentPage => currentPage + 1);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    };

    fetchArticles();
  }, [currentPage, searchQuery]);

  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <div>
      {error && <h1>Error: {error.message}</h1>}

      <NewsSearchForm onSubmit={onChangeQuery} />

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={updatePage}>
          Load more
        </button>
      )}

      {isLoading && (
        <p style={{ fontSize: 24, display: "flex", alignItems: "center" }}>
          Loading...
          <span
            aria-label="The icon"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}>
            🔃
          </span>
        </p>
      )}
    </div>
  );
}

export default News;
