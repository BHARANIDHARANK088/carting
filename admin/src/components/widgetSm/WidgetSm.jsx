import React, { useEffect, useState } from 'react';
import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

// 46
import { getUsers } from '../../apiRequest/userRequest.js';

const WidgetSm = () => {
  // 47
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
        try {
            const response = await getUsers();
            console.log(response);  
            setNewUsers(response.data); 
        } catch (error) {
            console.log(error);
        }
    }
    getNewUsers();
  }, []); 
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {/* 48 */}
        {newUsers.map((user) => (
            <li className="widgetSmListItem">
               <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                 <span className="widgetSmUsername">{user.username}</span>
               </div>
               <button className="widgetSmButton">
                 <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                  Display
                </button>
            </li>
        ))}

        {/* <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                Display
            </button>
        </li>

        <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
               <VisibilityIcon className="widgetSmIcon"></VisibilityIcon>
                Display
            </button>
        </li> */}
      </ul>
    </div>
  )
}

export default WidgetSm