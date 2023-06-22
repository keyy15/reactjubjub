import React from 'react'
import Bg from '../assets/bg.jpg'

function Home() {
  return (
    <div className='w-full min-h-ful flex justify-between'>
      <div className='w-[40%] flex items-center justify-center'>
        <div className='w-full flex flex-col items-stretch pl-8'>
          <h1 className='text-[48px] text-text-custom' style={{ '--tw-text-opacity': '1', color: 'rgb(34, 99, 133)' }}>Back / Front-End</h1>
          <span className='text-[28px] '>Landing Pages</span>
          <p className='mt-8 '>Lorem ipsum dolor sit amet, consecteuture adipiscing elit, sed diam nonumoomy.</p>
        </div>
      </div>
      <div className='w-[60%] rounded'>
        <img src={Bg} alt={Bg} className='rounded'/>
      </div>
    </div>
  )
}

export default Home