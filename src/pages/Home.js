import React from 'react'
import BackImg from '../assets/WebBG.png'
import Smey from '../assets/sney.png'
import '../styles/Home.css'
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsTelegram
} from 'react-icons/bs'
import Portfolio from '../components/Portfolio'
import Swalltial from '../assets/swallowtail-arrow-svgrepo-com.png'
import Cooperate from '../assets/cooperate-svgrepo-com.png'
import ComLaptop from '../assets/com-laptop-code-svgrepo-com.png'
import Cha from '../assets/cha-rect-swear-svgrepo-com.png'
import Cloud from '../assets/cld-cloud-wifi-svgrepo-com.png'
import WiFiSignel from '../assets/wifi2-svgrepo-com.png'
import SPortfolio from '../components/SPortfolio'


function Home () {
  return (
    <div>
      <div className='w-full min-h-ful relative'>
        <img
          src={BackImg}
          alt={BackImg}
          className='w-[100%] max-sm:h-[650px]'
        />
        <div className='w-full flex items-center justify-around absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] max-sm:flex max-sm:flex-col-reverse max-sm:h-[75%]'>
          
          <img
            src={Cooperate}
            alt={Cooperate}
            className='w-[56px] fixed right-12 bottom-10 max-sm:fixed max-sm:right-4 max-sm:bottom-[-15%]'
          />
          <img
            src={ComLaptop}
            alt={ComLaptop}
            className='w-[96px] fixed bottom-0 left-[30%] max-sm:fixed max-sm:left-[58%] max-sm:bottom-5'
          />
          <img
            src={Cha}
            alt={Cha}
            className='w-[82px] fixed top-0 right-[132px] max-sm:fixed max-sm:right-4 max-sm:top-[19%] max-sm:w-[72px]'
          />
          <img
            src={Cloud}
            alt={Cloud}
            className='w-[78px] fixed top-0 left-10 max-sm:fixed max-sm:left-2.5 max-sm:top-[-15%]'
          />
          <img
            src={Swalltial}
            alt={Swalltial}
            className='w-[120px] fixed top-6 left-[35%] max-sm:w-[82px] max-sm:fixed max-sm:left-[50%] max-sm:top-[35%]'
          />
          <img
            src={WiFiSignel}
            alt={WiFiSignel}
            className='w-[72px] fixed bottom-14 left-[34.1%] max-sm:w-[52px] max-sm:fixed max-sm:left-[75%] max-sm:bottom-[17%]'
          />

          <div className='title p-[100px] max-sm:w-full max-sm:p-6 max-sm:mt-20 max-sm:flex max-sm:flex-col max-sm:justify-center'>
            <h1 className='text-transparent bg-gradient-to-r from-blue-900 to-red-600 bg-clip-text text-[40px] font-bold mt-[8px] max-sm:mt-[8px] max-sm:text-[28px]'>
              Hi There,
            </h1>
            <h1 className='text-[#000000] text-[40px] font-normal mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>
              I am{' '}
              <span className='text-4xl font-extrabold text-blue-600 drop-shadow-lg max-sm:mt-[8px] max-sm:font-bold max-sm:text-[23px]'>
                Hem Raksmey
              </span>
            </h1>
            <p className='text-[#000000] text-[20px] font-medium mt-[8px] max-sm:text-[18px] max-sm:mt-[8px]'>
              I Am Into{' '}
              <span className='text-5xl font-extrabold text-blue-600 drop-shadow-lg max-sm:mt-[8px] max-sm:text-[29px]'>
                Web Developer
              </span>
            </p>
            <button className='btn-about mt-[12px] max-sm:mt-[18px]'>
              About Me
            </button>
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
            <img
              src={Smey}
              alt={Smey}
              className='custom-rounded h-[400px] rounded-full max-sm:h-[240px]'
            />
          </div>
        </div>
      </div>
      <Portfolio />
      <SPortfolio/>
      {/* <div className='w-full h-[760px] flex flex-col items-center justify-center'>
        <div className='content-left w-[80%] h-[20%] flex flex-col items-center justify-center text-center text-4xl bg-lime-500'>
          <h1 className='w-[80%] text-[#5E5DF0] text-2xl font-medium'>Portfolio</h1>
          <h2 className='text-black font-bold underline underline-offset-2'>Expertise Service! Let's check it out</h2>
          <p className='text-sm text-black'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='content-right flex gap-6 items-center justify-evenly bg-slate-500'>
          <div className='list-detai w-[320px] flex flex-col items-center p-8 rounded-2xl bg-amber-800'>
            <img src='' className=''/>
            <h2 className=''>UX UI Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='list-detai w-[320px] flex flex-col items-center p-8 rounded-2xl bg-amber-800'>
            <img src='' className=''/>
            <h2 className=''>UX UI Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='list-detai w-[320px] flex flex-col items-center p-8 rounded-2xl bg-amber-800'>
            <img src='' className=''/>
            <h2 className=''>UX UI Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home
