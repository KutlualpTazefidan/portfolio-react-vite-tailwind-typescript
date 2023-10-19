import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject, AiOutlineMail,AiOutlineAppstore} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

export const SideNavbar = () => {
  const [navbarVisibility,setNavbarVisibility] = useState(false)
  const handleNavbarVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNavbarVisibility} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        navbarVisibility? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-2'>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span  className='pl-4'>Home</span>
            </a>
            <a href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineAppstore size={20} color={'white'}/>
              <span  className='pl-4'>Work</span>
            </a>
            <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span  className='pl-4'>Projects</span>
            </a>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span  className='pl-4'>Resume</span>
            </a>
            <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span  className='pl-4'>Contact</span>
            </a>
          </div>
        ):(
          ''
        )
      }
        <div className='fixed left-0 md:block hidden top-[25%] z-[1]'>
          <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-black shadow-gray-400 mb-2 mr-4 ml-7 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
              <AiOutlineHome size={20}  color={'white'} />
            </a>
            <a href='#work' className='rounded-full shadow-lg bg-black shadow-gray-400 mb-2 mr-4 ml-7 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
              <AiOutlineAppstore size={20} color={'white'}/>
            </a>
            <a href='#projects' className='rounded-full shadow-lg bg-black shadow-gray-400 mb-2 mr-4 ml-7 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
              <AiOutlineProject size={20} color={'white'} />
            </a>
            <a href='#main' className='rounded-full shadow-lg bg-black shadow-gray-400 mb-2 mr-4 ml-7 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
              <BsPerson size={20} color={'white'} />
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-black shadow-gray-400 mb-2 mr-4 ml-7 p-4 cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-80 hover:scale-105 ease in duration-200 hover:bg-opacity-100'>
              <AiOutlineMail size={20} color={'white'} />
            </a>
          </div>
      </div>
    </div>
  )
}
