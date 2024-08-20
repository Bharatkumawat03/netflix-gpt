import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    <div className=' bg-black'>
        <div className='relative z-20 -mt-60'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer;
