// import { SideNavbar } from './components/SideNavbar.tsx'
import GradientOverlay from './components/GradientOverlay.tsx'
import PageIntro from './components/PageIntro.tsx'
import CustomNavigation from './components/CustomNavigation.tsx'
import styles from './App.module.css'
import {Routes, Route, useLocation} from "react-router-dom"

import SectionProfile from './components/SectionProfile.tsx'
import SectionContact from './components/SectionContact.tsx'
import SectionTimeline from './components/SectionTimeline.tsx'
import SectionProjects from './components/SectionProjects.tsx'

// import Topbar from './components/Topbar.tsx'
// import Main from './components/Main.tsx'
// import AlphaVideo from './components/AlphaVideo.tsx'
// import CustomVideo from './components/CustomVideo.tsx'
// import StartText from './components/StartText.tsx'
// import Introduction from './components/Introduction.tsx'

function App() {
  const location = useLocation();

  return (
    <div className={styles.appContainer}>
      <PageIntro/>
      <GradientOverlay/>
      <CustomNavigation/>
      <Routes location={location} key={location.pathname}>
        <Route path='/profile' element={<SectionProfile/>}/>
        <Route path='/contact' element={<SectionContact/>}/>
        <Route path='/timeline' element={<SectionTimeline/>}/>
        <Route path='/projects' element={<SectionProjects/>}/>
      </Routes>
      {/* <Topbar/> */}
      {/* <Introduction/> */}
      {/* <StartText/> */}
      {/* <div>Helolol</div> */}
      {/* <CustomVideo videoPath='/videos/Web_text.webm'/> */}
      {/* <SideNavbar/> */}
      {/* <Main/> */}
      {/* <Timeline/> */}
    </div>    
  )
}

export default App
