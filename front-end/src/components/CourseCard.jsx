import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { IndianRupee } from 'lucide-react'
import axios from 'axios';

const CourseCard = ({ id, img, heading, dets, fullDetails, price, discount }) => {


    const handlePay = async (e) => {
        console.log("clicked");
        e.preventDefault();
        e.stopPropagation();
        try {
            const { data } = await axios.post("http://localhost:5000/payment", {
                name: heading,
                price: price
            });

            if (data.url) {
                window.location.href = data.url;
            }

        } catch (error) {
            console.log("Payment Error:", error);
        }

    };

    return (
        <>
            <Link to={`/course/${id}`} className='block bg-white px-3 py-3 border-2 border-gray-500 rounded-xl md:px-5 md:py-5 w-full hover:shadow-xl transition-shadow'>

                <div>
                    <img
                        src={img}
                        alt="An course image"
                        className='rounded-xl w-full h-auto object-cover'
                    />
                </div>

                <div className='my-4 flex flex-col gap-3'>

                    <h3
                        className='text-2xl font-semibold text-[#6C1BD9] md:text-4xl'
                    >
                        {heading}
                    </h3>

                    <p
                        className='text-sm text-gray-600 md:text-base font-semibold'
                    >
                        {dets}
                    </p>

                    {fullDetails && (
                        <p className='text-xs text-gray-500 md:text-sm line-clamp-4'>
                            {fullDetails}
                        </p>
                    )}

                    <div className='flex items-center justify-between gap-4 mt-2'>
                        <p className='flex items-center text-xl font-black text-[#4F39F6] md:text-3xl'><IndianRupee />{price}</p>
                        <p className='bg-green-300 text-green-800 font-semibold px-2 py-1 rounded-2xl text-sm md:text-base'>{discount + '% off'}</p>
                    </div>

                    <Button onClick={handlePay} name='Enroll Now' className='bg-[#4F39F6] text-white active:bg-[#6C1BD9] active:scale-95 transition-all duration-200  rounded-lg py-2 md:text-xl' />
                </div>
            </Link>
        </>
    );
};

export default CourseCard;
