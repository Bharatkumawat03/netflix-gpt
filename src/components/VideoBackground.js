import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
   
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-full aspect-video "
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        frameBorder="0"
        allow=" encrypted-media;"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
