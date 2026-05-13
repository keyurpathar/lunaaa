import React, { useState, useEffect } from 'react'
import axios from 'axios'
import sir from '../assets/images/ankur-sir-removebg-preview.png'
import group from '../assets/images/community-bg.png'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const Courses = () => {
    const [dbCourses, setDbCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:5000/course");
                if (res.data.success) {
                    setDbCourses(res.data.data);
                }
            } catch (err) {
                console.error("Error fetching courses", err);
            }
        }
        fetchCourses();
    }, []);

    return (

        <>
            {/* mentor section  */}
            <div className=' my-6 px-2 py-8 border border-gray-400 rounded-xl'>

                <div className='flex gap-2 items-center justify-center'>

                    <img
                        src={sir}
                        alt="an CEO image"
                        className='w-10 rounded-4xl bg-gray-400'
                    />
                    <p className='text-base font-thin'>Mentored by Ankur lathiya</p>
                </div>

                <h1
                    className='text-3xl font-bold text-center my-4 text-[#6C1BD9] md:text-5xl'
                >
                    Choose Your Learning Path</h1>

                <p className='text-center text-base text-gray-800 md:text-lg md:px-22'>Master real engineering skills with hands-on mentorship. From full-stack development to DevOps — get job-ready with structured, industry-focused programs.
                </p>

            </div>

            {/* courses section  */}
            <section className=' my-4 border-b-gray-500 p-4 md:p-6 rounded-xl bg-[#783fc2]'>

                <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                    {dbCourses.map((course) => (
                        <CourseCard
                            key={course._id}
                            id={course._id}
                            img={course.img_url}
                            heading={course.name}
                            dets={course.details}
                            fullDetails={course.fullDetails}
                            price={course.price}
                            discount={course.discount}
                        />
                    ))}

                </div>
            </section>

            {/* community section  */}
            <section className=' rounded px-2 py-4 text-center md:flex md:justify-evenly md:items-center gap-6'>

                <div>


                    <h2 className='text-2xl font-bold text-[#4F39F6] md:text-4xl'>Our Community</h2>

                    <p className='text-gray-700 px-4 text-base md:text-lg my-4'>Join our vibrant community of learners and mentors. Connect, collaborate, and grow together as you embark on your learning journey with us.</p>

                </div>

                <img
                    src={group}
                    alt="Community"
                    className='rounded-xl md:w-3/5'
                />

            </section>

        </>
    )
}

export default Courses
