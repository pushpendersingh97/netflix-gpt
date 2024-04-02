import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesArr = useSelector((store) => store.movies);

  console.log(moviesArr);

  const nowPlayingMoviesArr = moviesArr?.nowPlayingMovies;
  const popularMovies = moviesArr?.popularMovies;
  const topRated = moviesArr?.topRated;
  const upcoming = moviesArr?.upcoming;

  return (
    <div className="bg-black text-white px-12">
      <div className="-mt-52 z-20 relative py-8">
        {nowPlayingMoviesArr && <MovieList title="Now Playing" movies={nowPlayingMoviesArr} />}
        {popularMovies && <MovieList title="Popular" movies={popularMovies} />}
        {topRated && <MovieList title="Top Rated" movies={topRated} />}
        {upcoming && <MovieList title="Upcoming" movies={upcoming} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;
