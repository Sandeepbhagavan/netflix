import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowMoviesList:(state,action)=>{
            state.nowPlayingMovies=action.payload
        }
    }

})
export const {addNowMoviesList}=movieSlice.actions;
export default movieSlice.reducer;