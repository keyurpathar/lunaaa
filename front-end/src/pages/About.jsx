import { Sparkles } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>

      {/* about section  */}
      <section className=' my-18 h-auto w-full'>

        <p className='mx-auto flex bg-[#4F39F6] text-white text-center gap-2 rounded-2xl border w-fit px-4 py-1 font-semibold'><Sparkles />Code revolution</p>

        <div className='flex flex-col gap-8 my-20 px-1 md:item-center md:gap-6 md:my-4'>


          <h2 className='text-3xl text-center font-semibold text-[#6C1BD9] md:text-5xl '>where dreams transform into code</h2>

          <p className='text-center text-gray-600 px-4 md:px-38'>At luna , we turn curiosity into innovation and ideas into reality.where passion unites to build the future. shape ideas into innovative solutions that inspire world</p>

          <div className='flex flex-col gap-2 md:flex-row md:justify-center md:text-xl md:gap-4'>
            <Link to="/course" className='border px-4 py-2 rounded-lg text-center bg-[#6C1BD9] text-white md:px-6 md:py-2 active:scale-90 transition-all duration-200'>Explore Courses</Link>
            <Link to="/contact" className='border px-4 py-2 rounded-lg text-center bg-[#6C1BD9] text-white md:px-6 md:py-2 active:scale-90 transition-all duration-200'>Let's conect</Link>
          </div>

        </div>


      </section>

      {/* about section img  */}
      <section className='md:h-[80vh]'>

        <h2 className='text-center my-6 text-2xl capitalize md:text-3xl text-[#6C1BD9] font-semibold'>an amazing people we have</h2>

        <img
          src='https://dfdx9u0psdezh.cloudfront.net/about-us/d7b0b773a6fe6afc9f71ba24.webp'
          alt=""
          className='md:w-5/6  md:h-9/10 rounded-xl object-cover object-center mx-auto'
        />

      </section>

      {/* about section details  */}
      <section className='my-6'>
        <div className='flex flex-col my-6 py-4 gap-6 px-1 md:item-center md:gap-6 md:my-4'>

          <p className='mx-auto flex bg-[#4F39F6] text-white text-center gap-2 rounded-2xl border w-fit px-4 py-1 font-semibold'><Sparkles />About Luna</p>

          <p className='text-center text-gray-600 px-4 md:px-38'>At luna , we turn curiosity into innovation and ideas into reality.where passion unites to build the future. shape ideas into innovative solutions that inspire world</p>

          <div className='flex flex-col gap-2 md:flex-row md:justify-center md:text-xl md:gap-4'>
            <Link to="/contact" className='border px-4 py-2 rounded-lg text-center bg-[#6C1BD9] text-white md:px-6 md:py-2 active:scale-90 transition-all duration-200'>Let's conect</Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About
