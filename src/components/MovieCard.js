import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({posterPath}) => {
    if(! posterPath) return null;
  return (
    <div className="w-48 px-2">
      <img className="w-48" alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;
