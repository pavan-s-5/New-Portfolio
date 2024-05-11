import React from "react";
import profile_img from "../assets/profile-image.svg";
import { TypeAnimation } from "react-type-animation";

// icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

// pdf
import resumepdf from '../assets/PAVAN_RESUME.pdf'

const Hero = () => {

  const HeroNavIcon = [
    {id: 'ih1', icon : <IoLogoWhatsapp/>,       href : 'https://wa.me/919591971998?text=Hi'},
    {id: 'ih2', icon : <IoLogoLinkedin/>,       href : 'https://www.linkedin.com/in/pavan-s-5b80951aa/'},
    {id: 'ih3', icon : <FaGithub/>,             href : 'https://github.com/pavan-s-5'},
    {id: 'ih4', icon : <FaXTwitter/>,           href : '#'},
    {id: 'ih5', icon : <FaInstagram/>,          href : '#'},
    {id: 'ih5', icon : <FaFacebookF/>,          href : '#'},
]

  return (

    <div id="home" className="flex justify-center items-center  xxxs:h-full md:h-[80vh] xxxs:gap-5 lg:gap-10 xxxs:flex-col-reverse md:flex-row xxxs:p-2 lg:p-0">
      
	  <div className="flex flex-col justify-center xxxs:gap-2 lg:gap-6  h-full xxxs:w-full md:w-1/2">
        <h1 className="xxxs:text-2xl lg:text-4xl font-bold xxxs:text-center md:text-start">
          HI, I'M <span className="text-yellow-300">PAVAN!</span>
        </h1>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "WEB DEVELOPER",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "DESIGNER",
            1000,
            "PROGRAMMER",
            1000,
            "CODER",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{display: "inline-block" }}
          repeat={Infinity}
		  className=" xxxs:text-xl md:text-2xl font-bold text-hero_gray xxxs:text-center md:text-start"
        />

        <p className="text-blue-100 xxxs:text-center md:text-start xxxs:mb-5 lg:mb-0">
          I am a passionate & skilled web developer and designer with experience in creating visually appealing and user-friendly websites.
        </p>

        <ul className="flex  gap-5 text-2xl xxxs:justify-center md:justify-start xxxs:mb-5 lg:mb-0">
          {
            HeroNavIcon.map((heroicon)=>
              <li key={heroicon.id} className="cursor-pointer hover:scale-110">
                <a href={heroicon.href} target="_blank"> {heroicon.icon} </a>
              </li>
            )
          }
        </ul>

        <a href={resumepdf} download={resumepdf}>
        <button  className="flex justify-center items-center text-center gap-2 p-2 rounded text-black font-bold bg-bright_yellow xxxs:w-full md:w-48 cursor-pointer hover:border-2 hover:border-blue-200">
          
        DOWNLOAD CV <span> <FiDownload /></span>
        </button>
         </a> 

    </div>

    <img src={profile_img} alt="profile img" className="xxxs:w-40 lg:w-80" />
	  
    </div>
  );
};

export default Hero;
