import React from "react";
import { Header } from "../common/Header";
import useNowPlayingMovies from "../../utils/custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

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
