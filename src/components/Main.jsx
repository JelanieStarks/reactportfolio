import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-[#f5f5f5]">
      {/* le Container */}
      <div className="max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full">
        <iframe
          width="100%"
          height="560px"
          src="https://www.youtube.com/embed/VFggmUKQ7mU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ padding: "4px", objectFit: "cover" }}
        ></iframe>
        {/* This code uses the style attribute to set the width to 100% minus 20 pixels, the height to auto, 
        and the padding to 10 pixels. This should make the iframe fit the page width with some space around it. */}

        <p>
          Hi, I’m Jelanie, a full stack developer, mechanic and youtuber. I love
          coding, cars and creating content. I’m always learning new things and
          enjoying the journey. My dad taught me to always move forward and
          never give up. I like to share my skills, knowledge and passion with
          others. My hobbies include long boarding, lifting weights and making
          YouTube videos. I’m a fan of animals, electronics and fitness. My
          dream is to start my own racing team or performance shop, run two
          successful YouTube channels and inspire people to live better lives.
          Cheers to making every day count!
        </p>
        <div>
          <button className='text-blue-900 group border-2 px-6 py-2 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300'>
            Learn more
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