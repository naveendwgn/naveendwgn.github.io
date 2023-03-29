import React from 'react'
import Home from './herosection'
import Skills from './skills'
import Projects from './projects'
import About from './about'

function homepage() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <About />
    </div>
  )
}

export default homepage
