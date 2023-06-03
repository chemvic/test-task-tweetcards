import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64635cbe4dca1a66135b925a.mockapi.io";

export const fetchUsers = createAsyncThunk("users/fetchAll", async (_, thunkAPI) => {
  try {
     const response = await axios.get("/users");
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
