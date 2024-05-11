import React, { useState } from "react";
import themePattern from "../assets/theme_pattern.svg";

// icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Skills = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "SKILLS",
      title: "MY SKILLS",
      ContentSkills: [
        { id: "s1", icon: <FaHtml5 />, contentTitle: "HTML" },
        { id: "s2", icon: <FaCss3Alt />, contentTitle: "CSS" },
        { id: "s3", icon: <IoLogoJavascript />, contentTitle: "JAVASCRIPT" },
        { id: "s4", icon: <RiTailwindCssFill />, contentTitle: "TAILWIND CSS" },
        { id: "s5", icon: <FaReact />, contentTitle: "REACT JS" },
        { id: "s6", icon: <FaWordpress />, contentTitle: "WORDPRESS" },
        { id: "s7", icon: <FaShopify />, contentTitle: "SHOPIFY" },
        { id: "s8", icon: <CgFigma />, contentTitle: "FIGMA" },
        { id: "s9", icon: <SiCanva />, contentTitle: "CANVA" },
        { id: "s10", icon: <SiAdobephotoshop />, contentTitle: "PHOTOSHOP" },
      ],
    },
    {
      id: 2,
      tabTitle: "EXPERIENCE",
      title: "EXPERIENCE",
      ContentExperience: [
        {
          id: "e1",
          company: "SRI HANUMAN ENGINEERING",
          designation: "Web Developer",
          year: "April 2023 - Present",
          description:
            "As a Web Developer at Sri Hanuman Engineering, I adept in WordPress, HTML/CSS, JavaScript, React, Shopify, and design tools like Figma, Canva, and Photoshop.  I've contributed to the successful delivery of diverse projects. From dynamic WordPress and Shopify sites to bespoke React applications, my 1.3+ years of experience reflect a commitment to innovation and excellence in web development.",
        },

        {
          id: "e2",
          company: "[24]7.ai",
          designation: "Digital Interaction Advisor",
          year: "June 2020 - Feb 2023",
          description:
            "Former Trainer & Subject Matter Expert (SME) at [24]7.ai, I led a dynamic team of 10 members, prioritizing efficient customer query resolution and maintaining adherence to key metrics. Leveraging tech tools such as Salesforce, Axiom, Base24, and Excel, I facilitated seamless operations and optimized team performance. My emphasis on effective chat handling techniques contributed to consistently high customer satisfaction ratings. Recognized with awards for exemplary leadership and training, I played a pivotal role in achieving and maintaining key metrics for customer satisfaction, response time, and issue resolution.",
        },

        {
          id: "e3",
          company: "UNIQUE TECHNOLOGIES",
          designation: "FULL STACK WEB DEVELOPER",
          year: "OCT 2020 - Feb 2021",
          description:
            "As an intern at Unique Technologies, I immersed myself in full-stack web development, actively contributing to live & demo projects. Over the course of five months, I gained hands-on experience in various aspects of web development, honing my skills in both frontend and backend technologies. Working alongside seasoned professionals, I made meaningful contributions to the success of ongoing projects, further solidifying my expertise in the field.",
        },
      ],
    },
    {
      id: 3,
      tabTitle: "EDUCATION",
      title: "EDUCATION",
      ContentEducation: [
        {
          id: "c1",
          institute: `KLE Society's S Nijalingappa College`,
          class: "BSC - COMPUTER SCIENCE",
          year: "2016 - 2020",
          board: "BANGALORE UNIVERSITY",
          location: "Bengaluru, Karanataka, India",
        },
        {
          id: "c1",
          institute: `BEL PRE-UNIVERSITY COLLEGE`,
          class: "II PUC",
          year: "2014 - 2016",
          board: "KARANATAKA STATE BOARD",
          location: "Bengaluru, Karanataka, India",
        },
      ],
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center my-20"
    >
      <div className="relative mb-16">
        <h1 className="text-center font-bold xxxs:text-3xl md:text-4xl lg:text-6xl">
          Skills
        </h1>
        <img
          src={themePattern}
          alt="Pattern"
          className="xxxs:w-24 md:w-34 lg:w-40 absolute xxxs:left-[30px] md:left-[30px] lg:left-[50px] xxxs:top-4 md:top-5 lg:top-7 z-[-1]"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center xxxs:gap-2 md:gap-14 lg:gap-18 w-full">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className="hover:scale-110 transition p-[5px] xxxs:w-20 md:w-24 lg:w-40 rounded-full bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 xxxs:text-xs lg:text-lg"
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="w-full p-5">
        {tabs.map((tab, i) => (
          <div key={i} className="my-10 ">
            {currentTab === `${tab.id}` && (
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-center mb-10">
                  {tab.title}
                </h1>

                <div className="grid grid-cols-3 gap-10">
                  {tab.ContentSkills &&
                    tab.ContentSkills.map((contentData, i) => (
                      <div key={i}>
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="xxxs:text-2xl md:text-4xl lg:text-4xl text-hero_gray">
                            {" "}
                            {contentData.icon}
                          </span>
                          <span className="xxxs:text-[8px] md:text-lg lg:text-md tracking-widest uppercase">
                            {" "}
                            {contentData.contentTitle}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col gap-16 xxxs:w-[85%] lg:w-1/2">
                  {tab.ContentExperience &&
                    tab.ContentExperience.map((contentData, i) => (
                      <div key={i}>
                        <div className="flex flex-col justify-start items-start gap-2 w-full">
                          <span className="xxxs:text-sm lg:text-2xl  font-bold tracking-wider text-hero_gray uppercase">
                            {" "}
                            {contentData.company}
                          </span>
                          <div className="flex xxxs:flex-col lg:flex-row justify-between items-start w-full">
                            <span className="xxxs:text-[12px] lg:text-xl font-semibold flex flex-1 tracking-wider uppercase">
                              {" "}
                              {contentData.designation}
                            </span>
                            <span className="xxxs:text-[12px] lg:text-sm font-semibold tracking-wider uppercase">
                              {" "}
                              {contentData.year}
                            </span>
                          </div>
                          <span className="xxxs:text-[10px] lg:text-sm text-blue-100">
                            {" "}
                            {contentData.description}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col gap-16 xxxs:w-[85%] lg:w-1/2">
                  {tab.ContentEducation &&
                    tab.ContentEducation.map((contentData, i) => (
                      <div key={i}>
                        <div className="flex flex-col justify-start items-start gap-2">
                          <span className="xxxs:text-sm lg:text-2xl font-bold tracking-wider text-hero_gray uppercase">
                            {" "}
                            {contentData.class}
                          </span>
                          <div className="flex xxxs:flex-col md:flex-row justify-between items-start w-full">
                            <span className="xxxs:text-[12px] md:text-lg font-semibold flex flex-1 tracking-wider uppercase">
                              {" "}
                              {contentData.institute}
                            </span>
                            <span className="xxxs:text-[12px] lg:text-[15px] font-semibold tracking-wider uppercase">
                              {" "}
                              {contentData.year}
                            </span>
                          </div>
                          <span className="xxxs:text-[12px] lg:text-[15px] text-blue-100">
                            {" "}
                            {contentData.board}
                          </span>
                          <span className="flex justify-center items-center gap-[5px] text-[12px] lg:text-sm text-yellow-300">
                            <MdLocationOn />
                            {contentData.location}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
