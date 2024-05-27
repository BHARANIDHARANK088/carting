// 41
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const getStats = () => API.get("/users/stats", {
    headers: {
      token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
    },
});

// 45
export const getUsers = () => API.get("/users?new=true", {
  headers: {
    token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
  },
});
