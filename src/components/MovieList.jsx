// src/components/MovieList.jsx

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";  //  <== IMPORT

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  //ADD NEW
  const addNewMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    const updatedMoviesData = [...moviesData, movie]; // <== ADD
 
    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);  // <== ADD
  };

  // ADD FILTER
  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
 
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies />   {/*  <== ADD   */}

      <AddMovie addMovie={addNewMovie} />  {/* <== ADD NEW */}
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
