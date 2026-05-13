import React from 'react'
import Button from '../components/Button'
import heroImg from '../assets/images/ankur-sir-removebg-preview.png'
import { CircleDot } from 'lucide-react'
import CountUp from 'react-countup'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CarousalCard from '../components/CarousalCard'
import CourseCard from '../components/CourseCard'
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";
import video1 from '../assets/videos/reel-1.mp4'
import video2 from '../assets/videos/reel-2.mp4'
import video3 from '../assets/videos/reel-3.mp4'
import video4 from '../assets/videos/reel-4.mp4'
import video5 from '../assets/videos/reel-5.mp4'
import video6 from '../assets/videos/reel-6.mp4'
import video7 from '../assets/videos/reel-7.mp4'
import video8 from '../assets/videos/reel-8.mp4'
import inqueryImg from '../assets/images/inquery.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { courses } from '../data/courses'


const Home = () => {

    const isMobile = window.innerWidth < 768
    const [dbCourses, setDbCourses] = useState([])

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
    }, [])

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        contact: Yup.string().min(10, 'Contact must be at least 10 characters').max(10, 'Contact must be at most 10 characters').required('Contact is required'),
        query: Yup.string().required('Query is required')
    })


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            query: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            toast.success("Submitted successfully!")
            resetForm()
        }
    })

    useEffect(() => {
        if (formik.submitCount > 0 && !formik.isValid) {
            const firstError = Object.values(formik.errors)[0];
            toast.error(firstError || "Please fill all fields correctly.");
        }
    }, [formik.submitCount, formik.isValid, formik.errors])


    return (
        <>

            <ToastContainer position={isMobile ? "top-right" : "bottom-center"} autoClose={2000} />

            {/* // hero section */}
            <section className='my-4'>

                <div id="hero-sec"
                    className='min-h-[85vh] flex flex-col gap-2 md:flex-row md:justify-between md:items-center'
                >

                    {/* left hero section  */}
                    <div id="left-hero-sec" className='flex-1 flex items-center justify-center text-center flex-col gap-4 md:text-left md:items-start'>

                        <p className='flex text-gray-700 items-center capitalize gap-2 border border-gray-500 border-dashed rounded-xl px-2 py-1 md:py-2 md:text-lg'>
                            <CircleDot className='text-blue-700' /> join 10,000+ enrolled students today
                        </p>

                        <h2 className='text-4xl text-[#6C1BD9] font-semibold md:text-7xl md:font-bold'>
                            Master Full stack development
                        </h2>

                        <p className='text-sm leading-5 text-gray-700 md:text-base'>
                            Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
                        </p>

                        <div id="left-hero-btn" className='flex gap-4'>
                            <Link to='/about' className='px-4 py-1 rounded-xl bg-[#4F39F6] text-white text-base active:scale-95 transition-all duration-300 md:px-4 md:py-4 md:text-xl cursor-pointer md:hover:bg-[rgb(79,57,249,0.8)]  hover:border-0' name=''> Learn More </Link>
                            <Link to='/course' className='px-4 py-1 rounded-xl bg-[#4F39F6] text-white text-base active:scale-95 transition-all duration-300 md:px-4 md:py-4 md:text-xl cursor-pointer md:hover:bg-[rgb(79,57,249,0.8)]  hover:border-0' name='Explore Courses'> Explore Courses </Link>
                        </div>

                    </div>

                    {/* right hero section  */}
                    <div id="right-hero-sec" className='flex-1 min-h-100 md:min-h-full flex items-center justify-center'>

                        <img
                            src={heroImg}
                            alt="An CEO image"
                            className=' border border-gray-500 rounded-xl h-auto object-contain lg:w-3/4' />

                    </div>


                </div>

            </section>

            {/* // count section */}
            <section
                className=''
            >

                <div id='sharp-div'
                    className='flex flex-col gap-6 items-center text-center border border-gray-400 rounded-xl justify-evenly py-6 md:flex-row'
                >

                    <div>
                        <h2 className='text-5xl md:text-6xl text-[#6C1BD9] font-semibold'> <CountUp start={0} end={27} duration={10} /> </h2>
                        <p className='text-gray-600'>Students cracked GSoC 2025</p>
                    </div>

                    <div>
                        <h2 className='text-5xl md:text-6xl  text-[#6C1BD9] font-semibold'><CountUp start={1000} end={150000} duration={9} /> </h2>
                        <p className='text-gray-600'>Total stipend earned by our students</p>
                    </div>

                    <div>
                        <h2 className='text-5xl md:text-6xl  text-[#6C1BD9] font-semibold'><CountUp start={0} end={200} duration={10} /> </h2>
                        <p className='text-gray-600'>High paying internships confirmed</p>
                    </div>

                </div>

                <div className='text-center my-4 gap-2 md:flex md:text-left'>

                    <div className='border border-gray-400 px-4 py-2 rounded-xl'>
                        <h2 className='text-3xl my-4 md:text-4xl text-[#6C1BD9] font-semibold'>Job ready skills that matter</h2>
                        <p className='my-4 text-gray-600'>Master development through real-world applications, not tutorials</p>
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Full Stack Development' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Real-World Projects' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Job Ready Portfolio' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Open Source Contributions' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='DevOps & Deployment' />
                        <Button className='px-4 py-2 mx-2 my-1 bg-[#00AB93] text-white rounded-xl' name='Production Ready' />
                    </div>

                    <div className='border border-gray-400 rounded-xl py-2 px-2 my-4 md:my-0 md:px-4 md:py-4'>
                        <h2 className='text-3xl my-4 md:text-4xl text-[#6C1BD9] font-semibold'>Personally mentoring India's next 100x engineers</h2>
                        <p className='text-gray-600 md:mb-10'>Taking you from 1x to 100x through practical projects and real-world open source</p>
                    </div>

                </div>

            </section>

            {/* swiper slider  */}
            <section className=' my-4 py-4 rounded-xl'>
                <h2 className=' capitalize my-4 text-4xl text-[#6C1BD9] font-semibold text-center mb-6 md:text-5xl'>why luna coding institute ? </h2>

                <p className='text-gray-500 text-center my-4 text-base md:text-lg'>Our most comprehensive and impactful learning experiences</p>


                {/* swiper slider  */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='h-60'
                >
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Real Engineer, Real Experience'
                            content='Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.' />

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Learn by Doing'
                            content='Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Job-Ready Curriculum'
                            content='Master DSA, System Design, DevOps & scalable full-stack skills. From JavaScript to MERN stack & blockchain technologies.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Career Support & Community'
                            content='Personalized career guidance, mock interviews, access to top hiring partners & a supportive community of ambitious learners.' />

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl'>

                        <CarousalCard
                            heading='Lifetime Access'
                            content='Lifetime access to course assignments & one-year access to session recordings for continuous learning at your pace.' />

                    </SwiperSlide>
                </Swiper >
            </section>

            {/* courses section  */}
            <section className=' border-b-gray-500 p-4 md:p-6 rounded-xl bg-[#4F39F6]'>


                <h2
                    className='capitalize my-4 text-4xl text-white font-semibold text-center mb-6 md:text-5xl'
                >
                    Our Courses
                </h2>

                <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                    {dbCourses.slice(0, 4).map((course) => (
                        <CourseCard
                            key={course._id}
                            id={course._id}
                            img={course.img_url}
                            heading={course.name}
                            dets={course.details}
                            price={course.price}
                            discount={course.discount}
                        />
                    ))}

                </div>
            </section>

            {/* testimonials section   */}
            <section className=' my-4 py-4 px-2 rounded-xl'>

                <h2 className=' capitalize my-4 text-4xl text-[#6C1BD9] font-semibold text-center mb-6 md:text-5xl'>Testimonials </h2>

                {/* swiper slider  */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='h-[80vh]'
                >
                    <SwiperSlide className='border border-gray-500 rounded-xl h-full overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video1,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video2,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video3,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video4,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>


                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video5,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video6,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video7,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='border border-gray-500 rounded-xl overflow-hidden'>

                        <div className="h-full w-full rounded-xl">

                            <Plyr
                                source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: video8,
                                            type: "video/mp4",
                                        },
                                    ],
                                }}
                                options={{
                                    controls: ["play"]
                                }}
                            />

                        </div>

                    </SwiperSlide>
                </Swiper >
            </section>

            {/* faq section  */}
            <section className=' my-4 py-4 px-2 rounded-xl'>

                <h2 className=' capitalize my-1 text-4xl text-[#6C1BD9] font-semibold text-center mb-6 md:text-5xl'>FAQs</h2>
                <div className='flex flex-col gap-4 md:w-1/2 md:justify-center md:mx-auto'>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">What courses do you offer?</div>
                        <div className="collapse-content text-sm text-gray-600">We offer courses in Full Stack Development, Data Science, AI, and Frontend Development. All courses are project-based and focused on real-world skills.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">Do I need prior coding experience?</div>
                        <div className="collapse-content text-sm text-gray-600">No. Beginners are welcome. We start from basics and gradually move to advanced topics.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">Do you provide placement support?</div>
                        <div className="collapse-content text-sm text-gray-600">Yes. We offer resume building, mock interviews, and job guidance to help you get hired.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">Will I get a certificate?</div>
                        <div className="collapse-content text-sm text-gray-600">Yes. You will receive a certificate after successfully completing the course.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">What if I miss a live class?</div>
                        <div className="collapse-content text-sm text-gray-600">No problem. You can watch the recorded session anytime.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-gray-400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-bold md:text-xl text-[#4231c5]">How can I contact support?</div>
                        <div className="collapse-content text-sm text-gray-600">You can reach us through email, WhatsApp, or the contact form on our website.</div>
                    </div>

                </div>
            </section>

            {/* inquery section  */}
            <section className=' my-4 py-4 px-2 rounded-xl'>

                <div className='flex flex-col gap-4 md:flex-row md:justify-evenly md:items-center md:gap-4'>

                    <div id="left-inqury-sec" className=' md:w-2/5'>
                        <img src={inqueryImg} alt="Inquiry" className='' />
                    </div>

                    <div id="right-inqury-sec"
                        className='border border-gray-500 rounded-xl px-2 py-4 bg-blue-600 text-white w-full md:w-1/2 md:px-8'
                    >
                        <h2 className='text-lg my-2 font-semibold md:text-3xl'>Having doubts? Let's get in touch!</h2>
                        <p className='font-medium text-sm md:text-lg'>Fill the details and request a callback</p>

                        <form className='my-4' onSubmit={formik.handleSubmit}>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className='border border-gray-300 rounded w-full px-2 py-2 my-4 focus:border-gray-50 focus:border focus:outline-0 '
                                />

                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Your Email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className='border border-gray-300 rounded w-full px-2 py-2 my-4 focus:border-gray-50 focus:border focus:outline-0 '
                                />

                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Your Contact'
                                    name='contact'
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                    className='border border-gray-300 rounded w-full px-2 py-2 my-4 focus:border-gray-50 focus:border focus:outline-0 '
                                />

                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Type your query here'
                                    name='query'
                                    value={formik.values.query}
                                    onChange={formik.handleChange}
                                    className='border border-gray-300 rounded w-full px-2 py-2 my-4 focus:border-gray-50 focus:border focus:outline-0 '
                                />

                            </div>

                            <button
                                type='submit'
                                className='w-full font-semibold bg-[#2b1aac] py-2 rounded active:scale-90 transition-all duration-300 md:hover:bg-[#2b1aaccc]  hover:border-0 text-white text-lg'
                            >
                                Submit
                            </button>


                        </form>
                    </div>

                </div>

            </section >

        </>
    )
}

export default Home