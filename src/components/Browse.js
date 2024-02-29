
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTredningMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
    const selector=useSelector((store)=>store.gpt.showGptSearch)
    useNowPlayingMovies();
    useTrendingMovies();
  return (
    <div>
      <Header/>
      {selector?<GptSearch/>:<><MainContainer/>
      <SecondaryContainer/></>}
      {/* <MainContainer/>
      <SecondaryContainer/> */}
    </div>
  )
}

export default Browse
