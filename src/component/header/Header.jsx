import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaBehance } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
import { FaLinkedinIn, FaBars } from "react-icons/fa";

const Header = () => {
    const [resHeader, setResHeader] =useState(false)
  return (
    <header>
    <nav className={resHeader ? "active" : ""}>
        <ul>
            <li className="active"><a href="#hero-section">Home</a></li>
            <li><a href="#about-us">About</a></li>
            <li><a href="#my-services">Services</a></li>
            <li><a href="#project-section">Project</a></li>
            <li><a href="#testimonial-sect">Client</a></li>
            <li><a href="#contact-us-cont">Contact</a></li>

        </ul>
        <button id="cross"> <span onClick={()=>setResHeader(false)}> <IoMdClose/></span></button>
    </nav>
    <div className="social-icon">
        <ul>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100068708954125" target="_blank">
                    <FaFacebookF/>
                </a>
            </li>
            <li><a href="https://www.pinterest.de/Abdulhalimdev/_saved/">
                <SlSocialPintarest/>
            </a></li>
            <li><a href="#">
               <FaBehance />
                
            </a></li>
            <li><a href="#">
                <FaLinkedinIn/>
            </a></li>

        </ul>
    </div>
    <div className="menu-bar" title="Open Menu">
        <span onClick={()=>setResHeader(true)}>{<FaBars />}</span>
    </div>
</header>
  )
}

export default Header