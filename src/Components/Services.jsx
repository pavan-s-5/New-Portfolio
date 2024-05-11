import React from 'react'
import themePattern from "../assets/theme_pattern.svg"

// images
import webDevelopment from '../assets/website_development.svg'
import webDesign from '../assets/web_designing.svg'
import digitalMarketing from '../assets/digital_marketing.svg'
import posterDesign from '../assets/poster_design.svg'
import productDesign from '../assets/product_design.svg'
import socialMediaManagment from '../assets/social_media_management.svg'

const Services = () => {

    const servicesInfo = [
        {id:'si1', img : `${webDevelopment}`,       serviceTitle : 'Website Development', 
        shortDesc : 'We design and build websites that are both visually appealing and easy to use, ensuring your online presence effectively communicates your message and engages your audience.', },
        {id:'si2', img : `${webDesign}`,            serviceTitle : 'Website Design', 
        shortDesc : 'We design user-friendly interfaces for your website / App with usability, ensuring your digital presence engages and resonates with your audience.', },
        {id:'si3', img : `${digitalMarketing}`,     serviceTitle : 'Digital Marketing', 
        shortDesc : 'We boost your online presence through strategic campaigns, leveraging the power of digital platforms to reach and engage your target audience, driving measurable results and growth for your business.', },
        {id:'si4', img : `${posterDesign}`,         serviceTitle : 'Poster / Banner Design', 
        shortDesc : 'Eye-catching designs for social media advertising & more. Grab attention and convey your message effectively, helping you stand out in the digital crowd and drive engagement with your audience.', },
        {id:'si5', img : `${productDesign}`,        serviceTitle : 'Product Design', 
        shortDesc : 'From concept to creation, we develop innovative and user-centric products that seamlessly blend form and function, enhancing the everyday experiences of your customers and driving success for your brand.', },
        {id:'si6', img : `${socialMediaManagment}`, serviceTitle : 'Social Media Management', 
        shortDesc : 'We expertly curate and strategize your online presence, crafting engaging content and fostering meaningful interactions to build brand loyalty, drive traffic, and elevate your social media influence.', },
       
    ]

  return (
    <div id='services' className='flex flex-col justify-center items-center my-20 '>

        <div className="relative mb-16">
            <h1 className="text-center font-bold xxxs:text-3xl md:text-4xl lg:text-6xl">My Services</h1>
            <img src={themePattern} alt="Pattern" className="xxxs:w-24 md:w-34 lg:w-40  absolute xxxs:left-[100px] md:left-[140px] lg:left-[230px] xxxs:top-4 md:top-5 lg:top-7 z-[-1]"/>
        </div>

        <div className='grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-center'>

            {servicesInfo.map((serviceinfo)=>  
            <div key={serviceinfo.id} className='flex flex-col gap-2 w-72 h-[350px] text-center bg-gray-200 text-black rounded-md hover:scale-110 duration-[0.3s]'>
                <img src={serviceinfo.img} alt="service 1" className='w-72 rounded-t-md'/>
                <h1 className='text-xl font-bold bg-gradient-to-r from-blue-700 via-gray to-red-400 text-transparent bg-clip-text'>{serviceinfo.serviceTitle}</h1>
                <p className='py-3 px-3 text-justify text-[13px]'>{serviceinfo.shortDesc}</p>
            </div>
            )}

        </div>
    </div>
  )
}

export default Services

