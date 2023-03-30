import React from 'react'
import { RiLinksFill } from 'react-icons/ri'
import Naveen from '../assets/naveen.jpg'


function about() {
  return (
    <div className='max-w7x1 mx-auto text-left sm:text-left'>
            <h1 className="flex items-center text-6xl text-[#222] mb-8 mt-8"
                >About Me!</h1>
        <div class="flex flex-col md:flex-row pr-52 max-[600px]:pr-0">
            <div class="md:w-2/3">
                <p class="text-xl text-[#222] mb-7 mt-0">
                Final year student pursuing bachelors in technology focused in electrical engineering
                @ <a href="" class="text-[#222]">CSVTU</a><br/>
                </p>
                <p class="text-xl text-[#222] mb-7 mt-6">
                I love building things and learning new things.
                </p>
                <p class="text-xl text-[#222] mb-7 mt-6">
                Outside of coding I enjoy watching wrestling, photography and tacos.
                </p>
            </div>
             <div class="md:w-1/3">
            <img class="justify-end rounded-lg w-44 mb-10 mt- ml-20 border-4 border-[#7d7d7d28]"
                src={Naveen} alt="Naveen Dewangan" />
            </div>
        </div>
          <div className="flex items-center justify-center mb-10 mt-20 mr-10 text-2xl pr-8 max-[600px]:pr-0">
             <RiLinksFill />
          </div>
          <div className="flex flex-wrap items-center justify-evenly mt-6 mr-14 pr-8 max-[600px]:pr-0">
             <a href="mailto:naveen.dewangan141@gmail.com"
              className="text-lg text-[#222] ml-4">
                email
            </a>
            <a href="https://github.com/naveendwgn" className="text-lg text-[#222]">
                github
            </a>
            <a href="https://www.linkedin.com/in/naveendewangan/" className="text-lg text-[#222]">
                linkedin
            </a>
            <a href="https://www.instagram.com/naveenxig/" className="text-lg text-[#222]">
                instagram
            </a>
            <a href="https://leetcode.com/naveendewangan/" className="text-lg text-[#222]">
                leetcode
            </a>
            <a href="https://www.codechef.com/users/naveendewangan" className="text-lg text-[#222] ml-4">
                codechef
            </a>
            <a href="https://naveendwgn.medium.com/naveendwgn" className="text-lg text-[#222]">
                medium
            </a>
            <a href="https://www.youtube.com/@NaveenDewangan/videos" className="text-lg text-[#222]">
                youtube
            </a>
            <a href="https://twitter.com/naveenfu"
             className="text-lg text-[#222]">
                twitter
            </a>
            <a href="" className="text-lg text-[#222]">
                resume
            </a>
        </div>
    </div>
  )
}

export default about
