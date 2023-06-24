import React from 'react'
import BackImg from '../assets/Bg.avif'
import Smey from '../assets/sney.png'
import '../styles/Home.css'
import {BsLinkedin, BsGithub, BsTwitter, BsFacebook, BsTelegram} from 'react-icons/bs'

function Home() {
  return (
    <div>
      <div className='w-full min-h-ful relative -z-10'>
        <img src={BackImg} alt={BackImg} className='w-[100%] h-[688px] opacity-50 max-sm:h-[688px]' />
        <div className='w-full flex items-center justify-around absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] max-sm:flex max-sm:flex-col-reverse max-sm:h-[75%]'>
            <div className='title p-[100px] max-sm:w-full max-sm:p-6 '>
            <h1 className='text-transparent bg-gradient-to-r from-blue-900 to-red-600 bg-clip-text text-[40px] font-bold mt-[8px] max-sm:mt-[8px] max-sm:text-[28px]'>Hi There,</h1>
            <h1 className='text-[#000000] text-[40px] font-normal mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>I am <span className='text-4xl font-extrabold text-blue-600 drop-shadow-lg max-sm:mt-[8px] max-sm:font-bold max-sm:text-[23px]'>Hem Raksmey</span></h1>
            <p className='text-[#000000] text-[20px] font-medium mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>I Am Into <span className='text-5xl font-extrabold text-blue-600 drop-shadow-lg max-sm:mt-[8px] max-sm:text-[29px]'>Web Developer</span></p>
            <button className='btn-about mt-[12px] max-sm:mt-[18px]'>About Me</button>
            <div className='social-media mt-[24px]'>
              <ul className='space-x-4 max-sm:flex max-sm:space-x-1'>
                <li className='bg-slate-400'>
                  <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                    <BsLinkedin className='text-4xl bg-indigo-500 rounded-md max-sm:text-[32px]' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                    <BsGithub className='text-4xl bg-indigo-500 rounded-md max-sm:text-[32px]' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                    <BsTwitter className='text-4xl bg-indigo-500 rounded-md max-sm:text-[32px]' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                    <BsFacebook className='text-4xl bg-indigo-500 rounded-md max-sm:text-[32px]' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/watch?v=akkYrXYSo28'>
                    <BsTelegram className='text-4xl bg-indigo-500 rounded-md max-sm:text-[32px]' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='img-box w-[50%] h-full flex items-center justify-center max-sm:w-full max-sm:h-[25%]'>
            <img src={Smey} alt={Smey} className='custom-rounded h-[400px] rounded-full max-sm:h-[240px]'/>
          </div>
        </div>
      </div>
      <div className='w-full h-[760px] bg-gray-600 flex flex-col items-center justify-center'>
        <div className='content-left w-80% h-[20%] flex items-center  justify-start text-4xl bg-slate-400'>
          <h1 className='w-[80%]'>Portfolio</h1>
        </div>
        <div className='content-right w-full h-[80%] flex items-center justify-center bg-slate-500'>Right</div>
      </div>
    </div>
  )
}

export default Home