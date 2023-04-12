import React from 'react';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Skills from './views/skills';
import Projects from './views/projects';
import About from './views/about';
import Homepage from './views/homepage';
import Footer from './views/footer';
import Photos from './views/photos';
import Logo from './assets/logo.png';

function App() {
  return (
    <BrowserRouter basename="/">
    <div className="w-full sm:px-8 bg-gradient-to-br from-[#EF3B36] via-[#ffdde1ef]">
      <header className="flex items-center px-6 py-6">
        <Link to='/' className='mr-4'>
          <img src={Logo} alt="logo" className="w-14 h-auto" />
        </Link>
        <div className="ml-auto flex text-lg">
            <Link to='projects' className='mr-8 text-black hover:text-[#373737]'>
             <p>Projects</p>
            </Link>
              <Link to='skills' className='mr-8 text-black hover:text-[#373737]'>
                <p>Skills</p>
              </Link>
              <Link to='photos' className='mr-8 text-black hover:text-[#373737]'>
                <p>Photos</p>
              </Link>
            <Link to='about' className='mr-4 text-black hover:text-[#373737]'>
             <p>About</p>
            </Link>
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
