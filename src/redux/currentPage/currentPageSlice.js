import { createSlice } from '@reduxjs/toolkit';

const initialState={
    page: 1,
};

const currentPageSlice= createSlice({
    name:'currentPage',
    initialState,
    reducers:{
        incrementPage(state){
            state.page+=1;
        }

    }
});
export const { incrementPage } = currentPageSlice.actions;
export const currentPageReducer = currentPageSlice.reducer;