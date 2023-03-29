import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import skills from './skills';

function home() {
  return (
    <div>
        <h1 className="flex items-center ml-52 text-7xl text-[#222] font-bold mb-4 mt-8"
        >Hi, I'm Naveen.</h1>
        <h1 className="flex items-center ml-52 text-7xl text-[#222] font-bold mb-9"
        >I'm a Developer.</h1>
        <p className="text-xl text-[#222] ml-52 mb-10">
          I'm a web developer and a tech enthusiast with a keen eye for aesthetic visuals.<br/>
          I love to build things and learn new things.
        </p>
        <p className="text-xl text-[#222] ml-52 mb-32">
        Currently I have been engaging myself in the field of full stack web development.
        </p>
    </div>
  )
}

export default home
