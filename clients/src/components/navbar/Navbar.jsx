import React, { useState, useContext } from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// 124
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

// 6
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  console.log(isScrolled);

  // 125
  const { dispatch } = useContext(AuthContext);
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navContainer">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            {/* <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span> */}

            {/* 7 */}
            <Link to="/" className="link">
               <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
               <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
               <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <SearchIcon className="navIcon"></SearchIcon>
            <span>KID</span>
            <NotificationsIcon className="navIcon"></NotificationsIcon>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="profile">
              <ArrowDropDownIcon className="navIcon"></ArrowDropDownIcon>
              <div className="options">
                <span>Settings</span>
                {/* 126 onClick */}
                <span onClick={() => dispatch(logout())}>Logout</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;