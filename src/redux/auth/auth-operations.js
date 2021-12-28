import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// axios
// .get("https://connections-api.herokuapp.com/users/signup")
// .then(data=>console.log)

const register = createAsyncThunk("/auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    return data;
  } catch (error) {
    <p>ERROR</p>;
  }
});
// const logIn = createAsyncThunk('/auth/login', async credentials => {
//     try{
//         const {data} = await axios.post('/users/login', credentials);
//         return data;
//     }
//     catch (error) {
//         <p>ERROR</p>
//     }
// });
const operations = {
  register,
  // logIn
};
export default operations;
