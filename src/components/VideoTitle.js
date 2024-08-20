import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-full aspect-video pl-32 pt-60 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl text-bold'>{title}</h1>
      <p className='text-lg w-1/3 py-10'>{overview}</p>
      <div>
        <button className='px-10 py-5  rounded-md bg-slate-500'>Play</button>
        <button className='px-10 py-5 mx-3 rounded-md bg-slate-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
