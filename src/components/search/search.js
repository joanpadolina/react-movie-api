import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './search.css';

export default function Search({ searchQuery = () => {}, totalResults }) {
  const [query, setQuery] = useState('');
  const [addFocus, setAddFocus] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();
  const newQuery = match.params.query;

  useEffect(() => {
    searchQuery(query ? query : '' || newQuery ? newQuery : ' ');
  }, [query, addFocus]);

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
      <form
        className={`search__form${addFocus ? ' search--active' : ''}`}
        onSubmit={(e) => submitQuery(e)}
      >
        <input
          className="search__input"
          type="text"
          onFocus={() => setAddFocus(!addFocus)}
          onBlur={() => setAddFocus(!addFocus)}
          onChange={(e) => submitOnChange(e)}
        />
        <input className="search__submit" type="submit" value="Submit" />
      </form>
      {newQuery && (
        <h3 className="search__subject">
          You searched for: <span className="search__value"> {newQuery} </span>
           {totalResults} match found.
        </h3>
      )}
    </div>
  );
}
