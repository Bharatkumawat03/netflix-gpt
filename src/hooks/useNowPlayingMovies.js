import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies );
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      if(!data.ok){
        throw new Error(`HTTP error! status:${data.status}`);
      }
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch now playing movies:', error);
    }
  }

  useEffect(() => {
    if(!nowPlayingMovies || nowPlayingMovies.length === 0){
      getNowPlayingMovies();
    }
  //  !nowPlayingMovies && getNowPlayingMovies();
  },[nowPlayingMovies]);

  return nowPlayingMovies;
};

export default useNowPlayingMovies;