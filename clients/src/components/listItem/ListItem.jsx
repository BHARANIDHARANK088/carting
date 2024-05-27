import React, { useEffect, useState } from 'react';
import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

// 25
import { getSingleMovie } from '../../apiRequest/movieRequest';
import { Link } from 'react-router-dom';

// 22 add item also as props
const ListItem = ({index, item}) => {
  const [isHovered, setIsHovered] = useState(false); 

  // 26
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getSingleMovie(item);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [item])

  console.log("Movie", movie);

  
  return (
    // 28
    <Link to={{ pathname: "/watch", state: {movie} }}>

    <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
         style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    >
      {/* 27 */}
      <img src={movie?.imgSm}/>
      {isHovered && ( 
        <>
           <video src={movie?.trailer} autoPlay={true} loop></video>
           <div className="itemInfo">
             <div className="icons">
               <PlayArrowIcon className="icon"></PlayArrowIcon>
               <AddIcon className="icon"></AddIcon>
               <ThumbUpAltOutlinedIcon className="icon"></ThumbUpAltOutlinedIcon>
               <ThumbDownOffAltOutlinedIcon className="icon"></ThumbDownOffAltOutlinedIcon>
             </div>
             <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">+{movie?.limit}</span>
                <span>{movie?.year}</span>
             </div>
             <div className="itemDesc">
                {movie?.desc}
             </div>
             <div className="genre">{movie?.genre}</div>
             </div>
        </>
      )}
    </div>
    </Link>
  )
}

export default ListItem