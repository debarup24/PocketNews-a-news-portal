import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='py-5 bg-blue-400 text-gray-950 shadow-md  transition-colors duration-300'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
            <div className='text-xl font-bold'>
                <Link href="">Pocket News</Link>
            </div>

        </nav>
    </header>
    
  )
}

export default Navbar