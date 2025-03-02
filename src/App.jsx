import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Stages from './components/Stages'

function App() {
  return (
    <div className='bg-large-circle w-full h-screen pt-20 bg-[url(./assets/large-circle.png)] bg-no-repeat bg-contain'>
      <Navbar />
      <Hero />
      <Project />
      <Stages />
    </div>
  )
}

export default App