import React from 'react'
import { BASE_IMG_URL } from '../../../utils/constants'

const MovieCard = ({imgUrl}) => {
  return (
    <div className='mr-8 rounded-lg flex-shrink-0'>
      <img src={BASE_IMG_URL + imgUrl} alt='Poster' className='w-60 h-52 rounded-lg' />
    </div>
  )
}

export default MovieCard