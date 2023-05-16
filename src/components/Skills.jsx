import React from 'react'
import AWS from '../assets/AWS_Logo-removebg-preview.png'
import CSS from '../assets/CSS-removebg-preview.png'
import HTML from '../assets/HTML-removebg-preview.png'
import Java from '../assets/JavaScript-removebg-preview.png'
import Jenkins from '../assets/Jenkins-removebg-preview.png'
import MySQL from '../assets/My SQL.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2a2d36]'>
{/* le container */}
<div className='maw-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
<div> 
    <p className='text-4xl text-[#d5d2c9] font-bold inline border-b-4 border-pink-600'>Skills & Experience</p>
    <p className='py-4 text-[#d5d2c9]'> My prefered languages and technologies</p>
</div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8 button-container'>

      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={AWS} alt="Amazon Web Services" />
        <p className='my-4'>AWS</p>
      </div>
      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={CSS} alt="CSS" />
        <p className='my-4'>CSS</p>
      </div>
      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={HTML} alt="HTML-5" />
        <p className='my-4'>HTML</p>
      </div>
      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={Java} alt="JAVA" />
        <p className='my-4'>Java</p>
      </div>
      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={Jenkins} alt="Jenkins/Jules" />
        <p className='my-4'>Jenkins</p>
      </div>
      <div className='shadow-md shadow-black hover:scale-110 duration-500 bg-slate-400'>
        <img className='w-20 mx-auto' src={MySQL} alt="SQL" />
        <p className='my-4'>MySQL</p>
      </div>

    </div>

</div>

    </div>
  )
}

export default Skills