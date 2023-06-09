import React, { useState } from "react";
import Logo from "../assets/logo transparent.png";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[75px] z-99 flex justify-between items-center px-4 bg-[#efd950] text-blue-900">
      <div>
        {/* Here is the logo, resize the width to that you find suitable*/}
        <Link to="main" smooth={true} duration={500}><img src={Logo} alt="JS Logo image" style={{ width: "50px" }} /></Link>
        
      </div>
      {/* new list DIV, add or remove cateragories from the nav bar */}

      <ul className="hidden md:flex">
        <li><Link to="main" smooth={true} duration={500}>Main</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
      </ul>

      {/* HAMBURGUR PS class name hidden calls hiding of anthing in the tag */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#efd950] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="main" smooth={true} duration={500}>Main</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact Me</Link></li>
      </ul>

      {/* social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jelanie-starks-96812481/'
            >
              Linkedin <FaLinkedin size={35} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JelanieStarks'
            >
              Github <FaGithub size={35} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/?view=cm&source=mailto&to=jelanie.starks@gmail.com'
            >
              Email <HiOutlineMail size={35} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fd0000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/@JELANIE-TURBOJAY/featured'
            >
              JELANIE <FaYoutube size={35} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fd0000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/@Flow.On–a.new.way.to.flow–'
            >
              Flow On <FaYoutube size={35} />
            </a>
          </li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Navbar;
{/* <div className="flex fixed flex-col 
bottom-[35%] right-0 hidden md:flex">
          <ul> {[ { href: "https://github.com/JelanieStarks", 
icon: <FaGithub size={35} />, text: "Github", }, { href: "https://www.linkedin.com/in/jelanie-starks-96812481/", 
icon: <FaLinkedin size={35} />, text: "LinkedIn", }, { href: "https://www.youtube.com/@JELANIE-TURBOJAY/featured", 
icon: <FaYoutube size={35} />, text: "JELANIE", }, { href: "https://www.youtube.com/@Flow.On–a.new.way.to.flow–", 
icon: <FaYoutube size={35} />, text: "Flow On", }, ].map((item) => ( 
<li className="w-[160px] h-[60px] flex justify-between 
items-center mr-[-100px] hover:mr-[-10px] duration-300"> 
<a className="flex
justify-between items-center w-full text-[#d5d2c9]" href={item.href} > {item.icon} {item.text} </a> </li> ))} 


          </ul>   
          </div> */}