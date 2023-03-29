import React from 'react'
import { RiLinksFill } from 'react-icons/ri'
function about() {
  return (
    <div className='max-w7x1 mx-auto text-left sm:text-left'>
        <h1 className="flex items-center text-6xl text-[#222] mb-14 mt-8"
        >About Me!</h1>
           <p className="text-xl text-[#222] mb-7 mt-6">
            Final year student pursuing bachelors in technology focused in electrical engineering
             @ <a href="" className="text-[#222]">CSVTU</a><br/>
          </p>
          <p className="text-xl text-[#222] mb-7 mt-6">
           I love building things and learning new things.
          </p>
          <p className="text-xl text-[#222] mb-7 mt-6">
            Outside of coding I enjoy watching wrestling, photography and tacos.
          </p>
          <div className="flex items-center justify-center mb-10 mt-20 mr-10 text-2xl">
             <RiLinksFill />
          </div>
          <div className="flex flex-wrap items-center justify-evenly mt-6 mr-14">
             <a href="mailto:naveen.dewangan141@gmail.com"
              className="text-lg text-[#222] px-4 py-4">
                email
            </a>
            <a href="https://github.com/naveendwgn" className="text-lg text-[#222] px-4 py-4">
                github
            </a>
            <a href="https://www.linkedin.com/in/naveendewangan/" className="text-lg text-[#222] px-4 py-4">
                linkedin
            </a>
            <a href="https://www.instagram.com/naveenxig/" className="text-lg text-[#222] px-4 py-4">
                instagram
            </a>
            <a href="https://leetcode.com/naveendewangan/" className="text-lg text-[#222] px-4 py-4">
                leetcode
            </a>
            <a href="https://www.codechef.com/users/naveendewangan" className="text-lg text-[#222] px-4 py-4">
                codechef
            </a>
            <a href="https://naveendwgn.medium.com/naveendwgn" className="text-lg text-[#222] px-4 py-4">
                medium
            </a>
            <a href="https://www.youtube.com/@NaveenDewangan/videos" className="text-lg text-[#222] px-4 py-4">
                youtube
            </a>
            <a href="https://twitter.com/naveenfu"
             className="text-lg text-[#222] px-4 py-4">
                twitter
            </a>
            <a href="" className="text-lg text-[#222] px-4 py-4">
                resume
            </a>
        </div>
    </div>
  )
}

export default about
