import React from 'react';
import "./movie.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart.jsx";
import { productData } from '../../dummyData.js';
import PublishIcon from '@mui/icons-material/Publish';
import { useLocation } from 'react-router-dom';

const Movie = () => {
  // 81
  const location = useLocation(); 
  const movie = location.state.movie;
  console.log(movie);
    
  return (
    <div className="product">
      <div className="productTitleCon">
        {/* 80 */}
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
           <div className="productInfoTop">
              {/* 82 give movie values */}
              <img src={movie.img} alt="" className="productInfoImg" />
              <span className="productName">{movie.title}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{movie._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">genre:</span>
                    <span className="productInfoValue">{movie.genre}</span>
                </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">year:</span>
                    <span className="productInfoValue">{movie.year}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">limit:</span>
                    <span className="productInfoValue">{movie.limit}</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                {/* 83 */}
                <label>Movie Title</label>
                <input type="text" placeholder={movie.title} />
                <label>Year</label>
                <input type="text" placeholder={movie.year} />
                <label>Genre</label>
                <input type="text" placeholder={movie.genre} />
                <label>Limit</label>
                <input type="text" placeholder={movie.limit} />
                <label>Trailer</label>
                <input type="file" placeholder={movie.trailer} />
                <label>Video</label>
                <input type="file" placeholder={movie.video} />
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={movie.img} alt="" className="productUploadImg" />
                    <label for="file">
                        <PublishIcon></PublishIcon>
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Movie;