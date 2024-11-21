import React, { useState } from 'react'
import assets from '../../assets/assets.js'
import "./Login.css"
const Login = () => {

    const [currState,setCurrState] = useState("Sign Up");
    
    
  return (
    <div className='login'>
        <img className='logo' src={assets.logo_big} alt="" />
        <form className='login-form'>
            <h2>{currState} </h2>
           
            {currState === "Login" ? <></> : <input className='form-input' placeholder='Username' required type="text" />}
            
            <input className='form-input' placeholder='Enter Email' type="email" />
            <input className='form-input' placeholder='password' type="password" />
            
            <button type='submit'>{currState === "Login" ? "Sign In " : " Create Account"}</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forgot">
                {currState === "Login" ? <p className="login-toggle">Don't have an account ! <span onClick={()=>setCurrState("Sign Up")}>Create Account</span></p> :
                 <p className="login-toggle">Already have an account ! <span onClick={()=>setCurrState("Login")}>click here</span></p> }
                
                
            </div>
        </form>
    </div>
  )
}

export default Login