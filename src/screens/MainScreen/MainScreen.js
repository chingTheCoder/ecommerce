import React,{ useState, useContext } from 'react'
import { Link, NavLink , Routes , Route } from 'react-router-dom'
import Home from './components/Home.js'
import Movies from './components/Movies.js'
import TvSeries from './components/TvSeries.js'
import UpComing from './components/UpComing.js'
import RightContent from './components/RightContent.js'
import { MovieDetailsContext } from './context/MovieDetailsContext.js'
import { MovieModalContext } from './context/MovieModalContext.js'
import './MainScreen.css'
import MovieDetailsModal from './components/MovieDetailsModal.js'
import { UserContext } from '../../context/UserContext.js'
import { IoHomeOutline, IoVideocamOutline , IoTvOutline , IoAlbumsOutline , IoLogoXbox, IoLogOutOutline } from "react-icons/io5";

const MainScreen = () => {

    const { setUserState } = useContext(UserContext)
    const [overview , setOveriew] = useState("")
    const [movieTitle , setMovieTitle ] = useState("")
    const [movieImage , setMovieImage ] = useState("")
    const [rating, setMovieRating] = useState("")
    const [movieDate, setMovieDate] = useState("")

    const [modal, setModal] = useState(false)

    return (
        <div className='MainSite' style={{ backgroundColor : '#191919'}}>
          <nav className='NavigationMenu'>
                <div className='logo'>
                    <span>MOVBIES</span>
                </div>
                <ul>
                    <li>
                        <NavLink to="/"
                        className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                           <IoHomeOutline/>  Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        >
                            <IoVideocamOutline/>  Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tvseries"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        ><IoTvOutline/>  Tv Series</NavLink>
                    </li>
                    <li>
                        <NavLink to="/upcoming"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        ><IoAlbumsOutline/>  Upcoming</NavLink>
                    </li>
                </ul>
                <div className='ticketWrapper'>
                <button className='ticketIcon'><IoLogoXbox/></button>
                    <div className='innerTicketWrapper'>
                        <span className='ticketIcon'></span>
                        <p>Play movies quizes and earn <br/> free  tickets</p>
                        <h6>50k people are playing now</h6>
                        <button className='startPlaying'>start playing</button>
                    </div>
                </div>
                <button className='logout'onClick={ () => setUserState('login')}>
                    <IoLogOutOutline/>     log out</button>
          </nav>
          <div className='content'>
            <div className='leftContent'>
                <MovieDetailsContext.Provider 
                    value={{overview, setOveriew, movieTitle, setMovieTitle, movieImage, setMovieImage, rating, setMovieRating, movieDate, setMovieDate }}>
                    <MovieModalContext.Provider value={{modal, setModal}}>
                        <MovieDetailsModal></MovieDetailsModal>
                        <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/movies" element={<Movies/>}/>
                                <Route path="/tvseries" element={<TvSeries/>}/>
                                <Route path="/upcoming" element={<UpComing/>}/>
                        </Routes>
                    </MovieModalContext.Provider>
                </MovieDetailsContext.Provider>
            </div>
            <RightContent></RightContent>
          </div>
        </div>
    )
}


export default MainScreen