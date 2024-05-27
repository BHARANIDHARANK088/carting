import React, {useState, useEffect, useContext} from 'react';
import "./movieList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";

// 73
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from '../../context/movieContext/apiCalls';

const MovieList = () => {
  // 74
  const {movies, dispatch} = useContext(MovieContext);

  // 75
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  // 78
  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };
  
  // 76
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const movie = params.row;
        return (
          <>
            <Link to={{ pathname: "/movie/" + params.row._id, state: {movie} }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="productList">
      ProductList
      <DataGrid
        // 77 
        rows={movies}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  )
}

export default MovieList;