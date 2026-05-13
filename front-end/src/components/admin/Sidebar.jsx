import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-64 border my-4 rounded-lg border-gray-300'>

            {/* logo  */}
            <div>

                <Link to='/admin/course' className='hover:bg-gray-200 cursor-pointer transition-all duration-200 p-4 block text-center'>Manage Course</Link>

                <Link to='/admin/contact' className='hover:bg-gray-200 cursor-pointer transition-all duration-200 p-4 block text-center'>Manage Contact</Link>
            </div>

        </div>
    )
}

export default Sidebar