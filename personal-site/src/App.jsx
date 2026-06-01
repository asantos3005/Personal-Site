import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './sections/Landing'
import About from './sections/About'
import Skills from './sections/Skills'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Skills/>
    </>
  )
}

export default App
