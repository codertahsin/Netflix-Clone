import React from 'react'
import {AiFillStar} from 'react-icons/ai'

function MovieCard({ medium_cover_image, title_long, rating, year }) {
  return (
    <div className='md:w-44 w-[46%] sm:w-[30%] ml-4 mb-4 cursor-pointer bg-slate-800 p-3 rounded-md md-4 hover:-translate-y-3 transition-all duration-100'>
        <img className='rounded-md' src={medium_cover_image}
        alt='' loading='lazy'/>
    <div className='mt-2 '>
    <h1 className='text-gray-100 text-md truncate font-medium' title={title_long}>{title_long}</h1>
    <div className='flex items-center space-x-3'>
    <div className='border border-red-600 text-red-600 flex items-center w-fit p-[3px] rounded-md text-xs space-x-1 mt-1'>
    <AiFillStar size={15}/>
    <span>
      {rating}
    </span>
    </div>
    <span className='text-xs text-gray-500'>
      {year}
    </span>
    </div>
    </div>
    </div>
  )
}
export default MovieCard;
