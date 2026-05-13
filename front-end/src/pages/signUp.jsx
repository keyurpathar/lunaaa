import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const validationSchema = Yup.object({
        username: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
        number: Yup.string().required('Number is required').min(10, 'Number must be at least 10 digits long').max(10, 'Number must be at most 10 digits long'),
        email: Yup.string().required('Email is required').email('Invalid email'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            number: '',
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })


    return (

        <div className='my-4'>

            <section className='flex justify-center items-center h-[80vh] gap-4 flex-col'>

                <h1 className='text-center text-2xl md:text-3xl font-semibold text-[#6C1BD9]'>Sign Up</h1>

                <div className='border border-gray-400 p-4 rounded-lg flex justify-center items-center w-full md:w-1/2 lg:w-1/3'>


                    <form
                        onSubmit={formik.handleSubmit}
                        className='flex flex-col gap-4 w-full'>

                        <input
                            type="text"
                            placeholder='Name'
                            className='border border-gray-400 font-sm w-full rounded-md p-2 md:text-lg focus:outline-0 '
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />

                        {formik.touched.username &&
                            formik.errors.username && (
                                <p className='text-red-500 text-sm -my-2 transition-all duration-300'>{formik.errors.username}</p>
                            )}


                        <input
                            type="text"
                            placeholder='Mobile Number'
                            className='border border-gray-400 font-sm w-full rounded-md p-2 md:text-lg focus:outline-0 '
                            name='number'
                            value={formik.values.number}
                            onChange={formik.handleChange}
                        />

                        {formik.touched.number &&
                            formik.errors.number && (
                                <p className='text-red-500 text-sm -my-2 transition-all duration-300'>{formik.errors.number}</p>
                            )}

                        <input
                            type="text"
                            placeholder='Email'
                            className='border border-gray-400 font-sm w-full rounded-md p-2 md:text-lg focus:outline-0 '
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />

                        {formik.touched.email &&
                            formik.errors.email && (
                                <p className='text-red-500 text-sm -my-2 transition-all duration-300'>{formik.errors.email}</p>
                            )}

                        <input
                            type="password"
                            placeholder='Password'
                            className='border border-gray-400 font-sm w-full rounded-md p-2 md:text-lg focus:outline-0 '
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />

                        {formik.touched.password &&
                            formik.errors.password && (
                                <p className='text-red-500 text-sm -my-2 transition-all duration-300'>{formik.errors.password}</p>
                            )}


                        <p className='text-center text-gray-500 text-sm'>Already have an account ?? <Link to='/login' className='text-blue-600 underline-none'>Login Here</Link></p>

                        <button type='submit' className='bg-[#6C1BD9] text-white rounded-md p-2'>Sign Up</button>


                    </form>

                </div>


            </section>

        </div>
    )
}

export default SignUp