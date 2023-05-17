import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-[#2a2d36]">
      {/* le Container */}
      <div className="max-w-5xl mx-auto px-8  flex flex-col justify-center h-full">
        <h1 className='text-6xl text-bold justify-center text-[#d5d2c9]'>Check out what I’ve been up to lately!</h1>
        <div><iframe
          width="100%"
          height="560px"
          src="https://www.youtube.com/embed/VFggmUKQ7mU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ padding: "4px", objectFit: "cover" }}
        ></iframe>
        </div>
        {/* This code uses the style attribute to set the width to 100% minus 20 pixels, the height to auto, 
        and the padding to 10 pixels. This should make the iframe fit the page width with some space around it. */}
        <div>
          <button className='text-blue-400 group border-2 px-6 py-2 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300'>
          <Link to="work" smooth={true} duration={500}>My Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main