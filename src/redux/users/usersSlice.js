import { createSlice } from '@reduxjs/toolkit';
import {fetchUsers, updateUser} from "redux/users/operations";

const initialState={     
      items: [],
      isLoading: false,
      error: null
  };
   const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;    
  };

const usersSlice = createSlice({
    name: 'users',
    initialState, 
    extraReducers: (builder) =>{
      builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action)=>{
        state.isLoading=false;
        state.items=action.payload;
        state.error=null;
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action)=>{
        state.isLoading=false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.error=null;
      })  
    }
  });

export const usersReducer = usersSlice.reducer;
