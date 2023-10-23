import { SideNavbar } from './components/SideNavbar.tsx'
import Background from './components/Background.tsx'
import Timeline from './components/Timeline.tsx'
import Topbar from './components/Topbar.tsx'
import Main from './components/Main.tsx'
import AlphaVideo from './components/AlphaVideo.tsx'
import CustomVideo from './components/CustomVideo.tsx'
import StartText from './components/StartText.tsx'
import PageIntro from './components/PageIntro.tsx'
import Introduction from './components/Introduction.tsx'

// <ParallaxProvider>
//   <Background/>
// </ParallaxProvider>
function App() {

  return (
    <div>
      <PageIntro/>
      <Background/>
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
