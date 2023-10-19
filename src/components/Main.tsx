import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import  {TypeAnimation} from 'react-type-animation'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src="/images/apollo14capsule.jpg" alt="Apollo 14 Capsule - Captured during a trip in Orlando" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start '>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-1000'>I'm Kutlualp Tazefidan</h1>
                <h2 className='flex sm:text-2xl text-2xl pt-4 pb-4 font-medium'>I'm
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "a Front-End Developer",
                        4000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Data Scientist',
                        4000,
                        'a Machine Learning Enthusiast',
                        4000,
                        'an Aeronautical Engineer',
                        4000,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    style={{ fontSize: '1em', paddingLeft:'5px', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex max-w-[200px]'>
                    <a href='https://www.linkedin.com/in/kutlualp-tazefidan/' className='rounded-full shadow-lg bg-black shadow-gray-400 m-2 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
                        <FaLinkedinIn className='cursor-pointer' size={20} color={'#0072b1'}/>
                    </a>
                </div>
                <div className='fixed bottom-0 mb-8 rounded-lg bg-black/50 mt-16'>
                <h2 className='flex sm:text-1xl text-1xl p-4 font-small text-white '>
                    As of today, 20.10.2023, my journey to the stars begins.<br/>
                    Cheers to everyone who had a part in making it happen.<br/>
                    Even if we never cross passes again, we all shall meet in eternity.<br/>
                    My heart goes out to the ones, who'll be by my side wherever I go.<br/>
                    Lots of love to everyone!</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main