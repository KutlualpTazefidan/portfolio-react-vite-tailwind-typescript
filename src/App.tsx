import { SideNavbar } from './components/SideNavbar.tsx'
import Background from './components/Background.tsx'
import Timeline from './components/Timeline.tsx'
import Topbar from './components/Topbar.tsx'
import Main from './components/Main.tsx'

function App() {

  return (
    <div>
      <Background/>
      <SideNavbar/>
      <Topbar/>
      {/* <Main/> */}
      {/* <Timeline/> */}
    </div>    
  )
}

export default App
