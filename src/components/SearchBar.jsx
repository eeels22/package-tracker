// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Constants
  const history = useHistory();
  const { t } = useTranslation();

  // Methods
  function search(event) {
    event.preventDefault();
    history.push(`/results/${query}`);
    setQuery("");
  }

  return (
    <div>
      <form onSubmit={search} className="SearchBar">
        <label
          htmlFor="sender-search"
          className="search-label"
          id="search-label"
        >
          {t("common.searchLabel")}
        </label>
        <div className="search-input">
          <input
            type="text"
            id="sender-search"
            placeholder={t("common.placeholder")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="search-box"
          />
          <input
            type="submit"
            value={t("common.searchButton")}
            className="search-button"
          />
        </div>
      </form>
    </div>
  );
}
