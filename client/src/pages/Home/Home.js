import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf'
import { BsFillMoonStarsFill ,BsFillSunFill } from "react-icons/bs";

import "./Home.css"
import {Fade}  from 'react-awesome-reveal';


const Home = () => {

  const [theme,setTheme]=useTheme();

  //handle theme

  const handleTheme=()=>{
    setTheme((prevState)=>(prevState === "light" ? "dark" : "light"))  
  }
  return (
    <>
       <div className="home-container" id='Home'>
        <div className="theme-btn" onClick={handleTheme}>
            {theme === "light" ? (< BsFillSunFill size={30}/>) :(<BsFillMoonStarsFill size={30}/> )}
        </div>
        <div className="container home-content" >
          <Fade direction="right" >
        <h2> Hi👋I'm a</h2>
          <h1>
            <Typewriter
                options={{
                  strings: ['FullStack Developer !', 
                             'MernStack Developer !',
                            'React Native Developer!'
                          ],
                  autoStart: true,
                  loop: true,
                }}
            />
          </h1>
            </Fade>

            <Fade direction ="top">
          <div className="home-buttons">
            <a className='btn btn-hire' 
            href="https://api.whatsapp.com/send?phone=03473800310" target="_blank" rel="noopener noreferrer">Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="Hussnain Ahmad.pdf"> My Resume</a>
          </div>
          </Fade>

        </div>
       </div>
    </>
  )
}

export default Home
