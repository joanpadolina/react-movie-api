import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movie-card/movie-card.js";
import "./movie-list.css";

export default function MovieList({ props }) {

  return (
    <ul className="movie-list">
      {props.map((item) => {
        return (
          <li className={`movie-list__item ${item ? ' popup-enter' : ''}`}key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <MovieCard props={item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
