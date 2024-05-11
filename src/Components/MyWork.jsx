import React from 'react'
import webDevelopment from '../assets/website_development.svg'
import themePattern from "../assets/theme_pattern.svg"

// images
import digitalmarketing from "../assets/Liva-website.png"
import movieapp from "../assets/movieapp.png"
import ecommercewebsite from "../assets/ecommercewebsite.png"
import oldportfolio from "../assets/oldportfolio.png"
import multimediawebsite from "../assets/multimediawebsite.png"
import contactmanager from "../assets/contactmanager.png"


const MyWork = () => {

    const workInfo = [
        {id:'wi1', img : `${digitalmarketing}`, worktitle : 'Dital marketing website',  gitHubLink : 'https://github.com/pavan-s-5/Liva-Solutions-Website', websiteLink : 'https://livasolutions.in/'},

        {id:'wi2', img : `${movieapp}`, worktitle : 'Web movie app',            gitHubLink : 'https://github.com/pavan-s-5/Movix-MovieApp?tab=readme-ov-file', websiteLink : 'https://movix-movie-app-v1ho.vercel.app/'},

        {id:'wi3', img : `${ecommercewebsite}`, worktitle : 'E-commerce website',       gitHubLink : 'https://github.com/pavan-s-5/KANON-client-react', websiteLink : 'https://github.com/pavan-s-5/KANON-client-react'},

        {id:'wi4', img : `${oldportfolio}`, worktitle : 'Old portfolio',            gitHubLink : 'https://github.com/pavan-s-5/personal-portfolio', websiteLink : 'https://personal-portfolio-three-sable.vercel.app/'},
        {id:'wi5', img : `${multimediawebsite}`, worktitle : 'Multimedia website',       gitHubLink : 'https://github.com/pavan-s-5/pixelart', websiteLink : 'https://pixelart-c69cc.web.app/'},
        {id:'wi6', img : `${contactmanager}`, worktitle : 'Contact Manager Web App',  gitHubLink : 'https://github.com/pavan-s-5/ContactManager', websiteLink : 'https://github.com/pavan-s-5/ContactManager'},
    ]

    //  Liva Solutions, movix, Contact Manager, kanon, Old portfolio, pixelart

  return (
    <div id='work' className='flex flex-col justify-center items-center my-20 '>
        <div className="relative mb-16">
            <h1 className="text-center font-bold xxxs:text-2xl md:text-4xl lg:text-6xl">My Latest Work</h1>
            <img src={themePattern} alt="Pattern" className="xxxs:w-24 md:w-34 lg:w-40  absolute xxxs:left-[110px] md:left-[200px] lg:left-[340px] xxxs:top-3 md:top-5 lg:top-7 z-[-1]"/>
        </div>

        <div className='grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-center'>

{
    workInfo.map((workinfo)=>
        <div key={workinfo.id} className='flex flex-col gap-2 w-72 text-center  bg-gradient-to-l from-indigo-500 via-red-500 to-pink-500 
    text-black rounded-md hover:scale-110 duration-[0.3s] cursor-pointer p-2'>
                <img src={workinfo.img} alt="work" className='w-72 h-40 rounded-t-md'/>

                <h1 className='text-md font-bold text-white uppercase'>{workinfo.worktitle}</h1>

                <div className='flex justify-center items-center gap-2 pb-2 mt-2'>
                 <span className='rounded-md bg-black p-2 text-white font-medium cursor-pointer hover:bg-blue-500 hover:text-black transition-all'> <a href={workinfo.gitHubLink} target='_blank'> View Code </a></span> 
                 <span className='rounded-md border-2 border-white p-[5px] text-white font-bold cursor-pointer hover:border-green-300 transition-all'> <a href={workinfo.websiteLink} target='_blank'> Live Demo </a></span>  
                </div>
            </div>
    )
}
        </div>

    </div>
  )
}

export default MyWork