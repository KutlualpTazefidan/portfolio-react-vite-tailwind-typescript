// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
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
        <div className='w-full h-screen top-0 left-0 bg-white/0'>
            <div className="w-full h-screen  bg-cover bg-top bg-white/0 bg-fixed" style={{ backgroundImage: 'url("/images/apollo14capsule.jpg")' }}>
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
                    Even if our paths never cross again, we shall all meet in eternity.<br/>
                    Lots of love to everyone!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main