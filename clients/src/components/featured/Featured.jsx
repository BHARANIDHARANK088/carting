import React, { useEffect, useState } from 'react';
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// 33
import { getRandomMovie } from '../../apiRequest/movieRequest';

const Featured = ({type, setGenre}) => {
  // 31
  const [content, setContent] = useState({});

  // 34
  useEffect(() => {
     const getRandomContent = async () => {
        try {
          const response = await getRandomMovie(type);
          console.log(response.data[0]);
          setContent(response.data[0]);
        } catch (error) {
          console.log(error);
        }
     }
     getRandomContent();
  }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
        </div>
      )}
      {/* 35 */}
      <img src={content.img} alt=""/>

      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon></PlayArrowIcon>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon></InfoOutlinedIcon>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured