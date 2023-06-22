import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { IoReorderThree } from "react-icons/io5"
import Logo from '../assets/asd.png'
import '../styles/Navbar.css';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='navbar w-full min-h-ful flex justify-between max-sm:p-2'>
      <div className={`logo w-[50%] flex items-center justify-center ${showMenu ? 'max-sm:block' : 'max-sm:w-0'}`}>
        <img src={Logo} alt='Logo' className='w-[20%] p-2 max-sm:w-[32%] max-sm:ml-20' />
      </div>
      <div className={`menu w-[50%] flex items-center justify-center ${showMenu ? 'max-sm:hidden' : 'max-sm:text-[12px]'} `}>
        <NavLink to="/" className='menu-item mr-4 text-gray-400 hover:text-white' activeClassName='active' >Home</NavLink>
        <NavLink to="/product" className='menu-item mr-4 text-gray-400 hover:text-white' activeClassName='active'>Product</NavLink>
        <NavLink to="/update" className='menu-item mr-4 text-gray-400 hover:text-white' activeClassName='active'>Update</NavLink>
        <NavLink to="/about" className='menu-item mr-4 text-gray-400 hover:text-white' activeClassName='active'>About</NavLink>
        <NavLink to="/login" className='menu-item mr-4 text-gray-400 hover:text-white' activeClassName='active'>Login</NavLink>
        {/* <div className='menu-item md:hidden'>
              <input type='text' placeholder='Search' className='px-2 py-1 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500' />
              <button className='ml-2 bg-transparent border-none focus:outline-none'>
                <IoSearch className='text-gray-400 hover:text-white'/>
              </button>
            </div> */}
      </div>
      <div>
        <button className='menu-item font-bold mr-4 hover:text-gray-600 hidden max-sm:block max-sm:text-[40px] max-sm:w-[50%]' onClick={toggleShowMenu}>
          <IoReorderThree className='max-sm:text-pink'/>
        </button>
      </div>
    </div>
  )
}

export default Navbar