import React from 'react'
import "./About.css"
import {Zoom } from 'react-awesome-reveal';
const About = ()=> {
  return (
    <>
    <Zoom direction='top' >

    
      <div className="about" id='About'>
        <div className="row">
            <div className="col-md-6 about-img">
              <img src="a25bf788-fe49-420c-805b-e872dc831348.jpg" alt="profile-pic" />
            </div>
            
            <div className="col-md-6 about-content">
              <h1 className='about-h'>About me</h1>
              <p>I am a passionate and dedicated Computer Science student 
                with a strong interest in web development and modern technologies.
                I specialize in building responsive and user-friendly applications 
                using HTML, CSS, JavaScript, and frameworks like React and Next.js.
                I also have hands-on experience with backend development using Node.js
                and databases such as MongoDB.I enjoy solving real-world problems through
                code and continuously improving my skills by working on practical projects,
                including chatbot applications and dynamic web interfaces. My goal is to grow
                as a full-stack developer and contribute to innovative and impactful digital solutions.
</p>
            </div>
        </div>
      </div>
      </Zoom>
    </>
  )
}

export default About
