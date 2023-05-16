import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2a2d36]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container div */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap 8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold text-blue-400 inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm: text-right text-4xl font-bold text-blue-400">
            <p>Hey, Im Jelanie, feel free to take a look around</p>
          </div>
          <div>
            <p className="text-2xl text-[#d5d2c9]">
              As a skilled full stack developer, passionate mechanic, and
              experienced YouTuber, I live for the thrill of coding, cars, and
              sharing my knowledge with others. My insatiable thirst for
              learning fuels my drive to move forward and push my boundaries. I
              strive to learn new tecnologies and utilize new tools. Outside of
              work, you can find me on my long board, lifting weights, or
              creating content for my YouTube channel. My love for animals,
              electronics, and fitness is only surpassed by my ultimate dream of
              starting my own successful racing team or performance shop and
              running two thriving YouTube channels. Through my work and
              hobbies, I strive to inspire others to live their best lives and
              make every day count.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
