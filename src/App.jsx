import { useState } from 'react'
import './app.scss'
import Dock from './componants/Dock'
import Nav from './componants/Nav'
import MacWindow from './componants/windows/MacWindow'

function App() {

  return (
    <main>
      <Nav/>
      <Dock/>

      <MacWindow>
        <h1>Hello</h1>
      </MacWindow>
    </main>
  )
}

export default App
