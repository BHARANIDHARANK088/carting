// 14
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const getLists = (type, genre) => API.get("/lists",  {
    headers: {
      token:  "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    },
});