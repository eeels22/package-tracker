// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Constants
  const history = useHistory();

  // Methods
  function search(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <div className="SearchBar">
      <form onSubmit={search}>
        <label htmlFor="sender-search" className="search-label">
          Search parcels by sender
        </label>
        <input
          type="text"
          id="sender-search"
          placeholder="Enter name of sender"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
