import { useState } from 'react'
import './app.scss'
import Dock from './componants/Dock'
import Nav from './componants/Nav'
import MacWindow from './componants/windows/MacWindow'
import Github from './componants/windows/Github'
import Note from './componants/windows/Note'
import Resume from './componants/windows/Resume'
import Spotify from './componants/windows/Spotify'
import Cli from './componants/windows/Cli'




function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    
  })


  return (
    <main>
      <Nav/>
      <Dock windowsState={windowsState} setWindowsState={setWindowsState}/>

      {windowsState.github && <Github windowName="GitHub" setWindowsState={setWindowsState}/>}
      {windowsState.note && <Note windowName="Note" setWindowsState={setWindowsState}/>}
      {windowsState.resume && <Resume windowName="Resume" setWindowsState={setWindowsState}/>}
      {windowsState.spotify && <Spotify windowName="Spotify" setWindowsState={setWindowsState}/>}
      {windowsState.cli && <Cli windowName="CLI" setWindowsState={setWindowsState}/>}
      
    </main>
  )
}

export default App
