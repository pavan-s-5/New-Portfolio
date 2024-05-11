import React, { useRef, useState } from 'react'
import logo from '../assets/Logo.svg'
import underlineImg from '../assets/nav_underline.svg'   
import AnchorLink from 'react-anchor-link-smooth-scroll';

// icons
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const NavBar = () => {

  const [menu, setMenu] = useState('home');

  const menuRef = useRef();

  const openMenu = () => {
        menuRef.current.style.right='0px';
  }
  const closeMenu = () => {
        menuRef.current.style.right='-350px';
  }

  return (
    <div className='flex justify-between items-center mx-10 py-5 xxxs:mx-2 bg-[#1F0016] sticky top-0 z-10 border-b-2'>
      <div className='xxxs:flex-1 lg:flex-none'>
      <AnchorLink className='anchor-link' offset={90} href='#home'>
        <img src={logo} alt="logo" className='xxxs:w-32 lg:w-36'/>
      </AnchorLink>
      </div>

      <span className='xxxs:block  xxxs:text-3xl lg:hidden' onClick={openMenu}>
          <RiMenu3Fill /> 
      </span>

      <ul className='flex  items-center list-none text-lg
      xxxs:fixed xxxs:flex-col xxxs:items-start  xxxs:top-0 xxxs:gap-5 xxxs:bg-[#1F0016] xxxs:w-[350px] xxxs:h-full xxxs:z-[2] xxxs:transition-all xxxs:duration-500 xxxs:right-[-350px] xxxs:pl-20 xxxs:text-xl  

        lg:static lg:flex-row lg:text-xl lg:w-[60%] lg:justify-between

      ' ref={menuRef}>

      <span className='xxxs:block xxxs:relative xxxs:top-10 xxxs:left-[200px] xxxs:w-10 xxxs:text-3xl lg:hidden'  onClick={closeMenu}>  
      <IoMdClose /> 
      </span>

{/* --------------------------------------- */}
 
        <li className='flex flex-col  justify-center items-center cursor-pointer'> 
        <AnchorLink className='anchor-link' offset={90} href='#home'>
        <p onClick={() => setMenu("home")}>  Home   </p> 
        </AnchorLink>
        {menu === "home"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>
{/* --------------------------------------- */}

        <li className='flex flex-col  justify-center items-center  cursor-pointer'> 
        <AnchorLink className='anchor-link' offset={90} href='#about'> 
        <p onClick={() => setMenu("about")}>  About Me  </p> 
        </AnchorLink>
        {menu === "about"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>
{/* --------------------------------------- */}
        <li className='flex flex-col  justify-center items-center  cursor-pointer'> 
        <AnchorLink className='anchor-link' offset={90} href='#skills'> 
        <p onClick={() => setMenu("skills")}>  Skills    </p> 
        </AnchorLink>
        {menu === "skills"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>
{/* --------------------------------------- */}

        <li className='flex flex-col  justify-center items-center  cursor-pointer'> 
        <AnchorLink className='anchor-link' offset={90} href='#services'> 
        <p onClick={() => setMenu("services")}>  Services  </p> 
        </AnchorLink>
        {menu === "services"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>
{/* --------------------------------------- */}

        <li className='flex flex-col  justify-center items-center  cursor-pointer'> 
        <AnchorLink className='anchor-link' offset={90} href='#work'> 
        <p onClick={() => setMenu("work")}>  My Work  </p> 
        </AnchorLink>
        {menu === "work"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>

        <li className='flex flex-col  justify-center items-center  cursor-pointer lg:hidden'> 
        <AnchorLink className='anchor-link' offset={90} href='#contact'> 
        <p onClick={() => setMenu("contact")}>  Contact  </p> 
        </AnchorLink>
        {menu === "contact"? <img src={underlineImg} alt='img' className='w-6 xxxs:w-10'/> : <></>} 
        </li>


      </ul>
{/* --------------------------------------- */}

      <AnchorLink className='anchor-link' offset={90} href='#contact'>
      <div className='xxxs:hidden lg:block text-base px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 rounded-full hover:scale-105 duration-75 '>
       Connect With Me 
      </div>
      </AnchorLink>

    </div>
  )
}

export default NavBar