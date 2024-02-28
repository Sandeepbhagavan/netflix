//import { useDispatch } from "react-redux";
//import { addTrendingMoviesList } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies=()=>{
    //const dispatch=useDispatch();
    //console.log("sandeep")
    const apicall=async()=>{
        const api=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json= await api.json();
        console.log(json.results)
        //dispatch(addTrendingMoviesList(json.results))

    }
    useEffect(()=>{
        apicall();
    },[])

}

export default useTrendingMovies