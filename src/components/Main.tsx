import React, { useEffect, useState } from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import  {TypeAnimation} from 'react-type-animation'
import { SideNavbar } from './SideNavbar'
const Main = () => {
  const [noteVisibility, setNoteVisibility] = useState(false)

  useEffect(()=>{
    const showTimeout = setTimeout(()=>{
        setNoteVisibility(true)
    },1000);
    const hideTimeout = setTimeout(()=>{
        setNoteVisibility(false)
    },20000);

    return ()=>{
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }
  },[])

  const handleTransitionEnd = () => {
    if (!noteVisibility) {
      // If the element's opacity has reached 0, hide it by setting visibility to 'hidden'
      setNoteVisibility(false);
    }
  };
  return (
    <div id='main'>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/0'>
            <div className='w-full fixed flex flex-row justify-between top-0'>
            <div className='flex justify-center items-center '>
                <a href='https://www.linkedin.com/in/kutlualp-tazefidan/' className='ml-7 mr-4 mt-4 h-auto rounded-full shadow-lg bg-black shadow-gray-400 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease-in duration-200 hover:bg-opacity-100'>
                            <FaLinkedinIn className='cursor-pointer' size={20} color={'#0072b1'}/>
                </a>
                <h2 className='inline-block mt-4 sm:text-2xl font-semibold text-gray-1000 text-center text-white'>Kutlualp Tazefidan</h2>
            </div>
            <h2 className='flex self-start mr-7 text-2xl text-2xl pt-5 pb-4 font-normal text-white hidden sm:block'>I'm
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
            </div>
            <div className='inline-block m-auto h-full w-full flex flex-row justify-center items-center'>
                <SideNavbar/>
                <div className='flex flex-col items-center ml-4 mr-4 sm:mx-28'>
                <h1 className='sm:text-4xl text-3xl font-medium text-gray-1000 text-left max-w-[700px] text-white bg-black/80 p-8'>Hi there, I'm Kutlualp, <br/> junior <span className="text-[#007acc]">full-stack web developer</span> and <br/> <span className='text-[#fee500]'>data scientist </span>, enthusiastic about developing inventive solutions.                    
                    </h1>
                </div>
                <div 
                onTransitionEnd={handleTransitionEnd}
                className={`fixed bottom-0 right-0 
                            bg-black/50 
                            mt-16 
                            pr-7
                            sm:text-1xl 
                            text-1xl p-4 
                            font-small 
                            text-white 
                            opacity-0 
                            transition-opacity
                            ease-in-out
                            duration-500
                            ${noteVisibility ? 'opacity-100' : 'opacity-0'}`}>
                    As of today, 10.2023, my journey to the stars begins.<br/>
                    Cheers to everyone who played a part in making it happen.<br/>
                    Even if we never cross passes again, we shall all meet in eternity.<br/>
                    Lots of love to everyone!
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main