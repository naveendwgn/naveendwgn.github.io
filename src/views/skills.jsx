import React from 'react'
import { FaReact,FaHtml5, FaCss3,FaGitAlt, FaPython, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
const skill = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Github', icon: <FaGithub /> },
    { name: 'Vercel', icon: <SiVercel /> },
  ];
  

function skills() {
  return (
    <div className='max-w7x1 mx-auto'>
      <h1 className="flex items-center text-5xl text-[#222] mb-10 mt-8"  >   
        Skills
      </h1>
        <p className="text-xl text-[#222] mb-10">
            I have been working on these technologies for a while now.
        </p>
      <div className="flex flex-wrap justify-center md:justify-start" >
            {skill.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-32 h-32 m-4 bg-black bg-opacity-5 rounded-lg">
                    <div className="text-3xl text-[#222] font-bold mt-8">
                        {skill.icon}
                    </div>
                    <div className="flex items-center text-lg text-[#222] mb-6 mt-6">
                        <p>{skill.name}</p>
                     </div>
                </div>
            ))}
        </div> 
        <div className='mb-20'>
          </div>   
    </div>
  )
}

export default skills
