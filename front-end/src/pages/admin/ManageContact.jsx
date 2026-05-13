import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import axios from 'axios'

const ManageContact = () => {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);

  const validationSchema = Yup.object({
    number: Yup.string()
      .required("Number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Number must be at least 10 digits")
      .max(10, "Number must be at most 10 digits"),
  })

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/contact/');
      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching contacts", err);
    }
  }

  useEffect(() => {
    fetchContacts();
  }, [])

  const formik = useFormik({
    initialValues: {
      number: ""
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (editId) {
          await axios.patch(`http://localhost:5000/contact/updateContact/${editId}`, values);
          alert("Contact Updated Successfully");
          setEditId(null);
        } else {
          await axios.post('http://localhost:5000/contact/addContact', values);
          alert("Contact Added Successfully");
        }
        resetForm();
        fetchContacts();
      } catch (err) {
        console.log(err);
        alert(err.response?.data?.message || "Something went wrong");
      }
    }
  })

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contact/deleteContact/${id}`);
      alert("Contact Deleted");
      fetchContacts();
    } catch (err) {
      console.log(err);
      alert("Failed to delete contact");
    }
  }

  const handleEdit = (contact) => {
    setEditId(contact._id);
    formik.setValues({
      number: contact.number
    });
  }

  const handleCancelEdit = () => {
    setEditId(null);
    formik.resetForm();
  }

  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl font-bold mb-6 text-[#6C1BD9] ">Manage Contact</h1>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm w-full lg:w-1/2 border border-gray-200'>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className='flex flex-col'>
              <label htmlFor="number" className="font-semibold text-gray-700 mb-1">Contact Number :</label>
              <input
                name='number'
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className={`border rounded px-3 py-2 transition-all duration-100 focus:outline-none ${formik.touched.number && formik.errors.number ? 'border-red-500' : 'border-gray-300 focus:border-[#6C1BD9]'}`}
                placeholder="Enter contact number"
              />
              {formik.touched.number && formik.errors.number && (
                <p className='text-red-500 text-sm mt-1'>{formik.errors.number}</p>
              )}
            </div>

            <div className='mt-2 flex justify-start gap-4'>
              <button
                type='submit'
                className={`px-8 py-3 text-white font-semibold rounded shadow-md active:scale-95 transition-all duration-300 w-full md:w-auto ${editId ? 'bg-green-600 hover:bg-green-700' : 'bg-[#6C1BD9] hover:bg-[#4e0ea5]'}`}
              >
                {editId ? 'Update Contact' : 'Submit'}
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

        <div className='mt-12 overflow-x-auto pb-10'>
          <h2 className='text-xl font-bold mb-4 text-[#6C1BD9]'>All Contact Numbers</h2>

          {contacts.length === 0 ? (
            <p className='text-gray-500 bg-white p-4 rounded border border-gray-200 shadow-sm'>No contacts found.</p>
          ) : (
            <table className="min-w-3/4  border-2 border-gray-200 bg-white rounded-lg overflow-hidden text-left shadow-sm">
              <thead className="bg-[#6C1BD9] text-white">
                <tr>
                  <th className='py-3 px-4 font-medium tracking-wide'>Number</th>
                  <th className='py-3 px-4 font-medium tracking-wide text-right'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className='py-3 px-4 font-semibold text-gray-800'>{contact.number}</td>
                    <td className='py-3 px-4 whitespace-nowrap text-right'>
                      <button
                        onClick={() => handleEdit(contact)}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded mr-2 hover:bg-blue-200 transition-colors font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition-colors font-medium"
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
      </div>
    </>
  )
}

export default ManageContact