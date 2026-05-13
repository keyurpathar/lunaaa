import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from './Button';


const Header = () => {

    const [open, setOpen] = useState(false)


    return (

        <header className='sticky top-0 backdrop-blur-md z-100'>

            <div className='flex justify-between items-center'>


                {/* logo   */}
                <div className='border w-fit rounded-lg'>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="An logo of a company"
                            className='w-16 rounded-lg'
                        />
                    </Link>
                </div>


                {/* desktop menu  */}
                {/* links  */}
                <nav className='flex gap-4 hidden  md:flex'>
                    <Link
                        to={'/'}
                        className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out'>Home</Link>
                    <Link
                        to={'/course'}
                        className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out'
                    >
                        Courses
                    </Link>
                    <Link
                        to={'/about'}
                        className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out'
                    >
                        About Us
                    </Link>
                    <Link to={'/contact'} className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out'>Contact Us</Link>
                    {/* <Link to={'/request-callback'} className='px-4 py-1 border border-gray-400 text-center my-1 rounded hover:bg-purple-500 hover:text-white transition-all duration-200 ease-in-out'>Request Callback</Link> */}
                </nav>

                {/* buttons  */}
                <div className='flex gap-4 hidden md:block'>

                    <Link
                        to='signUp'
                        className='px-4 py-2 mx-2 border rounded-lg text-center text-white  bg-blue-600 cursor-pointer  active:scale-95 hover:bg-blue-950 transition-all duration-200 ease-in-out'
                    >Sign Up</Link>
                    <Link to='login'
                        className='px-4 py-2 mx-2 border rounded-lg text-center text-white  bg-blue-600 cursor-pointer  active:scale-95 hover:bg-blue-950 transition-all duration-200 ease-in-out'
                    >Login</Link>

                </div>

                {/* hamburger  */}
                <div
                    className='bg-purple-600 px-1 py-1 w-fit rounded text-2xl md:hidden active:bg-purple-500'
                    onClick={() => setOpen(!open)}
                >
                    <RxHamburgerMenu />
                </div>
            </div>


            {/* mobile menu  */}
            {/* links & buttons  */}

            {
                open &&
                <>
                    <nav className='my-4 md:hidden'>
                        <Link to={'/'} className='block border text-center my-1 rounded'>Home</Link>
                        <Link to={'/course'} className='block border text-center my-1 rounded'>Courses</Link>
                        <Link to={'/about'} className='block border text-center my-1 rounded'>About Us</Link>
                        <Link to={'/contact'} className='block border text-center my-1 rounded'>Contact Us</Link>
                        {/* <Link to={'/request-callback'} className='block border text-center my-1 rounded'>Request Callback</Link> */}
                    </nav>

                    <div className='md:hidden'>
                        <Link to='signUp' name={'Sign Up'} className='w-full py-1 bg-blue-600 text-white active:bg-blue-950 transition-all duration-200 ease-in-out block border text-center my-1 rounded'>Sign Up</Link>
                        <Link to='login' name={'Login'} className='w-full py-1 bg-blue-600 text-white active:bg-blue-950 transition-all duration-200 ease-in-out block border text-center my-1 rounded'>Login</Link>
                    </div>
                </>
            }


        </header>
    )
}

export default Header
