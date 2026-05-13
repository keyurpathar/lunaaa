import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate()

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: (values, { resetForm }) => {
            let isAdmin = localStorage.getItem('isAdmin');
            if (isAdmin && values.email === 'keyur@gmail.com' && values.password === 'keyur@3450') {
                navigate('/admin/dashboard')
            }
            else {
                alert('Invalid Credentials or you are not an Admin')
            }
            console.log(values)
            resetForm()
        }
    })

    return (

        <div className='flex flex-col gap-4 justify-center items-center h-[90vh]'>

            <h1 className='text-3xl text-[#6C1BD9] font-bold text-center md:text-4xl'>Admin Login</h1>

            <div className='border w-full md:w-1/2 lg:w-1/3 p-4 rounded-lg'>

                <form className='flex flex-col gap-4 mt-4' onSubmit={formik.handleSubmit}>

                    <input
                        type='text'
                        placeholder='Email'
                        className='border border-gray-400 p-2 rounded-lg text-sm md:text-lg focus:outline-0'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {formik.touched.email && formik.errors.email && <p className='text-red-500 text-sm transition-all duration-200 -my-2'>{formik.errors.email}</p>}

                    <input
                        type='password'
                        placeholder='Password'
                        className='border border-gray-400 focus:outline-0 p-2 rounded-lg text-sm md:text-lg'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {formik.touched.password && formik.errors.password && <p className='text-red-500 text-sm transition-all duration-200 -my-2'>{formik.errors.password}</p>}

                    <button type='submit' className='bg-blue-600 text-white p-2 rounded-lg'>Login</button>

                </form>

            </div>

        </div>
    )
}

export default AdminLogin