import React, { useState } from 'react'
import assets from '../../assets/assets.js'
import "./Login.css"
import { signUp ,login } from '../../config/fireBase.js'
const Login = () => {

    const [currState,setCurrState] = useState("Sign Up");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const onSubmitHandler = (event) => {
          event.preventDefault();
          if(currState === "Sign Up"){
            signUp(userName,email,password);
          }else{
            login(email,password);
          }
    }
    
  return (
    <div className='login'>
        <img className='logo' src={assets.logo_big} alt="" />
        <form onSubmit={onSubmitHandler} className='login-form'>
            <h2>{currState} </h2>
           
            {currState === "Login" ? <></> : <input onChange={(e)=>setUserName(e.target.value)} className='form-input' placeholder='Username' required type="text" />}
            
            <input onChange={(e)=>setEmail(e.target.value)} className='form-input' placeholder='Enter Email' type="email" />
            <input onChange={(e)=>setPassword(e.target.value)} className='form-input' placeholder='password' type="password" />
            
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