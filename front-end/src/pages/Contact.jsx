import React, { useEffect } from 'react'
import contactimg from '../assets/images/contactus.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

    const isMobile = window.innerWidth < 768

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        number: Yup.string().min(10, 'Contact must be at least 10 characters').max(10, 'Contact must be at most 10 characters').required('Contact is required'),
        subject: Yup.string().required('Subject is required'),
        dets: Yup.string().required('details are required')
    })


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            subject: '',
            dets: ''
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
            toast.error("Please fill all required details correctly!");
        }
    }, [formik.submitCount, formik.isValid])

    return (

        <>

            <ToastContainer position={isMobile ? "top-right" : "bottom-center"} autoClose={2000} />

            <div className='px-2'>

                <h1 className='text-3xl font-bold text-center my-4 md:my-12 text-[#4F39F6] md:text-4xl capitalize'>Get in Touch with us</h1>

                <section className='flex flex-col my-12 justify-center items-center h-auto md:flex-row gap-8'>

                    {/* left side - from  */}
                    <div className=' w-full md:w-1/2'>

                        <form className=' flex flex-col gap-6 justify-center items-center '

                            onSubmit={formik.handleSubmit}
                        >

                            <div className='w-full'>
                                <input
                                    type="text"
                                    className='border w-full rounded-lg py-2 px-2'
                                    placeholder='narendra modi'
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full'>
                                <input
                                    type="text"
                                    className='border w-full rounded-lg py-2 px-2'
                                    placeholder='narendra@gmail.com'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full'>
                                <input
                                    type="text"
                                    className='border w-full rounded-lg py-2 px-2'
                                    placeholder='+91 12345 67890'
                                    name='number'
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full'>
                                <input
                                    type="text"
                                    className='border w-full rounded-lg py-2 px-2'
                                    placeholder='Subject'
                                    name='subject'
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full'>
                                <textarea
                                    className='border w-full rounded-lg py-2 px-2 resize-none'
                                    placeholder='Subject details'
                                    rows="4"
                                    name='dets'
                                    value={formik.values.dets}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <button
                                type='submit'
                                className='bg-[#6C1BD9] text-white px-4 py-1 rounded md:px-6 md:text-xl active:scale-90 transition-all duration-300'
                            >Submit</button>

                        </form>

                    </div>

                    {/* right side - contact us image  */}
                    <div className='my-6 rounded-lg md:w-1/2'>
                        <img src={contactimg} alt="contact us image" />
                    </div>

                </section>

            </div>
        </>

    )
}




export default Contact
