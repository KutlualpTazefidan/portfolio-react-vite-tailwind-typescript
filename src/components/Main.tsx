import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import  {TypeAnimation} from 'react-type-animation'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src="/images/apollo14capsule.jpg" alt="Apollo 14 Capsule - Captured during a trip in Orlando" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start '>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-1000'>I'm Kutlualp Tazefidan</h1>
                <h2 className='flex sm:text-2xl text-2xl pt-4 pb-4 font-medium'>I'm
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "a Front-End Developer",
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Data Scientist',
                        2000,
                        'a Machine Learning Enthusiast',
                        2000,
                        'an Aeronautical Engineer',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    style={{ fontSize: '1em', paddingLeft:'5px', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex max-w-[200px]'>
                    <a href='https://www.linkedin.com/in/kutlualp-tazefidan/'>
                        <div className='rounded-full bg-black p-2 shadow-gray-100 hover:scale-110 ease-in duration-200'>
                            <FaLinkedinIn className='cursor-pointer' size={20} color={'#0072b1'}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main