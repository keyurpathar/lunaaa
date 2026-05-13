import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const AdminLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen -mx-3 md:-mx-8">

            {/* Admin Navbar  */}

            <div className='flex justify-between items-center border-b border-gray-300 p-4 px-8'>

                <h1 className='text-2xl capitalize font-bold text-[#6C1BD9]'>Admin Panel</h1>
                
                <button
                    className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer active:scale-95 transition-all duration-200'
                    onClick={() => {
                        localStorage.removeItem('isAdmin');
                        navigate('/admin');
                    }}
                >
                    Logout
                </button>
            </div>


            <div className="flex flex-1">


                <div className="p-4">
                    <Sidebar />
                </div>


                <div className="flex-1 p-8">

                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default AdminLayout
