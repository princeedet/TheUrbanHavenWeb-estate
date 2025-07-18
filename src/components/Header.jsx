import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'


function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/" className="flex items-center gap-2">
        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
          <span className="text-slate-500">The Urban</span>
          <span className="text-slate-700">Haven</span>
        </h1>
      </Link>
        <form className="bg-slate-100 flex items-center rounded-lg p-2 sm:p-3 sm:px-4 sm:py-3">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline ">Home</li>
          </Link>
          <Link to="/about">
            <li className='hidden sm:inline text-slate-700 hover:underline '>About</li>
          </Link>
          <Link to="/profile">
            <li className='hidden sm:inline text-slate-700 hover:underline '>Profile</li>
          </Link>
          <Link to="/signin">
            <li className='text-slate-700 hover:underline '>Sign In</li>
          </Link>
          <Link to="/signup">
            <li className='text-slate-700 hover:underline '>Sign Up</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header