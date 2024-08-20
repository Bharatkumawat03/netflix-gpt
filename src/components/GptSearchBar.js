import openai from '../utils/openai'
import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { options } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch;
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)

    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as a movie recomandation system and suggest some movies for the query :" + searchText.current.value + ". only give me names of 5 movies, comma seprated like the example result given ahead. example result: gadar, sholey, don, koi mil gaya, golmal."
    const gptResult =  openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResult.choices){
      // error handling
    }
    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieName: gptMovies,movieResults: tmdbResults}));
  };
  return (
    <div className='pt-[10%] flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()} className='bg-black w-1/2 grid grid-cols-12'>
        <input ref={searchText} type='text' className='col-span-9 p-4 m-4' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
