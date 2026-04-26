import React, { useRef, useState } from 'react'
import './content.css'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Slide } from 'react-awesome-reveal';
import emailjs from "@emailjs/browser";

const Content = () => {

  const form = useRef();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // 🔴 Validation
    if (!name || !email || !message) {
      setError("Please fill all fields ❌");
      setStatus("");
      return;
    }

    setError("");
    setStatus("sending");

    emailjs.sendForm(
      "service_jgkgcti",
      "template_cndhian",
      form.current,
      "zUr10cbXymtrArbbM"
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
    })
    .catch((error) => {
      console.log(error);
      setStatus("error");
    });
  };

  return (
    <>
      <Slide direction='right'>
        <div className="contact" id='Contact'>
          <div className="card card0 border-0">

            <div className="row">

              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img src="markus-winkler-48CkLuEGgWU-unsplash.jpg" alt="contact" className='image'/>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 mt-4 col-md-6">
                <div className="card2 d-flex card border-0 px-3 py-5">

                  <form ref={form} onSubmit={sendEmail}>
                    
                    <h4>
                      
                    <h4>
                      Contact With 
                    
                      <a href="https://linkedin.com/in/hussnain-ahmad-813713335" target="_blank" rel="noreferrer">
                        <FaLinkedin color='rgba(27, 24, 207, 0.94)' size={30} className='ms-3' />
                      </a>
                    
                      <a href="https://github.com/H-ahmad310" target="_blank" rel="noreferrer">
                        <FaGithub color='black' size={30} className='ms-2'/>
                      </a>
                    
                      <a href="https://facebook.com/hussnain.ahmad.517174" target="_blank" rel="noreferrer">
                        <FaFacebook color='rgba(24, 42, 207, 0.94)' size={30} className='ms-2'/>
                      </a>
                    
                      <a href="https://instagram.com/h_ahmad_310" target="_blank" rel="noreferrer">
                        <FaInstagram color='rgba(119, 9, 77, 0.94)' size={30} className='ms-2'/>
                      </a>
                    
                    </h4>
                    </h4>

                    {/* 🔔 Bootstrap Alerts (NO CSS CHANGE) */}
                    {error && (
                      <div className="alert alert-danger mt-2">
                        {error}
                      </div>
                    )}

                    {status === "success" && (
                      <div className="alert alert-success mt-2">
                        Your email sent successfully ✔️
                      </div>
                    )}

                    {status === "error" && (
                      <div className="alert alert-danger mt-2">
                        Failed ❌
                      </div>
                    )}

                    {status === "sending" && (
                      <div className="alert alert-info mt-2">
                        Sending...
                      </div>
                    )}

                    <div className="row px-3">
                      <input 
                        type="text" 
                        name="user_name" 
                        placeholder="Enter Your Name" 
                        className="mb-3" 
                      />
                    </div>

                    <div className="row px-3">
                      <input 
                        type="email" 
                        name="user_email" 
                        placeholder="Enter Your Email" 
                        className="mb-3" 
                      />
                    </div>

                    <div className="row px-3">
                      <textarea 
                        name="message" 
                        placeholder="message" 
                        className="mb-3" 
                      />
                    </div>

                    <div className="row px-3">
                      <button 
                        className="button" 
                        type="submit"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                      </button>
                    </div>

                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Content