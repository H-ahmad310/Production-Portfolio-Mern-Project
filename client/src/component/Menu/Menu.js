import React from 'react'
import "./Menu.css"
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector,  } from "react-icons/fc";
import { Link} from 'react-scroll';
import  Zome  from "react-awesome-reveal";
import  Fade  from "react-awesome-reveal";

const Menu = ({toggle}) => {
  return (
    
      <> 
        {
          
          toggle? (
            
            <>

                <Zome>
              <div className="navbar-probile-pic">
                  <img src="a25bf788-fe49-420c-805b-e872dc831348.jpg" alt="profile pic" />
               </div>
                </Zome>

                 
              <Fade>

              
                

               <div className="nav-items">
                <div className="nav-item">

                  <div className="nav-link">
                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcHome />
                     Home
                    </Link>
                     </div>

                 <div className="nav-link">
                    <Link to='About' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />
                     About
                     </Link>
                     </div>
                    

                  <div className="nav-link">
                    <Link to='Education' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcReadingEbook />
                     Education
                     </Link>
                     </div>

                  <div className="nav-link">
                    <Link to='Tech Stack' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech />
                     Tech Stack
                     </Link>
                     </div>

                  <div className="nav-link">
                    <Link to='Projects' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcVideoProjector />
                     Projects
                     </Link>
                     </div>                     


                  <div className="nav-link">
                    <Link to='Work Experience' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcPortraitMode />
                     Work Experience
                     </Link>
                  </div>

                   <div className="nav-link">
                     <Link to='Contact' spy={true} smooth={true} offset={-100} duration={100}>
                     <FcBusinessContact />
                     Contact
                     </Link>
                  </div>

                </div>              
               </div>
               </Fade>
            </>

           
          
          ):(
           <>

           <Fade>
               <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcHome />
                    </Link>
                     </div>

                 <div className="nav-link">
                    <Link to='About' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />
                     </Link>
                     </div>

                  <div className="nav-link">
                    <Link to='Education' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcReadingEbook />
                     </Link>
                     </div>

                  <div className="nav-link">
                    <Link to='Tech Stack' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech />
                     </Link>
                     </div>

                  <div className="nav-link">
                    <Link to='Projects' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcVideoProjector />
                     </Link>
                     </div>       


                  <div className="nav-link">
                    <Link to='Work Experience' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcPortraitMode />
                     </Link>
                  </div>              

                   <div className="nav-link">
                     <Link to='Contact' spy={true} smooth={true} offset={-100} duration={100}>
                     <FcBusinessContact />
                     </Link>
                  </div>

                </div>              
               </div>
               </Fade>
           </>
          )
        }
         
    </>
    
  )
}

export default Menu
