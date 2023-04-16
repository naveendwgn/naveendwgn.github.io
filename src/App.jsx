import React, { useState } from 'react';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Skills from './views/skills';
import Projects from './views/projects';
import About from './views/about';
import Homepage from './views/homepage';
import Footer from './views/footer';
import Photos from './views/photos';
import Logo from './assets/logo.png';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter basename="/">
    <div className="w-full sm:px-12">
    <header className="flex items-center px-6 py-6">
      <Link to='/' className='mr-4'>
        <img src={Logo} alt="logo" className="w-14 h-auto" />
      </Link>
      <div className="ml-auto flex text-lg">
        <button
          className="block md:hidden py-4 px-2 ml-auto"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? 'Close' : 'Menu'}
        </button>
        <nav
          className={`${
            showMenu ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto mt-5 md:mt-0`}
        >
          <Link
            to='/about'
            className='block mt-4 md:inline-block md:mt-0 mr-8 text-black hover:text-[#373737] py-2'
          >
            <p>About</p>
          </Link>
          <Link
            to='/skills'
            className='block mt-4 md:inline-block md:mt-0 mr-8 text-black hover:text-[#373737] py-2'
          >
            <p>Skills</p>
          </Link>
          <Link
            to='/photos'
            className='block mt-4 md:inline-block md:mt-0 mr-8 text-black hover:text-[#373737] py-2'
          >
            <p>Photos</p>
          </Link>
          <Link
            to='/projects'
            className='block mt-4 md:inline-block md:mt-0 mr-2 bg-[#060606] text-white rounded-lg px-4 py-2 hover:bg-[#131313]'
          >
            <p>Projects</p>
          </Link>
        </nav>
      </div>
    </header>
      <main className="px-4 py-8 max-[320px]:ml-8 min-[600px]:ml-52 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='photos' element={<Photos />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
      <footer className="max-[320px]:ml-8 min-[600px]:ml-44 flex px-8 py-8">
        <Footer />
      </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
