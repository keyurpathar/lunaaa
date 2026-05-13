import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-[60vh] gap-5 px-4'>
        <div className='bg-green-100 p-4 rounded-full'>
            <CheckCircle className='w-16 h-16 md:w-20 md:h-20 text-green-500' />
        </div>
        <h1 className='text-3xl font-bold md:text-4xl text-center text-gray-800'>Payment <span className='text-[#6C1BD9]'>Successful!</span></h1>
        <p className='text-center text-gray-500 text-base md:text-lg max-w-md'>
            Thank you for your purchase. Your enrollment is confirmed and you can now access your course.
        </p>
        <Link to="/course" className='mt-4 py-3 px-8 bg-[#6C1BD9] hover:bg-[#4F39F6] transition-colors rounded-xl text-white font-semibold md:text-lg shadow-lg hover:shadow-xl active:scale-95'>
            Go to Courses
        </Link>
    </div>
  )
}

export default PaymentSuccess;