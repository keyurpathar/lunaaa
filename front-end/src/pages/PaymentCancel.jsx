import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const PaymentCancel = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-[60vh] gap-5 px-4'>
        <div className='bg-red-100 p-4 rounded-full'>
            <XCircle className='w-16 h-16 md:w-20 md:h-20 text-red-500' />
        </div>
        <h1 className='text-3xl font-bold md:text-4xl text-center text-gray-800'>Payment <span className='text-red-500'>Cancelled</span></h1>
        <p className='text-center text-gray-500 text-base md:text-lg max-w-md'>
            Your payment process was cancelled or interrupted. No charges were made to your account.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <Link to="/course" className='py-3 px-8 bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl text-gray-800 font-semibold md:text-lg text-center active:scale-95'>
                View Courses
            </Link>
            <Link to="/" className='py-3 px-8 bg-[#6C1BD9] hover:bg-[#4F39F6] transition-colors rounded-xl text-white font-semibold md:text-lg shadow-lg hover:shadow-xl active:scale-95 text-center'>
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default PaymentCancel;