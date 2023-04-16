import React from 'react'
import Hill from '../photos/hill.jpg'
import Man from '../photos/man.jpg'
import Mist from '../photos/mist.jpg'
import Sneakers from '../photos/sneaker.jpg'
import Set from '../photos/3set.jpg'
import Beach from '../photos/beach.jpg'
import Boat from '../photos/boat.jpg'
import Converse from '../photos/converse.jpg'
import Glare from '../photos/glare.jpg'
import Mandir from '../photos/mandir.jpg'
import River from '../photos/river.jpg'
import Station from '../photos/station.jpg'
import Street from '../photos/street.jpg'
import Sunset from '../photos/sunset.jpg'

const photo = [
  {
    id: 1,
    image: Hill
  },
  {
    id: 2,
    image: Man
  },
  {
    id: 3,
    image: Mist
  },
  {
    id: 4,
    image: Sneakers
  },
  {
    id: 5,
    image: Set
  },
  {
    id: 6,
    image: Beach
  },
  {
    id: 7,
    image: Boat
  },
  {
    id: 8,
    image: Converse
  },
  {
    id: 9,
    image: Glare
  },
  {
    id: 10,
    image: Mandir
  },
  {
    id: 11,
    image: River
  },
  {
    id: 12,
    image: Station
  },
  {
    id: 13,
    image: Street
  },
  {
    id: 14,
    image: Sunset
  }
];

function photos() {
  return (
    <div className='max-w7x1 mx-auto'>
      <h1 className="flex items-center text-5xl text-[#222] mb-8 mt-8" >
        Photos
      </h1>
      <p className="text-lg text-[#222] mb-10">
        Some of my photos I've captured over the years. 
      </p>
      <div className="flex flex-wrap items-center justify-center md:justify-start">
        {photo.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-72 h-auto m-4">
            <img src={item.image} alt="photo" className="" />
            </div>
        ))}
        </div>
    </div>
  )
}

export default photos
