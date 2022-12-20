import React, { useEffect, useState } from 'react';
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from './config';
import Home from '../components/Home';


const Login = () => {
  const [value, setValue] = useState("");

  const handleLogin = () => {
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    })
  }
  useEffect(() => {
    localStorage.getItem("email")
  }, [])
  return (
    <>
    {
      value ? <Home/> :(
        <div className='loginDiv'>
      <br />
      <h1 className='googleH1'>To continue </h1>
      <img className='loginImg' src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="googleOAuthImg" onClick={()=>{handleLogin()}} />
    </div>
      )
    }
    
    </>
  )
}

export default Login