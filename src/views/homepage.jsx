import React from 'react'
import Home from './herosection'
import Skills from './skills'
import Projects from './projects'
import About from './about'
import Videos from './videos'
import { HiArrowNarrowDown } from 'react-icons/hi';

function homepage() {
  return (
    
     <div>
        <Home />
        <HiArrowNarrowDown className='text-2xl text-[#222]'
        />
        <Skills />
        <Projects />
      </div>
  )
}

export default homepage
