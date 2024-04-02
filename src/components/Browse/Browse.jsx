import React from "react";
import { Header } from "../common/Header";
import useNowPlayingMovies from "../../utils/custom-hooks/useNowPlayingMovies";
import MainContainer from "./Main Conatiner/MainContainer";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
import usePopularMovies from "../../utils/custom-hooks/usePopularMovies";
import useTopRated from "../../utils/custom-hooks/useTopRated";
import useUpcoming from "../../utils/custom-hooks/useUpcoming";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div className="w-full">
          <Header />
          <MainContainer />
          <SecondaryContainer />
    </div>
  );
};
