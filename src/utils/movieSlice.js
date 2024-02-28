import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerList:null,
        movieList:null
    },
    reducers:{
        addNowMoviesList:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerList=action.payload
        },
        addTrendingMoviesList:(state,action)=>{
            state.movieList=action.payload
        }
    }

})
export const {addNowMoviesList,addTrailerVideo,addTrendingMoviesList}=movieSlice.actions;
export default movieSlice.reducer;