import React from 'react'
import BackImg from '../assets/Bg.avif'
import Smey from '../assets/sney.png'

function Home() {
  return (
    <div className='w-full min-h-full bg-black relative -z-10'>
      <img src={BackImg} alt={BackImg} className='w-[100%] h-[600px]' />
      <div className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-between bg-red-950'>
        <div className='title w-[50%] h-full'>
          <h1 className='text-black text-[50px]'>Hi There,</h1>
          <h1 className='text-black'>I'm Raksmey Hem</h1>
          <p className='text-black'>I Am Into Web Developer</p>
          <button> About Me  </button>
        </div>
        <div className='img-box w-[50%] h-full'>
          <img src={Smey} alt={Smey}/>
        </div>
      </div>
    </div>
  )
}

export default Home