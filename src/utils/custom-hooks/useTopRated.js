import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../store/movies";

const useTopRated = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const moviesArr = await movies.json();

    dispatch(addTopRated(moviesArr.results));
  };

  useEffect(() => {
    popularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRated;
