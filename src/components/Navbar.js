import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { IoReorderThree } from "react-icons/io5"
import '../styles/Navbar.css';
import Logo from '../assets/WbProject1.png'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='navbar w-full min-h-ful flex justify-between bg-white max-sm:p-2'>
      <div className={`logo w-[50%] flex items-center justify-center ${showMenu ? 'max-sm:block' : 'max-sm:w-0'}`}>
        <img src={Logo} alt='Logo' className='w-[14%] p-2 max-sm:w-[32%] max-sm:ml-[70px]' />
      </div>
      <div className={`menu w-[50%] font-bold text-black flex items-center justify-center ${showMenu ? 'max-sm:hidden' : 'max-sm:text-[12px]'} `}>
        <NavLink to="/" className='menu-item mr-4 hover:text-[#505050]' activeClassName='active' >Home</NavLink>
        <NavLink to="/product" className='menu-item mr-4 hover:text-[#505050]' activeClassName='active'>About</NavLink>
        <NavLink to="/update" className='menu-item mr-4 hover:text-[#505050]' activeClassName='active'>Service</NavLink>
        <NavLink to="/about" className='menu-item mr-4 hover:text-[#505050]' activeClassName='active'>Portfolio</NavLink>
        <NavLink to="/login" className='menu-item mr-4 hover:text-[#505050]' activeClassName='active'>Contact</NavLink>
        {/* <div className='menu-item md:hidden'>
              <input type='text' placeholder='Search' className='px-2 py-1 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500' />
              <button className='ml-2 bg-transparent border-none focus:outline-none'>
                <IoSearch className=' hover:text-white'/>
              </button>
            </div> */}
      </div>
      <div>
        <button className='menu-item font-bold mr-4 hidden bg-[#5E5DF0] rounded-full max-sm:block max-sm:text-[40px] max-sm:text-white' onClick={toggleShowMenu}>
          <IoReorderThree className='max-sm:text-[#fff] max-md:text-[#fff] max-lg:text-[#fff] max-xl:text-[#fff] max-2xl:text-[#fff]'/>
        </button>
      </div>
    </div>
  )
}

export default Navbar