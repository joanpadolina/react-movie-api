import React from "react";
import "./movie-card.css";

export default function MovieCard({ props = [] }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <img
          className="movie-card__image"
          src={IMAGE_BASE_URL + props.poster_path}
          alt=""
        ></img>
      </div>
      <div className="movie-card__body-wrapper">
        <h3 className="movie-card__title">{props.original_title}</h3>
      </div>
    </article>
  );
}
