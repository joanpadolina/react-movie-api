import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function Search({ searchQuery = () => {} }) {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const match = useRouteMatch();
  const newQuery = match.params.query;

  useEffect(() => {
    searchQuery(query ? query : '' || newQuery ? newQuery : " ");
  }, [query]);

  function submitQuery(e) {
    e.preventDefault();
    setQuery(e.target[0].value || newQuery);
    history.push(`/search/${query}`);
  }

  function submitOnChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => submitQuery(e)}>
        <input type="text" onChange={(e) => submitOnChange(e)} />
        <input type="submit" value="Submit" />
      </form>
      <h2> {query} </h2>
    </div>
  );
}
