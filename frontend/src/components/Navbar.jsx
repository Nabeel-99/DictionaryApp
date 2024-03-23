import React from 'react'
import { GiBookmark } from "react-icons/gi";
import { TbBrightnessDown } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg text-white p-[2rem]">
      <GiBookmark className="w-6 h-6 text-white md:ml-10"/>
      <div className="flex gap-5 items-center justify-center md:mr-10">
       <button className=""><IoMoonSharp className="w-6 h-6 text-white"/></button> 
        <Link to=""><FaGithub className="w-6 h-6 text-white"/></Link>
      </div>
    </div>
  )
}

export default Navbar
