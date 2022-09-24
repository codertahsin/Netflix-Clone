import React from 'react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
 
function Hero() {
  return (
    <div className='relative'>
     <img className='rounded-xl' src='https://www.cnet.com/a/img/resize/1b67d219a34be38e3e701f88695a8bdd9b43fdaa/2014/05/20/07197b19-d18f-4458-a5aa-c8125b3cb435/big-hero-6-2.jpg?auto=webp&fit=crop&height=675&width=1200' loading='lazy' alt=''></img>
    <div className='absolute top-10 bottom-10 left-10'>
      <h1 className='text-5xl font-bold text-white'>BAYMAX</h1>
      <button className='flex focus:outline-none text-white mt-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-md'>
        <AiOutlinePlayCircle size={20}/>
      <span className='ml-3'>Watch Now</span>
      </button>
    </div>
    </div>
  )
};
export default Hero