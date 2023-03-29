import React from 'react'
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';
const skill = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ];
  

function skills() {
  return (
    <div>
      <h1 className="flex items-center ml-52 text-5xl text-[#222] font-bold mb-8 mt-8"  >   
        Skills
      </h1>
        <p className="text-xl text-[#222] ml-52 mb-8">
            I have been working on these technologies for a while now.
        </p>
      <div className="flex flex-wrap justify-center md:justify-start" >
            {skill.map((skill, index) => (
                <div key={index}>
                    <div className=" ml-52 mr-32 text-3xl text-[#222] font-bold mb-4 mt-8">
                        {skill.icon}
                    </div>
                    <div className="flex items-center ml-52 text-lg text-[#222] mb-4 mt-8">
                        <p>{skill.name}</p>
                     </div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default skills
