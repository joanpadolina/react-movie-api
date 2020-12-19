import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { ApiCall, SearchMovies } from "./utils/movie-api";

import Search from "./components/search/search.js";
import Movie from "./components/movie/movie.js";
import MovieList from "./components/movie-list/movie-list";
import Home from "./components/home/home.js";
import Navigation from "./components/navbar/navbar.js";

import "./App.css";
import "./assets/css/index.css";

export default function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    apiData();
  }, [searchData]);

  async function apiData() {
    const apiData = await ApiCall("popular");
    setData(apiData);
  }

  async function sortMovie(value) {
    const data = await ApiCall(value);
    setData(data);
  }

  async function updateSearch(query) {
    const data = await SearchMovies(query);
    setSearchData(data.results);
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Search searchQuery={updateSearch} />
          <Home getData={sortMovie} />
          <MovieList props={data} />
        </Route>
        <Route path="/movie/:movieId">
          <Movie props={data} />
        </Route>
      </Switch>
      <Route path="/search" exact>
        <Search searchQuery={updateSearch} />
        <MovieList props={searchData ? searchData : data} />
      </Route>
      <Route path={`/search/:query`}>
        <Search searchQuery={updateSearch} totalResults={data.length} />
        <MovieList props={searchData ? searchData : data} />
      </Route>
    </Router>
  );
}
