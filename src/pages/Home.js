import React from 'react'
import BackImg from '../assets/Bg.avif'
import Smey from '../assets/sney.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='w-full min-h-ful relative -z-10'>
      <img src={BackImg} alt={BackImg} className='w-[100%] h-[600px] opacity-80' />
      <div className='w-full absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-between'>
        <div className='title w-[50%] h-full p-[100px]'>
          <h1 className='text-black text-[40px] font-bold'>Hi There,</h1>
          <h1 className='text-black text-[40px] font-bold'>I'm Raksmey Hem</h1>
          <p className='text-black text-[20px] font-medium'>I Am Into <span className='text-red-400'>Web Developer ||</span></p>
          <button className='btn-about mt-[10px]'>About Me</button>
        </div>
        <div className='img-box w-[50%] h-full flex items-center justify-center'>
          <img src={Smey} alt={Smey} className='h-[400px] bg-indigo-500 rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home