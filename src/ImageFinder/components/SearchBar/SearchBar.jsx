import { useState } from "react";
import { MdOutlineImageSearch } from "react-icons/md";

import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from "./SearchBar.styled";

function SearchBar({ onSetQuery }) {
  const [query, setQuery] = useState("");

  const changeQuery = e => {
    setQuery(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    onSetQuery(query);
    setQuery("");
  };

  return (
    <Header>
      <SearchForm onSubmit={submitForm}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={changeQuery}
        />
        <SearchFormBtn type="submit">
          <MdOutlineImageSearch
            style={{ width: "100%", height: "100%", fill: "blue" }}
          />
        </SearchFormBtn>
      </SearchForm>
    </Header>
  );
}

export default SearchBar;
