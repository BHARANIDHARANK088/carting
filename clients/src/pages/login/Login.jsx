import "./login.scss";

// 121
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  // 122
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    login({email,password}, dispatch);
  }
  
  return (
    <div className="login">
       <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
        </div>
       </div>
       <div className="loginContainer">
         <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
            <button className="loginButton" onClick={handleLogin}>Sign In</button>
            <Link to="/register" style={{textDecoration: "none"}}>
              <span>
                New to Netflix? <b>Sign up now.</b>
              </span>
            </Link>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
         </form>
       </div>
    </div>
  )
}

export default Login;