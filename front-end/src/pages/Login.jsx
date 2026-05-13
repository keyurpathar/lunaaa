import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters long'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        }, validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    return (

        <div className='flex flex-col gap-4 justify-center items-center h-[80vh]'>

            <h1 className='text-3xl text-[#6C1BD9] font-bold text-center md:text-4xl'>Login</h1>

            <div className='border border-gray-400 w-full md:w-1/2 lg:w-1/3 p-4 rounded-lg'>

                <form className='flex flex-col gap-4 mt-4' onSubmit={formik.handleSubmit}>

                    <input
                        type='text'
                        placeholder='Username'
                        className='border border-gray-400 p-2 rounded-lg text-sm md:text-lg focus:outline-0'
                        name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />

                    {formik.touched.username && formik.errors.username && <p className='text-red-500 text-sm transition-all duration-200 -my-2'>{formik.errors.username}</p>}

                    <input
                        type='password'
                        placeholder='Password'
                        className='border border-gray-400 focus:outline-0 p-2 rounded-lg text-sm md:text-lg'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {formik.touched.password && formik.errors.password && <p className='text-red-500 text-sm transition-all duration-200 -my-2'>{formik.errors.password}</p>}

                    <p className='text-center text-gray-500 text-sm'>New User ?? <Link to='/signup' className='text-blue-600 underline-none'>Register Here</Link> </p>

                    <button type='submit' className='bg-blue-600 text-white p-2 rounded-lg'>Login</button>

                </form>

            </div>

        </div>
    )
}

export default Login