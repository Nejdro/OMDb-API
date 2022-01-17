import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import addWish from "./components/WishList";
import RemoveWish from "./components/RemoveWish";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishList] = useState([]);

  const getData = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=403f966e`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };
  const saveCookie = (items) => {
    localStorage.setItem("react2-WishList", JSON.stringify(items));
  };
  const addWishList = (movie) => {
    const newWishList = [...wishlist, movie];
    setWishList(newWishList);
    saveCookie(newWishList);
  };
  const removeWishList = (movie) => {
    const newWishList = wishlist.filter(
      (wishlist) => wishlist.imdbID !== movie.imdbID
    );

    setWishList(newWishList);
    saveCookie(newWishList);
  };
  useEffect(() => {
    getData(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieWish = JSON.parse(localStorage.getItem("react2-WishList"));

    if (movieWish) {
      setWishList(movieWish);
    }
  }, []);

  return (
    <div>
      <Heading heading={"Movies List"} />
      <div className="container">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="row">
          <MovieList
            movies={movies}
            favouriteComponent={addWish}
            handleWishClick={addWishList}
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default App;
