import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import './Educations.css'
const Educations = () => {
  return (
    <>
      <div className="container education" id='Education'>
              <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Education Details
               </h2>
        <hr />

       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - 2027"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={< IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">BSSE</h3>
    <h4 className="vertical-timeline-element-subtitle">Riphah Intenational University Faislabad</h4>
    <p>
     
    </p>
  </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={< IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">FSc Pre-engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Standard College Toba Tek Singh </h4>
    <p>
     
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>

      </div>
   </>
  )
}

export default Educations
