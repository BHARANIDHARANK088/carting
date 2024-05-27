// 24
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const getSingleMovie = (item) => API.get("/movies/find/" + item, {
    headers: {
      token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    },
})

// 32
export const getRandomMovie = (type) => API.get("/movies/random?type=" + type, {
    headers: {
      token:  "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    }
})