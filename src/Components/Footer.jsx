import React from 'react'
import logo from '../assets/Logo.svg'

// icons
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {

    const footerNavMenu = [
                {id: 'n1', title : 'Home', offset :90, href : '#home'},
                {id: 'n2', title : 'About', offset :90, href : '#about'},
                {id: 'n3', title : 'Skills', offset :90, href : '#skills'},
                {id: 'n4', title : 'Services', offset :90, href : '#services'},
                {id: 'n5', title : 'Contact', offset :90, href : '#contact'},
            ]
 
    const footerNavIcon = [
                {id: 'ic1', icon : <IoLogoWhatsapp/>,       href : 'https://wa.me/919591971998?text=Hi'},
                {id: 'ic2', icon : <IoLogoLinkedin/>,       href : 'https://www.linkedin.com/in/pavan-s-5b80951aa/'},
                {id: 'ic3', icon : <FaGithub/>,             href : 'https://github.com/pavan-s-5'},
                {id: 'ic4', icon : <FaXTwitter/>,           href : '#'},
                {id: 'ic5', icon : <FaInstagram/>,          href : '#'},
                {id: 'ic5', icon : <FaFacebookF/>,          href : '#'},
            ]

    
  return (
    <div>
    <div className='flex xxxs:flex-col md:flex-row gap-5 justify-center mt-20 border-t-2 pt-10 border-gray-700'>

        <div className='flex flex-col xxxs:px-5 lg:px-10 xxxs:w-full lg:w-1/2'>

            <AnchorLink className='anchor-link' offset={90} href='#home'>
            <img src={logo} alt="logo" className='w-44 mb-3 cursor-pointer'/>
            </AnchorLink>

            <p className='xxxs:text-sm'>I am a frontend developer from Bengaluru, India with 1.5 years of experience.</p>
            <p className='xxxs:text-sm'>Let's get in touch! I am open for collabrations and for new projects.</p>
            <p className='mt-3 xxxs:text-sm'>Call me  : +91 9591971998</p>
            <p className='xxxs:text-sm'>Email me : pavansgowda500@gmail.com</p>
        </div>

        <div className='flex xxxs:flex-col lg:flex-row xxxs:px-5 lg:px-10 xxxs:gap-5 lg:gap-32 md:justify-end'>
            <ul className='flex xxxs:flex-row xxxs:gap-[14px] lg:gap-[3px] lg:flex-col  xxxs:justify-center  md:justify-end'>
                    {footerNavMenu.map((navmenu) =>
                        <AnchorLink key={navmenu.id} className='anchor-link' offset={navmenu.offset} href={navmenu.href}>
                            <li className='hover:underline cursor-pointer'>{navmenu.title}</li>
                        </AnchorLink>
                    )}
            </ul>
        
            <div className='flex flex-col justify-center items-center gap-3'>
                <h3 className=' text-xl font-bold bg-gradient-to-r from-bright_yellow via-blue-600 to-red-500 text-transparent bg-clip-text'>Follow Me</h3>
                <ul className='flex gap-5 text-2xl'>
                    {
                        footerNavIcon.map((navicon)=> 
                            <li key={navicon.id} className='hover:scale-110 cursor-pointer'> 
                            <a href={navicon.href} target="_blank">{navicon.icon}</a> 
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>

    </div>

    <div className='my-5 border-t-2'>
        <p className='text-center mt-2 xxxs:text-xs md:text-sm'>&#169; Pavan S | Portfolio. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer