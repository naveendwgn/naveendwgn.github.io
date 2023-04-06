import React from 'react'
import { RiLinksFill } from 'react-icons/ri'
import { SiGmail, SiMedium, SiLeetcode, SiCodechef } from 'react-icons/si'
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter   } from 'react-icons/fa'
import Naveen from '../assets/naveen.jpg'


function about() {
  return (
    <div className='max-w7x1 mx-auto text-left sm:text-left'>
            <h1 className="flex items-center text-5xl text-[#222] mb-8 mt-8"
                >About Me!</h1>
        <div class="flex flex-col md:flex-row pr-72 max-[600px]:pr-0">
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
            <img class="justify-end rounded-full w-48 mb-10 mt-0 max-[600px]:mb-0  max-[600px]:ml-20 ml-6 border-4 border-[#7d7d7d28]"
                src={Naveen} alt="Naveen Dewangan" />
            </div>
        </div>
          <div className="flex items-center justify-center
           mb-10 mt-20 mr-28 text-4xl pr-8 max-[600px]:pr-0 max-[600px]:ml-24 max-[600px]:mt-12">
             <RiLinksFill />
          </div>
          <div className="flex flex-wrap items-center justify-evenly max-[600px]:mr-8 mt-6 mr-32 pr-8 max-[600px]:pr-0">
             <a href="mailto:naveen.dewangan141@gmail.com"
              className="text-2xl text-[#222] ml-4">
                <SiGmail />
            </a>
            <a href="https://github.com/naveendwgn" className="text-2xl text-[#222]">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/naveendewangan/" className="text-2xl text-[#222]">
                <FaLinkedinIn />
            </a>
            <a href="https://leetcode.com/naveendewangan/" className="text-2xl text-[#222]">
                <SiLeetcode />
            </a>
            <a href="https://www.codechef.com/users/naveendewangan" className="text-2xl text-[#222] ml-4">
                <SiCodechef />
            </a>
            <a href="https://naveendwgn.medium.com/naveendwgn" className="text-2xl text-[#222]">
                <SiMedium />
            </a>
            <a href="https://www.youtube.com/@NaveenDewangan/videos" className="text-2xl text-[#222]">
                <FaYoutube />
            </a>
            <a href="https://twitter.com/naveenfu"
             className="text-2xl text-[#222]">
                <FaTwitter />
            </a>
        </div>
    </div>
  )
}

export default about
