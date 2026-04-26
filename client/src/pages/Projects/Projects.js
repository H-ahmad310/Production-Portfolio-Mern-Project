import React from 'react'
import './project.css'
import {Zoom } from 'react-awesome-reveal'
const Projects = () => {
  return (
     <Zoom>

     
    <div className='container project' id='Projects'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Top recent projects
      </h2>
        <hr />
        <p className='col-10'>
          I have developed multiple web development projects including a Wanderlust Traveling Website using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. I also built mini projects like a Calculator and Digital Clock using HTML, CSS, and JavaScript. Additionally, I created a Weather Checking App using React.js that displays real-time weather data. These projects demonstrate my skills in full-stack development, responsive design, and dynamic web applications
        </p>
        
        {/* {card design} */}
        <div className="row" id='ads'>
           <div className="col-md-4">
            <div className="card rounder">
              <div className="card-image">
                <span className='card-notify-badge'>Full stack</span>
                <img className='imagee' src="eric-johnson-7FERPzPsz3A-unsplash.jpg" alt="project" />               
              </div>

              <div className="card-img-overly m-auto mt-3">
                <span className='card-detail-badge'>Node</span>
                <span className='card-detail-badge'>Express</span>
                <span className='card-detail-badge'>react</span>
                <span className='card-detail-badge'>Mongodb</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className='text-uppercase'>
                    wenderlust appartment booking website
                  </h5>
                </div>
                <a className='ad-btn' href="https://github.com/H-ahmad310/airbnb-website.git" target='blank'>View</a>
              </div>

            </div>
           </div>
           <div className="col-md-4">
            <div className="card rounder">
              <div className="card-image">
                <span className='card-notify-badge'>Weather App</span>
                <img className='imagee' src="noaa-QRBe3Ithczs-unsplash.jpg" alt="project" />               
              </div>

              <div className="card-img-overly m-auto mt-3">
                <span className='card-detail-badge'>Node</span>
                <span className='card-detail-badge'>Express</span>
                <span className='card-detail-badge'>react</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className='text-uppercase'>
                    check your weather at daily basis
                  </h5>
                </div>
                <a className='ad-btn' href="https://github.com/H-ahmad310/Weather-App.git" target='blank'>View</a>
              </div>

            </div>
           </div>
           <div className="col-md-4">
            <div className="card rounder">
              <div className="card-image">
                <span className='card-notify-badge'>Calculator</span>
                <img  className='imagee' src="kelly-sikkema-3-Tc_5LROrM-unsplash.jpg" alt="" />               
              </div>

              <div className="card-img-overly m-auto mt-3">
                <span className='card-detail-badge'>Html</span>
                <span className='card-detail-badge'>Css</span>
                <span className='card-detail-badge'>Java Script</span>
                
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className='text-uppercase'>
                    Calulate your Bussines With new ideas
                  </h5>
                </div>
                <a className='ad-btn' href="https://github.com/H-ahmad310/calculator.git" target='blank'>View</a>
              </div>

            </div>
           </div>
        </div>
    </div>
        
    </Zoom>    
  )

}

export default Projects
