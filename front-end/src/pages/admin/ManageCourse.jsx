import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const ManageCourse = () => {
    const [courses, setCourses] = useState([]);
    const [editId, setEditId] = useState(null);

    // yup validation schema 
    const validationSchema = Yup.object({
        courseHeading: Yup.string()
            .required('Course heading is required')
            .min(3, 'Heading must be at least 3 characters'),
        coursePrice: Yup.number()
            .typeError('Must be a valid number')
            .required('Course price is required')
            .positive('Price must be greater than 0'),
        discount: Yup.number()
            .typeError('Must be a valid number')
            .min(0, 'Discount cannot be negative')
            .required('Discount is required (enter 0 if none)'),
        details: Yup.string()
            .required('Short details are required')
            .max(100, 'Keep short details under 100 characters'),
        fullDetails: Yup.string()
            .required('Full details are required')
            .min(20, 'Please provide more comprehensive details'),
        img: Yup.string()
            .url('Must be a valid image URL (e.g., https://...)')
            .required('Course image URL is required')
    })

    // 2. Formik Setup
    const formik = useFormik({
        initialValues: {
            courseHeading: '',
            coursePrice: '',
            discount: '',
            details: '',
            fullDetails: '',
            img: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {

                const backendData = {
                    name: values.courseHeading,
                    price: Number(values.coursePrice),
                    discount: Number(values.discount),
                    details: values.details,
                    fullDetails: values.fullDetails,
                    img_url: values.img
                };

                if (editId) {
                    // Update Course
                    await axios.patch(
                        `http://localhost:5000/course/updateCourse/${editId}`,
                        backendData
                    );
                    alert("Course Updated Successfully ");
                    setEditId(null);
                } else {
                    // Add Course
                    await axios.post(
                        "http://localhost:5000/course/addCourse",
                        backendData
                    );
                    alert("Course Added Successfully");
                }

                resetForm();
                fetchCourses();

            } catch (err) {
                console.log(err);
                alert("Something went wrong");
            }
        }
    })

    const fetchCourses = async () => {
        try {
            const res = await axios.get("http://localhost:5000/course");
            if (res.data.success) {
                setCourses(res.data.data);
            }
        } catch (err) {
            console.error("Error fetching courses", err);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    const handleDelete = async (id) => {

        try {
            await axios.delete(`http://localhost:5000/course/deleteCourse/${id}`);
            alert("Course Deleted");
            fetchCourses();
        } catch (err) {
            console.log(err);
            alert("Failed to delete course");
        }

    }

    const handleEdit = (course) => {
        setEditId(course._id);
        formik.setValues({
            courseHeading: course.name,
            coursePrice: course.price,
            discount: course.discount,
            details: course.details,
            fullDetails: course.fullDetails,
            img: course.img_url
        });
    }

    const handleCancelEdit = () => {
        setEditId(null);
        formik.resetForm();
    }

    return (
        <>

            <div>
                <h1 className='text-2xl font-bold mb-6 text-[#6C1BD9]'>Add New Course</h1>

                <div className='bg-white p-6 rounded-lg shadow-sm w-full lg:w-3/4 border border-gray-200'>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>

                        {/* Course Heading */}
                        <div className='flex flex-col'>
                            <label className='font-semibold text-gray-700 mb-1'>Course Heading :</label>
                            <input
                                type="text"
                                name="courseHeading"
                                value={formik.values.courseHeading}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border rounded px-3 py-2 focus:outline-none ${formik.touched.courseHeading && formik.errors.courseHeading ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                placeholder='e.g., Advanced MERN Stack Development'
                            />
                            {formik.touched.courseHeading && formik.errors.courseHeading && (
                                <p className='text-red-500 text-sm mt-1'>{formik.errors.courseHeading}</p>
                            )}
                        </div>

                        <div className='flex flex-col md:flex-row gap-5'>
                            {/* Course Price */}
                            <div className='flex flex-col flex-1'>
                                <label className='font-semibold text-gray-700 mb-1'>Price (₹) :</label>
                                <input
                                    type="text"
                                    name="coursePrice"
                                    value={formik.values.coursePrice}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`border rounded px-3 py-2 focus:outline-none ${formik.touched.coursePrice && formik.errors.coursePrice ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                    placeholder='e.g., 199'
                                />
                                {formik.touched.coursePrice && formik.errors.coursePrice && (
                                    <p className='text-red-500 text-sm mt-1'>{formik.errors.coursePrice}</p>
                                )}
                            </div>

                            {/* Discount */}
                            <div className='flex flex-col flex-1'>
                                <label className='font-semibold text-gray-700 mb-1'>Discount (%) :</label>
                                <input
                                    type="text"
                                    name="discount"
                                    value={formik.values.discount}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`border rounded px-3 py-2 focus:outline-none ${formik.touched.discount && formik.errors.discount ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                    placeholder='e.g., 20'
                                />
                                {formik.touched.discount && formik.errors.discount && (
                                    <p className='text-red-500 text-sm mt-1'>{formik.errors.discount}</p>
                                )}
                            </div>
                        </div>

                        {/* Short Details */}
                        <div className='flex flex-col'>
                            <label className='font-semibold text-gray-700 mb-1'>Short Details :</label>
                            <input
                                type="text"
                                name="details"
                                value={formik.values.details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border rounded px-3 py-2 focus:outline-none ${formik.touched.details && formik.errors.details ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                placeholder='A brief one-sentence summary of the course'
                            />
                            {formik.touched.details && formik.errors.details && (
                                <p className='text-red-500 text-sm mt-1'>{formik.errors.details}</p>
                            )}
                        </div>

                        {/* Full Details */}
                        <div className='flex flex-col'>
                            <label className='font-semibold  text-gray-700 mb-1'>Full Details :</label>
                            <textarea
                                name="fullDetails"
                                rows="4"
                                value={formik.values.fullDetails}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border rounded resize-none px-3 py-2 focus:outline-none ${formik.touched.fullDetails && formik.errors.fullDetails ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                placeholder='Write the full comprehensive description here...'
                            />
                            {formik.touched.fullDetails && formik.errors.fullDetails && (
                                <p className='text-red-500 text-sm mt-1'>{formik.errors.fullDetails}</p>
                            )}
                        </div>

                        {/* Image URL */}
                        <div className='flex flex-col'>
                            <label className='font-semibold text-gray-700 mb-1'>Course Image URL :</label>
                            <input
                                type="text"
                                name="img"
                                value={formik.values.img}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border rounded px-3 py-2 focus:outline-none ${formik.touched.img && formik.errors.img ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                                placeholder='e.g., https://example.com/image.png'
                            />
                            {formik.touched.img && formik.errors.img && (
                                <p className='text-red-500 text-sm mt-1'>{formik.errors.img}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className='mt-4 flex justify-start gap-4'>
                            <button
                                type="submit"
                                className={`px-8 py-3 text-white font-semibold rounded shadow-md active:scale-95 transition-all duration-300 w-full md:w-auto ${editId ? 'bg-green-600 hover:bg-green-700' : 'bg-[#6C1BD9] hover:bg-purple-800'}`}
                            >
                                {editId ? 'Update Course' : 'Create Course'}
                            </button>

                            {editId && (
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    className='px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded shadow-md active:scale-95 transition-all duration-300 w-full md:w-auto'
                                >
                                    Cancel
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </div>

            <div className='mt-12 overflow-x-auto pb-10'>
                <h2 className='text-xl font-bold mb-4 text-[#6C1BD9]'>All Courses</h2>

                {courses.length === 0 ? (
                    <p className='text-gray-500 bg-white p-4 rounded border border-gray-200 shadow-sm'>No courses loaded. Try adding one via the form!</p>
                ) : (
                    <table className="min-w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden text-left">
                        <thead className="bg-[#6C1BD9] text-white">
                            <tr>
                                <th className="py-3 px-4 font-medium tracking-wide">Image</th>
                                <th className="py-3 px-4 font-medium tracking-wide">Course Name</th>
                                <th className="py-3 px-4 font-medium tracking-wide">Details</th>
                                <th className="py-3 px-4 font-medium tracking-wide">Price</th>
                                <th className="py-3 px-4 font-medium tracking-wide">Discount</th>
                                <th className="py-3 px-4 font-medium tracking-wide text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course => (
                                <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4 w-24">
                                        <img src={course.img_url} alt={course.name} className="w-16 h-12 object-cover rounded shadow-sm border" />
                                    </td>
                                    <td className="py-3 px-4 font-semibold text-gray-800">{course.name}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600 max-w-xs truncate">{course.details}</td>
                                    <td className="py-3 px-4 text-green-600 font-bold">₹{course.price}</td>
                                    <td className="py-3 px-4 text-red-500 font-semibold">{course.discount}%</td>
                                    <td className="py-3 px-4 whitespace-nowrap text-right">
                                        <button
                                            onClick={() => handleEdit(course)}
                                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded mr-2 hover:bg-blue-200 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default ManageCourse