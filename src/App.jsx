import { useState } from 'react'
import './app.scss'
import Dock from './componants/Dock'
import Nav from './componants/Nav'
import MacWindow from './componants/windows/MacWindow'
import Github from './componants/windows/Github'

function App() {

  return (
    <main>
      <Nav/>
      <Dock/>

      <Github/>
    </main>
  )
}

export default App
