import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='flex flex-col px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%]'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4'>
            <button className='bg-white text-black p-4 px-8 text-xl w-40 rounded hover:bg-opacity-80'>▶️ Play</button>
            <button className='bg-gray-500 text-white p-4 px-8 text-xl w-40 rounded ml-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle