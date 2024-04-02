import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../store/movies";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const moviesArr = await movies.json();

    dispatch(addUpcoming(moviesArr.results));
  };

  useEffect(() => {
    popularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcoming;
