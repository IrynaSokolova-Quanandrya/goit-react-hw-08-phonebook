import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    <p>ERROR</p>;
  }
});
const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    <p>ERROR</p>;
  }
});
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    <p>ERROR</p>;
  }
});
const fetchCurrentUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if(persistedToken === null){
    return state;
  }

  token.set(persistedToken);
  try{
    const {data} = await axios.get("/users/current");
    return data
  } catch (error){
    <p>ERROR</p>
  }
})

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,

};
export default operations;
