import React, { useState, useEffect } from "react";
import { SearchMovies } from "../../utils/movie-api";
import MovieList from "../movie-list/movie-list.js";

export default function Search() {
  const [query, setQuery] = useState("");
  const [liveQuery, setLiveQuery] = useState('')
  const [movieData, setMovieData] = useState([] || "");

  useEffect(() => {
    async function searchQuery() {
      const data = await SearchMovies(liveQuery);
      return setMovieData(data.results);
    }
    searchQuery();
  }, [liveQuery]);

  function submitQuery(e) {
    e.preventDefault();
    setQuery(e.target[0].value);
  }

  return (
    <div>
      <form onSubmit={(e) => submitQuery(e)}>
        <input type="text" onChange={e => setLiveQuery(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <h2> {query} </h2>
      {movieData && <MovieList props={movieData} />}
    
    </div>
  );
}
