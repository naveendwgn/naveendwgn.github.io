import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function footer() {
  return (
    <div className="flex flex-col items-center ml-48">
        <h1 className="text-4xl text-[#222] px-4 py-4 mt-10 mb-2">
          Naveen <br/> 
          Dewangan
        </h1>
        <div className="flex items-center mb-10">
            <a href="https://github.com/naveendwgn" className="text-3xl text-[#222] px-4 py-4">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/naveendewangan/" className="text-3xl text-[#222] px-4 py-4">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/naveenxig/" className="text-3xl text-[#222] px-4 py-4">
                <FaInstagram />
            </a>
            </div>
    </div>
  )
}

export default footer
