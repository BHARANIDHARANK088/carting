import React from 'react';
import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleCon">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userCon">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                  <span className="userShowInfoTitle">annabeck99</span>
                </div>
                <div className="userShowInfo">
                  <CalendarTodayIcon className="userShowIcon"></CalendarTodayIcon>
                  <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroidIcon className="userShowIcon"></PhoneAndroidIcon>
                  <span className="userShowInfoTitle">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                  <MailOutlineIcon className="userShowIcon"></MailOutlineIcon>
                  <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearchingIcon className="userShowIcon"></LocationSearchingIcon>
                  <span className="userShowInfoTitle">New York | USA</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 67" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                  </div>
                </div>
                <div className="userUpdateRight">
                   <div className="userUpdateUpload">
                     <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                     <label htmlFor="file">
                        <PublishIcon className="userUpdateIcon"></PublishIcon>
                     </label>
                     <input type="file" id="file" style={{ display: "none" }}/>
                   </div>
                   <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default User