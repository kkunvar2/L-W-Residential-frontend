import React, { useState } from 'react'
import "./LoginSignup.css"


// icons
import user_icon from "../Assets/user.png"
import email_icon from "../Assets/email.png"
import pass_icon from "../Assets/padlock.png"

const LoginPage = () => {

    //States
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password:'',
    });

    //Function
    const handleValidation = (e) => {
        const { name, value } = e.target;
        let errors = { ...formErrors };

        switch (name) {
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
                break;
            case 'password':
                errors.password = !value ? 'Please enter password!' : '';
                break;
            default:
                break;
        }

        setFormErrors(errors);
        setInputs({ ...inputs, [name]: value });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
    <div>
        <div className='container'>
            <div className='header'>
                <div className='text'> <span className='tl'>L</span>/ <span className='tw'>W</span> Residential </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon}  alt=''/>
                    <input type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleValidation}/>
                </div>
                {formErrors.email && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.email}</p>}

                <div className='input'>
                    <img src={pass_icon}  alt=''/>
                    <input type='password' placeholder='Password' name='password' value={inputs.password} onChange={handleValidation} />

                </div>
                {formErrors.password && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.password}</p>}

            </div>
            <div className='forgot-password'>Lost Password? <span>click Here!</span></div>
            <div className='submit-container'>
                <div className='submit'>SignUp</div>
                <div className='submit'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage