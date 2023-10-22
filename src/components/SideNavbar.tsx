import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject, AiOutlineMail,AiOutlineAppstore} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import styles from './SideNavbar.module.css'; // Import the CSS Module

export const SideNavbar = () => {
  const [navbarVisibility,setNavbarVisibility] = useState(false)

  const handleNavbarVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
  }
  return (
    <div>
      {/* <div className={`${responsive.showItem} ${styles.menuIcon}`}>
        <div className={styles.fixedLink}>
          <AiOutlineMenu onClick={handleNavbarVisibility}/>
        </div>
      </div> */}
      {
        navbarVisibility? (
          <div className={styles.navbarVisibility}>
            <a href='#main' className={styles.navLink}>
              <AiOutlineHome size={20} className={styles.linkIcon}/>
              <span  className={styles.linkText}>Home</span>
            </a>
            <a href='#work' className={styles.navLink}>
              <AiOutlineAppstore size={20} className={styles.linkIcon}/>
              <span  className='pl-4'>Work</span>
            </a>
            <a href='#projects' className={styles.navLink}>
              <AiOutlineProject size={20} className={styles.linkIcon} />
              <span  className='pl-4'>Projects</span>
            </a>
            <a href='#main' className={styles.navLink}>
              <BsPerson size={20} className={styles.linkIcon}/>
              <span  className='pl-4'>Resume</span>
            </a>
            <a href='#contact' className={styles.navLink}>
              <AiOutlineMail size={20} className={styles.linkIcon}/>
              <span  className='pl-4'>Contact</span>
            </a>
          </div>
        ):(
          ''
        )
      }
        <div className={styles.fixedLinksContainer}>
            <a href='#main' className={styles.fixedLink}>
              <AiOutlineHome size={20}  color={'black'} className={styles.linkIcon} />
            </a>
            <a href='#work' className={styles.fixedLink}>
              <AiOutlineAppstore size={20} color={'black'} className={styles.linkIcon}/>
            </a>
            <a href='#projects' className={styles.fixedLink}>
              <AiOutlineProject size={20} color={'black'} className={styles.linkIcon} />
            </a>
            <a href='#main' className={styles.fixedLink}>
              <BsPerson size={20} color={'black'} className={styles.linkIcon} />
            </a>
            <a href='#contact' className={styles.fixedLink}>
              <AiOutlineMail size={20} color={'black'} className={styles.linkIcon} />
            </a>
      </div>
    </div>
  )
}
