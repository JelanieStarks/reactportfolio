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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#efd950] text-blue-900">
      <div>
        {/* Here is the logo, resize the width to that you find suitable*/}
        <img src={Logo} alt="JS Logo image" style={{ width: "50px" }} />
      </div>
      {/* new list DIV, add or remove cateragories from the nav bar */}

      <ul className="hidden md:flex">
        <li>Top</li>
        <li>About</li>
        <li>Skill-set</li>
        <li>Projects</li>
        <li>Contact Me</li>
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
        <li className="py-6 text-4xl">Top</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skill-set</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact Me</li>
      </ul>

      {/* social icons */}
      <div className="flex fixed flex-col 
bottom-[35%] right-0 hidden md:flex">
          <ul> {[ { href: "https://github.com/JelanieStarks", 
icon: <FaGithub size={35} />, text: "Github", }, { href: "https://www.linkedin.com/in/jelanie-starks-96812481/", 
icon: <FaLinkedin size={35} />, text: "LinkedIn", }, { href: "https://www.youtube.com/@JELANIE-TURBOJAY/featured", 
icon: <FaYoutube size={35} />, text: "JELANIE", }, { href: "https://www.youtube.com/@Flow.On–a.new.way.to.flow–", 
icon: <FaYoutube size={35} />, text: "Flow On", }, ].map((item) => ( 
<li className="w-[160px] h-[60px] flex justify-between 
items-center mr-[-100px] hover:mr-[-10px] duration-300"> 
<a className="flex
justify-between items-center w-full" href={item.href} > {item.icon} {item.text} </a> </li> ))} 
{/*This code uses an array to store the data for each social icon, and then maps over it to render the list items. 
      This reduces the repetition and makes the code more concise. 
      It also adds the hidden md:flex classes to the div to make it responsive.  */}

          </ul>   
          </div>
      
    </div>
  );
};

export default Navbar;
