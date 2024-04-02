import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movies";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const moviesArr = await movies.json();

    dispatch(addPopularMovies(moviesArr.results));
  };

  useEffect(() => {
    popularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
