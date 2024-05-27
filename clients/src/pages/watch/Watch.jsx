import React from 'react';
import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Watch = () => {
  // 29
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon>
          Home
        </div>
      </Link>
      {/* 30 src */}
      <video className="video" autoPlay progress controls 
        src={movie.video}
      >
      </video>
    </div>
  )
}

export default Watch