import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import { Link } from "react-router-dom";

// 49 products to movies
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               <Link to="/" className="link">
                  <li className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
                     Home
                  </li>
               </Link>
               <li className="sidebarListItem">
                 <TimelineIcon className="sidebarIcon"></TimelineIcon>
                  Analytics
               </li>
               <li className="sidebarListItem">
                 <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
                  Sales
               </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
               <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentityIcon className="sidebarIcon"></PermIdentityIcon>
                     Users
                  </li>
               </Link>
               <Link to="/movies" className="link">
                  <li className="sidebarListItem">
                    <PlayCircleOutlineIcon className="sidebarIcon"></PlayCircleOutlineIcon>
                     Movies
                  </li>
               </Link>
               <Link to="/lists" className="link">
                  <li className="sidebarListItem">
                     {/* 96 change transactions to lists */}
                     <AttachMoneyIcon className="sidebarIcon"></AttachMoneyIcon>
                      Lists
                   </li>
               </Link>
               <Link to="/newMovie" className="link">
                  <li className="sidebarListItem">
                    <AddToQueueIcon className="sidebarIcon" />
                    Add Movie
                  </li>
               </Link>
               <Link to="/newList" className="link">
                  <li className="sidebarListItem">
                   <QueuePlayNextIcon className="sidebarIcon" />
                   Add List
                  </li>
               </Link>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                 <MailOutlineIcon className="sidebarIcon"></MailOutlineIcon>
                  Mail
               </li>
               <li className="sidebarListItem">
                 <DynamicFeedIcon className="sidebarIcon"></DynamicFeedIcon>
                  Feedback
               </li>
               <li className="sidebarListItem">
                  <ChatBubbleOutlineIcon className="sidebarIcon"></ChatBubbleOutlineIcon>
                   Messages
               </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                 <WorkOutlineIcon className="sidebarIcon"></WorkOutlineIcon>
                  Manage
               </li>
               <li className="sidebarListItem">
                 <TimelineIcon className="sidebarIcon"></TimelineIcon>
                  Analytics
               </li>
               <li className="sidebarListItem">
                 <ReportIcon className="sidebarIcon"></ReportIcon>
                  Reports
               </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;