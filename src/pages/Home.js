import React from 'react'
import BackImg from '../assets/Bg.avif'
import Smey from '../assets/sney.png'
import '../styles/Home.css'
import {BsLinkedin, BsGithub, BsTwitter, BsFacebook, BsTelegram} from 'react-icons/bs'

function Home() {
  return (
    <div className='w-full min-h-ful relative -z-10'>
      <img src={BackImg} alt={BackImg} className='w-[100%] h-[600px] opacity-80' />
      <div className='w-full absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-between '>
          <div className='title p-[100px] max-sm:w-[50%] max-sm:bg-slate-500 max-sm:p-4'>
          <h1 className='text-[#000000] text-[40px] font-bold mt-[8px] max-sm:mt-[8px]'>Hi There,</h1>
          <h1 className='text-[#000000] text-[40px] font-bold mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>I'm Raksmey Hem</h1>
          <p className='text-[#000000] text-[20px] font-medium mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>I Am Into <span className='text-5xl font-extrabold text-blue-600 drop-shadow-lg max-sm:mt-[8px]'>Web Developer ||</span></p>
          <button className='btn-about mt-[12px] max-sm:mt-[18px]'>About Me</button>
          <div className='social-media mt-[24px] flex justify-start'>
            <ul className='space-x-4'>
              <li>
                <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                  <BsLinkedin className='text-4xl bg-indigo-500 rounded-md' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                  <BsGithub className='text-4xl bg-indigo-500 rounded-md' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                  <BsTwitter className='text-4xl bg-indigo-500 rounded-md' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                  <BsFacebook className='text-4xl bg-indigo-500 rounded-md' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                  <BsTelegram className='text-4xl bg-indigo-500 rounded-md' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='img-box w-[50%] h-full flex items-center justify-center max-sm:w-[50%]'>
          <img src={Smey} alt={Smey} className='h-[400px] bg-indigo-500 rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home