import React from 'react'
import './MobileNav.css'
import { useState } from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {FcHome, FcAbout, FcBiotech, FcBusinessContact,  FcPortraitMode, FcReadingEbook, FcVideoProjector,  } from "react-icons/fc";
import { Link} from 'react-scroll';
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleopen = () => {
    setIsOpen(!isOpen);
  }

  const handleMenuClick = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className='mobile-nav'>
         <div className="mobile-nav-header">
            {isOpen ? (
              <AiOutlineMenuFold className='mobile-nav-icon' size={30} onClick={handleopen}/>
            ) : (
              <AiOutlineMenuUnfold className='mobile-nav-icon' size={30} onClick={handleopen}/>
            )}
            <span className='mobile-nav-title'>My Portfolio App</span>
         </div>
          
          {isOpen && (
               <div className="mobile-nav-menu">
                 <div className="nav-items">
                        <div className="nav-item">
                          <div className="nav-link">
                            <Link to='Home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcHome />
                             Home
                            </Link>
                             </div>
        
                         <div className="nav-link">
                            <Link to='About' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcAbout />
                             About
                             </Link>
                             </div>
                            
        
                          <div className="nav-link">
                            <Link to='Education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcReadingEbook />
                             Education
                             </Link>
                             </div>
        
                          <div className="nav-link">
                            <Link to='Tech Stack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcBiotech />
                             Tech Stack
                             </Link>
                             </div>
        
                          <div className="nav-link">
                            <Link to='Projects' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcVideoProjector />
                             Projects
                             </Link>
                             </div>                     
        
        
                          <div className="nav-link">
                            <Link to='Work Experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcPortraitMode />
                             Work Experience
                             </Link>
                          </div>
        
                           <div className="nav-link">
                             <Link to='Contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                             <FcBusinessContact />
                             Contact
                             </Link>
                          </div>
        
                        </div>              
                       </div>         
                   </div>
            )}
                   </div>
          

    </>
  )
}

export default MobileNav
