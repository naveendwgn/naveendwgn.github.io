import React from 'react'
import Shuffle from '../assets/shuffle.png'
import OptiVision from '../assets/optivision.png'
import CoinVine from '../assets/coinvine.png'
import BotBuddies from '../assets/botbuddies.png'
import Namerize from '../assets/namerize.png'
import ExpenseTracker from '../assets/ExpenseTracker.png'
import BGenerator from '../assets/bg-generator.png'
import ProHeadline from '../assets/ProHeadline.png'
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
  name: 'ProHeadline',
  description: 'ProHeadline is a web application that allows you to generate engaging LinkedIn headlines in seconds',
  image: ProHeadline,
  code: 'https://github.com/naveendwgn/Linkedin-Headline-Generator',
  demo: 'https://linkedin-headline-generator-liart.vercel.app/'
  },
 {
    name: 'Namerize',
    description: 'Namerize is a web application that allows you to generate product names for your business/product',
    image: Namerize,
    code: 'https://github.com/naveendwgn/namerize',
    demo: 'https://namerize.vercel.app/'
 },
 {
    name: 'Expense Trackr',
    description: 'Expense Trackr is a web application that allows you to track your expenses with ease',
    image: ExpenseTracker,
    code: 'https://github.com/naveendwgn/Expense-tracker',
    demo: 'https://expense-trackr-jade.vercel.app/'
 },
  {
    name: 'CoinVine',
    description: 'CoinVine is a web application that allows you to track your favorite cryptocurrencies in real-time',
    image: CoinVine,
    code: 'https://github.com/naveendwgn/CoinVine',
    demo: 'https://coinbase-ashy.vercel.app/'
  }
  /*{
    name: 'BotBuddies',
    description: 'BotBuddies is a simple web application where you can search through a list of Robots',
    image: BotBuddies,
    code: 'https://github.com/naveendwgn/BotBuddies',
    demo: 'https://bot-buddies-pi.vercel.app/'
  } */
]
function projects() {
  return (
    <div className='max-w7x1 mx-auto'>
      <h1 className="flex text-5xl text-[#222] mb-8 mt-8"  >   
        Projects
      </h1>
      <p className="text-[#222] text-lg mb-8">
        Here are some of my projects that I have worked on.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start mt-10" >
        {items.map((item, index) => (
          <div key={index} className="w-[470px] p-4">
            <div className="bg-black bg-opacity-5 rounded-md shadow-lg overflow-hidden">

              <div className="relative pb-60 overflow-hidden rounded-t-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:scale-105">
                <img className="absolute inset-0 h-full w-full" src={item.image} alt={item.name} />
              </div>

              <div className="p-6 py-6">
                <h1 className="flex text-xl text-[#222] items-center justify-center mb-3"
                >{item.name}</h1>
                <p className="text-[#222] text-sm">
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
                  <p>Demo</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-[#222] mt-20 mb-8 mr-40 max-[480px]:w-full">
        </div>
    </div>
  )
}

export default projects
