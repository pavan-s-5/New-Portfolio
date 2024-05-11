import React, { useState } from "react";
import themePattern from "../assets/theme_pattern.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// icons
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {

  const accessKey = import.meta.env.VITE_EMAIL_SENDING_ACCESS_KEY;

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      message: ""
    });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Your message is submitted successfully! ")
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      console.log("Success", res);
    }
  };

  const notify = () => toast("Wow so easy!");

  return (
    <div id="contact" className="flex flex-col justify-center items-center my-20 ">
      <div className="relative mb-16">
        <h1 className="text-center font-bold xxxs:text-2xl md:text-4xl lg:text-6xl">Get In Touch</h1>
        <img
          src={themePattern}
          alt="Pattern"
          className="xxxs:w-24 md:w-34 lg:w-40  absolute  xxxs:left-[80px] md:left-[150px] lg:left-[250px] xxxs:top-3 md:top-5 lg:top-7 z-[-1]"
        />
      </div>

      <div className="flex xxxs:flex-col md:flex-row justify-center items-start w-[90%] xxxs:gap-8 md:gap-20">

        <div className=" flex flex-col gap-5 xxxs:w-full md:w-[40%]">
          <h1 className="text-3xl font-bold">Let's talk</h1>
          <p className="xxxs:text-sm md:text-lg">
            I'm currently available to take new projects, So feel free to send
            me a message about anything you want me to work on. You can contact
            anytime.
          </p>

          <div className="flex flex-col gap-2"> 
            <div className="flex justify-start items-center gap-2">
              <MdPhone className="cursor-pointer"/>
              <p className="hover:underline cursor-pointer">+91 9591971998</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <IoMdMail className="cursor-pointer"/>
              <p className="hover:underline cursor-pointer">pavansgowda500@gmail.com</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <IoLogoWhatsapp className="cursor-pointer"/>
              <p className="hover:underline cursor-pointer">WhatsApp</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <IoLocationSharp className="cursor-pointer"/>
              <p className="hover:underline cursor-pointer">Bengaluru, India</p>
            </div>
          </div>
        </div>
{/* --------------------------------------------------------------------------------- */}
        <form onSubmit={onSubmit} className="flex flex-col xxxs:w-full md:w-[50%]">
          <label htmlFor="">Your Name</label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          required placeholder="Enter your name" name="name" className="p-3 my-2 rounded-md bg-gray-500 text-white text-lg placeholder:text-black"/>

          <label htmlFor="">Your Email</label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email" id=""required placeholder="example@gmail.com" className="p-3 my-2 rounded-md bg-gray-500 text-white text-lg placeholder:text-black"/>

          <label htmlFor="">Phone Number</label>
          <input type="text" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          name="Phone Number" id=""required placeholder="+91 1234567891" className="p-3 my-2 rounded-md bg-gray-500 text-white text-lg placeholder:text-black"/>

          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            placeholder="Write your message here..."
            className="p-3 my-2 rounded-md bg-gray-500 text-white text-lg placeholder:text-black"
          ></textarea>

          <button type="submit" className="text-center p-2 mt-5 border-2 w-32 rounded-md hover:bg-green-400 transition-all uppercase">
            Submit
          </button>
          <ToastContainer />
        </form>

      </div>
    </div>
  );
};

export default Contact;
