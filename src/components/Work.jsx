import React from "react";
import virtualX from "../assets/virtualXScreenShot.png";
import donutMaker77 from "../assets/donutMakerImage.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#d5d2c9] bg-[#2a2d36]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 myProjects">
          <p className="text-5xl font-bold inline border-b-4 text-[#d5d2c9] border-pink-600">
            Work
          </p>
          <p className="py-6">Explore my recent work and achievements</p>
        </div>
        {/* CONTAINER this shenanigans was what I learned from Code Commerce CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${virtualX})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-80">
              {/* Text that appears on hover */}
              <span className="text-3xl font-bold text-white tracking-wider">
                Team MVC application Project X
              </span>
              <div className="pt-8 text-center">
                {/* Buttons that appear on hover */}
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${donutMaker77})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-80">
              {/* Text that appears on hover */}
              <span className="text-3xl font-bold text-white tracking-wider">
                Donut Clicker 77 *WIP*
              </span>
              <div className="pt-8 text-center">
                {/* Buttons that appear on hover */}
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
        </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default Work;
