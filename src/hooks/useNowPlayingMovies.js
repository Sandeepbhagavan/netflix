import { useDispatch } from "react-redux";
import { addNowMoviesList } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const apicall=async()=>{
        const api=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        console.log(api)
        const json= await api.json();
        //console.log(json.results)
        dispatch(addNowMoviesList(json.results))

    }
    useEffect(()=>{
        apicall();
    },[])

}

export default useNowPlayingMovies