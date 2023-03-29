import React from 'react'
import Shuffle from '../assets/shuffle.png'
import OptiVision from '../assets/optivision.png'
import CoinVine from '../assets/coinvine.png'
import BotBuddies from '../assets/botbuddies.png'
import { FaGithub } from 'react-icons/fa'

const items = [
 {
    name: 'Shuffle',
    description: 'Shuffle is a web-app which creates realistic images and art from complex text prompts',
    image: Shuffle,
    code: 'https://github.com/naveendwgn/Shuffle',
    demo: 'https://shuffle-eosin.vercel.app/'
  },
  {
    name: 'Optivision',
    description: 'A face detection web application that takes an image as input and detect any face present',
    image: OptiVision,
    code: 'https://github.com/naveendwgn/OptiVision',
    demo: 'https://opti-vision.vercel.app/'
 },
  {
    name: 'CoinVine',
    description: 'CoinVine is a web application that allows you to track your favorite cryptocurrencies in real-time',
    image: CoinVine,
    code: 'https://github.com/naveendwgn/CoinVine',
    demo: 'https://coinbase-ashy.vercel.app/'
  },
  {
    name: 'BotBuddies',
    description: 'BotBuddies is a simple web application where you can search through a list of Robots',
    image: BotBuddies,
    code: 'https://github.com/naveendwgn/BotBuddies',
    demo: 'https://bot-buddies-pi.vercel.app/'
  }
]
function projects() {
  return (
    <div className='max-w7x1 mx-auto'>
      <h1 className="flex items-center text-5xl text-[#222] mb-8 mt-8"  >   
        Projects
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start mt-10" >
        {items.map((item, index) => (
          <div key={index} className="w-[470px] p-4">
            <div className="bg-black bg-opacity-5 rounded-md shadow-lg overflow-hidden">

              <div className="relative pb-60 overflow-hidden rounded-t-md hover:translate-x-0.5 hover:translate-y-0.5 transform transition duration-500 ease-in-out">
                <img className="absolute inset-0 h-full w-full object-cover" src={item.image} alt={item.name} />
              </div>

              <div className="p-6 py-6">
                <h1 className="flex text-xl text-[#222] items-center justify-center mb-3"
                >{item.name}</h1>
                <p>
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between ml-8 mr-8 mb-6">
                <button className="bg-[#222] text-white py-2 px-4 rounded hover:bg-[#2d2d2d]"
                 onClick={() => window.open(item.code)}>
                  <FaGithub className="inline" />
                </button>
                <button className="bg-[#222] text-white py-2 px-4 rounded hover:bg-[#2d2d2d]"
                 onClick={() => window.open(item.demo)}>
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default projects
