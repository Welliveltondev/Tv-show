import React from 'react'
import {dummyShowsData} from '../assets/assets.js'
import BlurCircle from '../components/BlurCircle'
import MoviesCard from '../components/MoviesCard'
const Movies = () => {
  return dummyShowsData > 0 ? (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold text-center'>No movies available</h1>
    </div>
  ) : (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle />
      <BlurCircle />
      <h1 className='text-lg font-medium my-4'>Now showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie)=>(
          <MoviesCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  )
}

export default Movies


