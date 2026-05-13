import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import { IndianRupee, ArrowLeft } from 'lucide-react';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                // Fetching all courses and filtering since there is no specific getCourseById endpoint
                const res = await axios.get("http://localhost:5000/course");
                if (res.data.success) {
                    const foundCourse = res.data.data.find(c => c._id === id);
                    setCourse(foundCourse);
                }
            } catch (err) {
                console.error("Error fetching course", err);
            } finally {
                setLoading(false);
            }
        }
        fetchCourse();
    }, [id]);

    if (loading) {
        return <div className="min-h-[50vh] flex items-center justify-center">Loading course details...</div>;
    }

    if (!course) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold text-red-500">Course Not Found</h1>
                <Link to="/course" className="text-[#4F39F6] underline">Back to Courses</Link>
            </div>
        );
    }

    const handlePay = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/payment", {
                name: course.name,
                price: course.price
            });

            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.log("Payment Error:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-8 p-4 md:p-8 bg-white border-2 border-gray-200 rounded-2xl ">
            <Link to="/course" className="inline-flex items-center gap-2 text-[#4F39F6] hover:underline mb-6 font-semibold">
                <ArrowLeft size={20} /> Back to Courses
            </Link>

            <div className="flex justify-center items-center flex-col gap-8">
                <div className="w-full md:w-3/4">
                    <img
                        src={course.img_url}
                        alt={course.name}
                        className="w-full h-auto rounded-xl object-cover shadow-sm"
                    />
                </div>

                <div className="w-full md:w-3/4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#6C1BD9] mb-4">
                            {course.name}
                        </h1>
                        <p className='text-base text-gray-700 leading-relaxed mb-6 md:text-lg'>
                            {course.fullDetails}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex justify-between w-full  items-center gap-2">

                                <p className="flex items-center text-3xl font-black text-[#4F39F6]">
                                    <IndianRupee size={26} />{course.price}
                                </p>
                                <p className="bg-green-300 text-green-800 font-bold px-3 py-1 rounded-full text-sm">
                                    {course.discount}%
                                </p>
                            </div>
                        </div>

                        <Button
                            onClick={handlePay}
                            name='Enroll Now'
                            className='w-full bg-[#4F39F6] text-white hover:bg-[#6C1BD9] active:scale-95 transition-all duration-200 rounded-lg py-3 text-lg md:text-xl font-bold shadow-md'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

