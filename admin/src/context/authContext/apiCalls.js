// 64
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await API.post("/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};