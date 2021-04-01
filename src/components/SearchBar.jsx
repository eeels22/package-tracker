// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Property
  const history = useHistory();

  // Methods
  function search(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <form onSubmit={search} className="SearchBar">
      <input
        type="text"
        placeholder="Search by sender name"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
