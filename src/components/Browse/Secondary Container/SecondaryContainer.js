import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesArr = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="bg-black text-white px-12">
      <div className="-mt-52 z-20 relative py-8">
        {moviesArr && <MovieList title="Now Playing" movies={moviesArr} />}
        {moviesArr && <MovieList title="Treding" movies={moviesArr} />}
        {moviesArr && <MovieList title="New Update" movies={moviesArr} />}
        {moviesArr && <MovieList title="Now Playing" movies={moviesArr} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;
