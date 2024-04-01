import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="z-20 relative py-8">
      <h1 className="font-bold py-4">{title}</h1>
      <div className="flex overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} imgUrl={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
