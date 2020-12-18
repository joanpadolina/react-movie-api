import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

export default function Movie() {
  const [currentData, setCurrentData] = useState({});
  const match = useRouteMatch();
  const movieParams = match.params.movieId;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieParams}?api_key=${process.env.REACT_APP_ACCESS_TOKEN}&language=en-US`
    );
    const response = await data.json();
    console.log(response)
    return setCurrentData(response);
  }

  return (
    <article className="movie-card">
      <div className="movie-card__header">
        <img
          className="movie-card__image"
          src={IMAGE_BASE_URL + currentData.poster_path}
          alt=""
          loading="lazy"
        ></img>
      </div>
      <div className="movie-card__body-wrapper">
        <h3 className="movie-card__title">{currentData.original_title}</h3>
        <p className="movie-card__body">{currentData.overview}</p>
      </div>

      <div className="movie-card__footer">
        <ul className="movie-card__genre">
          {currentData &&
            currentData.genres?.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>

        <span className="movie-card__date">
          release date: {currentData.release_date}
        </span>

        <span className="movie-card__vote-sum">
          {" "}
          avarage score: {currentData.vote_average}
        </span>
      </div>
    </article>
  );
}
