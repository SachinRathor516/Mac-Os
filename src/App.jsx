import { useState } from 'react'
import './app.scss'
import Dock from './componants/Dock'
import Nav from './componants/Nav'
import MacWindow from './componants/windows/MacWindow'
import Github from './componants/windows/Github'
import Note from './componants/windows/Note'
import Resume from './componants/windows/Resume'

function App() {

  return (
    <main>
      <Nav/>
      <Dock/>

      <Github/>
      <Note/>
      <Resume/>
    </main>
  )
}

export default App
