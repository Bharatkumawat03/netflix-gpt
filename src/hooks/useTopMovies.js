import { useDispatch, useSelector } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useTopMovies = () => {
    const dispatch = useDispatch();
    const topMovies = useSelector((store) => store.movies.topMovies );

  const getTopMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopMovies(json.results));
  }

  useEffect(() => {
    !topMovies && getTopMovies();
  },[]);
}

export default useTopMovies;