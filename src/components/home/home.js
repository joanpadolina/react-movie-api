import React, { useState, useEffect } from "react";
import MovieList from "../movie-list/movie-list.js";
import { ApiCall } from "../../utils/movie-api";

export default function Home({ movies }) {
  const [query, setQuery] = useState("popular");
  const [data, setData] = useState(movies);

  useEffect(() => {
    apiData(query);
  }, [query]);

  async function apiData(query) {
    const apiData = await ApiCall(query);
    setData(apiData);
  }

  function changeQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <main>
        <section>
          <select onChange={(e) => changeQuery(e)} type="select">
            <option>popular</option>
            <option>now_playing</option>
            <option>top_rated</option>
            <option>upcoming</option>
          </select>
        </section>
        <section>
          <MovieList props={data} />
        </section>
      </main>
    </div>
  );
}
