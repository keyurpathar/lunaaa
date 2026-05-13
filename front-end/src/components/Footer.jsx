import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='flex flex-col py-6 items-center w-full justify-center gap-4 border border-gray-500 rounded-xl md:flex-row md:justify-between px-4'>

            <div className=''>
                <Link to='/'>
                    <img
                        src={logo}
                        alt="an logo"
                        className='w-3/4'
                    />
                </Link>
            </div>

            <div >
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>About Us</Link></p>
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Contact Us</Link></p>
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Courses</Link></p>
                <p>  <Link to='/privacy' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Privacy Policy</Link> </p>
            </div>

            <div >
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>About Us</Link></p>
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Contact Us</Link></p>
                <p> <Link to='/about' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Courses</Link></p>
                <p>  <Link to='/privacy' className='font-medium hover:text-gray-700 text-lg transition-colors duration-300'>Privacy Policy</Link> </p>
            </div>


            <div className='text-center  text-sm'>
                <div className='flex justify-center items-center gap-4 my-2'>
                    <p><Link className='text-2xl hover:text-blue-600 transition-all duration-150' to='https://www.facebook.com' target='_blank'><FaFacebook /></Link></p>
                    <p><Link className='text-2xl hover:text-blue-300 transition-all duration-150' to='https://www.twitter.com' target='_blank'><FaTwitter /></Link></p>
                    <p><Link className='text-2xl hover:text-pink-500 transition-all duration-150' to='https://www.instagram.com' target='_blank'><FaInstagram /></Link></p>
                    <p><Link className='text-2xl hover:text-blue-700 transition-all duration-150' to='https://www.linkedin.com' target='_blank'><FaLinkedin /></Link></p>
                </div>
                <p>&copy; 2026 Your Company. All rights reserved.</p>
            </div>



        </footer>
    )
}

export default Footer
