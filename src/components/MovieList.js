import MovieCard from "./MovieCard";


const MovieList = ({title, movies}) => {
    if (!movies) {
        return <div>No movies available</div>;
      }

  return (
    <div className="pt-6 ">
            <h1 className="text-3xl p-6 text-white">{title}</h1>
        <div className="flex overflow-x-scroll  pb-0">
            <div className=" flex  ">
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;
