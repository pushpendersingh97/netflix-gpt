import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../utils/custom-hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  useMovieTrailer(movieID)  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) return;
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/_inKs4eeHiI?si=" + trailerVideo.key + "?autoPlay=1&muted=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay=1"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
