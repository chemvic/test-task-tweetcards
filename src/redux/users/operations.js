import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";




export const fetchUsers = createAsyncThunk("users/fetchAll", async (currentPage=1, thunkAPI) => {
  try {
    
    const baseURL = "https://64635cbe4dca1a66135b925a.mockapi.io";

    const url =`${baseURL}/users?page=${currentPage}&limit=3`;


     const response = await axios.get(url);
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});

export const updateUser = createAsyncThunk("users/updateUser ", async (user, thunkAPI) => {
  try {
     const response = await axios.patch(`/users/${user.id}`);
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});
