import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[50vh] gap-4'>

        <h1 className='text-2xl font-bold md:text-3xl underline'><span className='text-[#6C1BD9] '>404</span> Page not found</h1>
        <p className='text-center text-gray-400 text-base md:text-lg'>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className='mt-5 py-2 px-4 bg-[#6C1BD9] rounded-lg text-white md:text-lg'>Back to Home</Link>
    </div>
  )
}

export default NotFound