import React from 'react'
import {dummyShowsData} from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import MoviesCard from '../components/MoviesCard'
const Favorite = () => {

  return dummyShowsData > 0 ? (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold text-center'>No movies available</h1>
    </div>
  ) : (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top='200px' left='-100px'/>
      <BlurCircle top='400px' right='0px'/>
      <h1 className='text-lg font-medium my-4'>Your Favorite Movies</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie)=>(
          <MoviesCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  )
}

export default Favorite

