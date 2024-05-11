import React from "react";
import feather from "../assets/feather_img.svg";
import themePattern from "../assets/theme_pattern.svg"

const About = () => {

  const aboutInfo = [
    {id: 'a1', number : '1.5+', desc : 'YEARS OF EXPERIENCE'},
    {id: 'a2', number : '9+', desc : 'PROJECTS COMPLETED '},
    {id: 'a3', number : '5+', desc : 'HAPPY CLIENTS '},
  ]

  const aboutDescription = [
    {id: 'ad1', desc : 'I am a experienced Frontend Developer with over a year of professionnal expertise in the field.'},
    {id: 'ad2', desc : 'Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their sucess and growth.'},
    {id: 'ad3', desc : 'My passion for frontend development is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.'},
  ]

  return (
    <div id="about" className="flex flex-col justify-center items-center gap-10  mt-20">
      
      <div className="relative">
        <h1 className="text-center font-bold xxxs:text-3xl md:text-4xl lg:text-6xl">About Me</h1>
        <img src={themePattern} alt="Pattern" className="xxxs:w-24 md:w-34 lg:w-40 absolute xxxs:left-[70px] md:left-[110px] lg:left-[160px] xxxs:top-3 md:top-4 lg:top-5 z-[-1]"/>
      </div>

      <div className="flex xxxs:flex-col md:flex-row justify-center items-center w-[80%] gap-5">
        <img src={feather} alt="feather" className="w-72" />

        <div className="flex flex-col gap-5 xxxs:text-sm md:text-md lg:text-lg">
          {aboutDescription.map((aboutdesc)=>
           <p key={aboutdesc.id}> {aboutdesc.desc} </p>
          )}
          
          <div className="flex justify-between ">
          {aboutInfo.map((about)=> 
          <div key={about.id} className="flex flex-col justify-center items-center gap-2 hover:scale-110  transition-all">
              <span className="xxxs:text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-bright_yellow text-transparent bg-clip-text">
                {about.number}
              </span>
              <span className="text-hero_gray font-bold xxxs:text-[8px] md:text-[9px] lg:text-[15px]">
                {about.desc}
              </span>
            </div>
          )}

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
