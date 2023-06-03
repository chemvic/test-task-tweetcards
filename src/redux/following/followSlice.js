import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isFollowed: false,
}


const followSlice= createSlice({
    name: 'follow',
    initialState,
    reducers:{
        toggleFollow(state){
            state.isFollowed=!state.isFollowed;
        },
    },
});

export const { toggleFollow } = followSlice.actions;
export const followReducer = followSlice.reducer;