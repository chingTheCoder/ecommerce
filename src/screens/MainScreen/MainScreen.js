import React from 'react'
import { Link, Routes , Route } from 'react-router-dom'
import Home from './components/Home.js'
import Movies from './components/Movies.js'
import TvSeries from './components/TvSeries.js'
import UpComing from '../upcoming/UpComing.js'
import RightContent from './components/RightContent.js'
import './MainScreen.css'

const MainScreen = () => {
    return (
        <div className='MainSite'>
          <nav className='NavigationMenu'>
                <div>Logo Here</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/tvseries">Tv Series</Link>
                    </li>
                    <li>
                        <Link to="/upcoming">Upcoming</Link>
                    </li>
                </ul>

          </nav>
          <div className='content'>
            <div className='leftContent'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/tvseries" element={<TvSeries/>}/>
                    <Route path="/upcoming" element={<UpComing/>}/>
                </Routes>
            </div>
            <RightContent></RightContent>
          </div>
        </div>
    )
}


export default MainScreen