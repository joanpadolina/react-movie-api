import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ApiCall } from "./utils/movie-api";

import Search from "./components/search/search.js";
import Movie from "./components/movie/movie.js";
import Home from "./components/home/home.js";

import "./App.css";
import "./assets/css/index.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  async function apiData() {
    const apiData = await ApiCall("popular");
    setData(apiData);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
      <Search />
          <Home movies={data} />
        </Route>
        {/* <Route path="/search" exact>
          <Search />
        </Route> */}
        <Route path="/movie/:movieId">
          <Movie props={data} />
        </Route>
      </Switch>
    </Router>
  );
}
