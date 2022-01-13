import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="mov-list">
          <img
            src={movie.Poster}
            alt="movies"
            style={{ height: "30rem" }}
          ></img>
          <div
            className="overlay"
            style={{ justifyContent: "center", width: "100%" }}
            onClick={() => props.handleWishClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
