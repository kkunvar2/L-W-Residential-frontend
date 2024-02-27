import React from 'react'
import "./Landing.css"
import 'animate.css';
import Footer from './Footer';
import { FaCar } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCelebration, MdLibraryBooks } from "react-icons/md";


//icons
import phone from "../Assets/phone.png"
import kitchen from "../Assets/kitchen.jpg"
import bedroom from "../Assets/bedroom.jpg"
import washroom from "../Assets/bath.jpg"


const Landing = () => {
  return (
    <>
    {/* navbar */}
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a href='#'> <span className='tl'>L</span>/<span className='tw'>W</span></a>
        </div>

        <div >
          <ul className='navbar-nav'>  
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Contact</li>
            <li className='nav-item'>About</li>
          </ul>
        </div>

        <div className='btn'>
          <button className='btn-log'>Login</button>
          <button className='btn-reg'>Register</button>
        </div>
      </nav>

      {/* hero */}
      <div className='hero-section'>
        <h1 className='animate__animated animate__zoomIn'>Welcome to <span className='tl'>L</span>/<span className='tw'>W</span> Residential</h1>
        <div className='gradienet-fill'>
          <p className=''>Have Fabulous Flate and awsome Society</p>
        </div>
        <div className='guest'>
        <button className='btn-guest'>Enter as a Guest</button>
        </div>
      </div>

      {/* Services */}
      <div className='service-container'>
        <h1 className=''>Our services</h1>
        <div className='row'>
          <div className='service'>
            <FaCar fontSize="40px" markerEnd='10px'/>
            <h2 className=''>Parking</h2>
            <p>Manage Parking, secure your vehical under the guard</p>
          </div>
          <div className='service'>
            <GiPoliceOfficerHead  fontSize="40px" markerEnd='10px'/>
            <h2>Security</h2>
            <p>For Unknown Person, Thiefs, cameras</p>
          </div>
          <div className='service'>
            <MdLibraryBooks fontSize="40px" markerEnd='10px'/>
            <h2>Maintence</h2>
            <p>Recieved your Maintence bill on time, With all instructions and easily manage your bills</p>
          </div>
          <div className='service'>
            <MdCelebration fontSize="40px" markerEnd='10px'/>
            <h2>Function</h2>
            <p>We can manage Functions, Celebrations, Meetings, Notify on time</p>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="desktop-1">
      <div className="frame-group">
        <div className="headers">
          <h1 className="label">Gallery</h1>
        </div>
      </div>
      <section className="cards">
        <div className="rectangle-frame-headers">
          <div className="wrapper-labeled-rectangles">
            <img
              className="labeled-rectangles-icon"
              loading="lazy"
              alt=""
              src={washroom}
            />
          </div>
            <div className="label1">Country bathroom</div>
          
        </div>
        <div className="rectangle-frame-headers1">
          <div className="wrapper-rectangle-19">
            <img
              className="wrapper-rectangle-19-child"
              loading="lazy"
              alt=""
              src={kitchen}
            />
          </div>
            <div className="label2">Stateside kitchen</div>
        </div>
        <div className="rectangle-frame-headers2">
          <div className="wrapper-rectangle-20">
            <img
              className="wrapper-rectangle-20-child"
              loading="lazy"
              alt=""
              src={bedroom}
            />
          </div>
            <div className="label3">Open plan kitchen and bathroom</div>   
        </div>
      </section>
    </div>
    
      {/* Get in touch */}
      <form className='contact-form'>
          <button className='c-btn'>CONTACTS</button>
          <h1>Get In Touch Now</h1>
          <h4>We have Developed unique space where you can work and live with your family.</h4>

          <div className='input-form'>
            <div className='i-first'>
              <input
                type='text'
                className='f-input'
                placeholder='First name'
                value=''
                src=''
                onChange={''}/>
              <input
                type='text'
                className='f-input'
                placeholder='Last name'
                value=''
                src=''
                onChange={''}/>
            </div>
            
            <div className='i-second'>
              <input
                type='email'
                className='f-input'
                placeholder='Email address'
                value=''
                src=''
                onChange={''}/>
              <input
                type='tel'
                className='f-input'
                placeholder='Phone Number'
                value=''
                onChange={''}/>
                {/* <img src={phone}/> */}
            </div>
            <div>
            <input
                type='textarea'
                className='msg-input'
                placeholder='Your message'
                value=''
                src=''
                onChange={''}/>
            </div>
          </div>
          <div>
            <button className='f-btn'>Send Request</button>
          </div>
      </form>

      
      <Footer />
    </>
  ) 
}

export default Landing