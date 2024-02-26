import React from 'react'
import "./Landing.css"
import 'animate.css';
import Footer from './Footer';

//icons
import phone from "../Assets/phone.png"
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
          <button className='btn-reg'>Enter as a Guest</button>
        </div>
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