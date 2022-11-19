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

const MainScreen = () => {

    const [overview , setOveriew] = useState("")
    const [movieTitle , setMovieTitle ] = useState("")
    const [movieImage , setMovieImage ] = useState("")
    const [rating, setMovieRating] = useState("")
    const [movieDate, setMovieDate] = useState("")

    const [modal, setModal] = useState(false)

    return (
        <div className='MainSite'>
          <nav className='NavigationMenu'>
                <div>Logo Here</div>
                <ul>
                    <li>
                        <NavLink to="/"
                        className={({isActive})=> (isActive ? 'active' : 'inactive') }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        >
                            Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tvseries"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        >
                            Tv Series</NavLink>
                    </li>
                    <li>
                        <NavLink to="/upcoming"
                        className={({isActive})=> (isActive ? 'active' : 'inactive')}
                        >Upcoming</NavLink>
                    </li>
                </ul>

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