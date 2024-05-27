import React, { useState, useRef, useContext } from 'react';
import "./register.scss";
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../authContext/AuthContext";
import Login from "../login/Login.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  }   

  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const [username, setUsername] = useState("");
  const usernameRef = useRef();
  
  // 120
  const history = useHistory();
  const handleFinish = async (event) => {
    event.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
       await axios.post("/auth/register", {email, username, password});
       history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  // 127
  const { user } = useContext(AuthContext);
  
  return (
    <div className="register">
       <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
          {/* <button className="loginRegButton">Sign in</button> */}
        </div>
       </div>
       <div className="regContainer">
         <h1>Unlimited movies, TV shows, and more.</h1>
         <h2>Watch anywhere. Cancel anytime.</h2>
         <p>
           Ready to watch? Enter your email to create or restart your membership.
         </p>

         {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef}/>
              <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
         )  : (
            <form action="" className="input">
              <input type="username" placeholder="username" ref={usernameRef} />
              <input type="password" placeholder="password" ref={passwordRef}/>
              <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
         )}
         
         <div className="signInOption">
           {/* 128 */}
           <span>If you have account already, </span>
           <Link to="/login" className="link">
             <span className="loginRegButton">Sign in</span>
           </Link>
         </div>
       </div>
    </div>
  )
}

export default Register