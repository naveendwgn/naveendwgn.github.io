import React from 'react'
import { useNavigate } from 'react-router-dom';

function home() {
  const navigate = useNavigate();
  return (
    <div className='max-w7x1 mx-auto text-left sm:text-left'>
        <h1 className="flex items-center text-7xl max-[480px]:text-5xl text-[#222] font-bold mb-4 mt-12"
        >Hi, I'm Naveen.</h1>
        <h1 className="flex items-center text-7xl max-[480px]:text-5xl text-[#222] font-bold mb-9"
        >I'm a Developer.</h1>
        <p className="text-lg text-[#222] mb-10">
          I'm a web developer and a tech enthusiast with a keen eye for aesthetic visuals.<br/>
          I love to craft things and I'm always looking for new opportunities to learn and grow.
        </p>
        <p className="text-lg text-[#222] mb-10">
        Currently I have been engaging myself in the field of full stack web development.
        </p>
        <div className=''>
        <button 
          className="mb-16 bg-[#101010] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#333] transition duration-300 ease-in-out"
          onClick={() => navigate('/about')}
          >
          <p>About Me</p>
        </button>
        <button 
          className='mb-16 ml-3 bg-[#101010] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#333] transition duration-300 ease-in-out'
        >
          <a href='https://drive.google.com/file/d/1GQtTquBEba4VvMJ1HrSNStckRKpjOC4F/view?usp=sharing'>Download CV</a>
        </button>
        </div>
        <div className="border border-[#222] mb-16 mr-40 max-[480px]:w-full">
        </div>
    </div>
  )
}

export default home
