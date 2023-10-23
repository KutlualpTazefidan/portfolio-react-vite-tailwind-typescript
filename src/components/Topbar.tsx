// import React,{useState,useEffect} from 'react'
import {useState,useEffect} from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
// import {AiOutlineMenu,AiOutlineHome,AiOutlineProject, AiOutlineMail,AiOutlineAppstore} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import  {TypeAnimation} from 'react-type-animation'
import styles from './Topbar.module.css'; // Import the CSS Module
import sidebarStyles from './SideNavbar.module.css'

const Topbar = () => {
  const [navbarVisibility,setNavbarVisibility] = useState(false)

  const handleNavbarVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(()=>{
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const scrollThreshold = 100;

        if (currentScrollPos > prevScrollPos && currentScrollPos > scrollThreshold) {
            setNavbarVisibility(false)
        } else {
            setNavbarVisibility(true);
        }
        setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
        window.removeEventListener('scroll',handleScroll)
    }
  },[prevScrollPos])

  return (
        <div className={`${styles.topbar} ${!navbarVisibility? styles.hidden : ''}`}>
            <div className={styles.buttonNameContainer}>
                <div className={styles.link}>
                <a href='https://www.linkedin.com/in/kutlualp-tazefidan/'>
                            <FaLinkedinIn className='cursor-pointer' size={20} color={'#0072b1'}/>
                </a>
                </div>
                <h2 className={styles.title}>Kutlualp Tazefidan</h2>
            </div>
            <h2 className={styles.titleSmallScreen}>Kutlualp Tazefidan</h2>
            <h2 className={styles.description}>I'm
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
            <div className={styles.menuIcon}>
                <div className={`${sidebarStyles.fixedLink} ${styles.link}`}>
                    <AiOutlineMenu onClick={handleNavbarVisibility}/>
                </div>
            </div>
    </div> 
  )
}

export default Topbar