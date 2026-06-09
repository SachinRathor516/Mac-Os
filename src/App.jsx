import { useState } from 'react'
import './app.scss'
import Dock from './componants/Dock'
import Nav from './componants/Nav'
import MacWindow from './componants/windows/MacWindow'
import Github from './componants/windows/Github'
import Note from './componants/windows/Note'
import Resume from './componants/windows/Resume'
import Spotify from './componants/windows/Spotify'

function App() {

  return (
    <main>
      <Nav/>
      <Dock/>

      <Github/>
      <Note/>
      <Resume/>
      <Spotify/>
    </main>
  )
}

export default App
