import { Code, Minus } from 'lucide-react'
import React from 'react'

const CarousalCard = ({heading , content}) => {
  return (
    <div className='p-4'>

      <Code className='bg-blue-600 text-white p-2 rounded-xl w-10 h-10' />

      <p className='text-2xl my-1 text-gray-800'>{heading}</p>

      <div className='border-2 border-[#4F39F6] w-16 my-4'></div>

      <p className='text-base text-gray-600'>{content}</p>


    </div>
  )
}

export default CarousalCard
