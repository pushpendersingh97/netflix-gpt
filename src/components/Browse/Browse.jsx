import React from "react";
import { Header } from "../common/Header";
import useNowPlayingMovies from "../../utils/custom-hooks/useNowPlayingMovies";
import MainContainer from "./Main Conatiner/MainContainer";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-full">
          <Header />
          <MainContainer />
          <SecondaryContainer />
    </div>
  );
};
