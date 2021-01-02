import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./movie.css";
export default function Movie() {
  const [currentData, setCurrentData] = useState({});
  const match = useRouteMatch();
  const movieParams = match.params.movieId;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const imageFrontPoster = IMAGE_BASE_URL + currentData.poster_path;
  const imageBackPoster = IMAGE_BASE_URL + currentData.backdrop_path;
  const errorImage = "https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg";

  useEffect(() => {
    getMovie();
  });

  async function getMovie() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieParams}?api_key=${process.env.REACT_APP_ACCESS_TOKEN}&language=en-US`
    );
    const response = await data.json();
    return setCurrentData(response);
  }

  return (
    <article className="movie">
      <div className="movie__header">
        <img
          className="movie__image"
          src={currentData.poster_path ? imageFrontPoster : errorImage}
          alt=""
          loading="lazy"
        ></img>
        {currentData.backdrop_path && (
          <img
            className="movie__backdrop-image"
            src={currentData.backdrop_path ? imageBackPoster : errorImage}
            alt=""
            loading="lazy"
          ></img>
        )}
      </div>
      <div className="movie__body-wrapper">
        <h3 className="movie__title title-big">{currentData.original_title}</h3>
        <p className="movie__body body">{currentData.overview}</p>
      </div>

      <div className="movie__footer">
        <ul className="movie__genre">
          {currentData &&
            currentData.genres?.map((item) => {
              return <li className="movie__genre-item" key={item.id}>{item.name}</li>;
            })}
        </ul>

        <span className="movie__date">
          release date: {currentData.release_date}
        </span>

        <span className="movie__vote-sum">
          {" "}
          avarage score: {currentData.vote_average}
        </span>
      </div>
    </article>
  );
}
