import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <nav className='flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md'>
              <h1 className='font-bold text-3xl text-orange-700'>Food Express</h1>

              <div className=' flex justify-between gap-6'>
                <Link to='/' className='text-gray-600 dark:text-gray-300 hover:text-orange-700' >Home</Link>
                <Link to='/restaurants' className='text-gray-600 dark:text-gray-300 hover:text-orange-700' >Restaurants</Link>
              </div>
        </nav>
    
  )
}

export default Navbar
