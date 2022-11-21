import React, { useContext} from "react";
import { MovieModalContext } from "../context/MovieModalContext";
import { MovieDetailsContext } from "../context/MovieDetailsContext";
import  SearchBar  from './SearchBar'
import {IoArrowBack, IoLibraryOutline, IoPlaySharp , IoShareSocialOutline , IoStar} from "react-icons/io5"
import  womanImage  from '../../../images/womanking.jpg'
import dark from '../../../images/dark.jpeg'
import sea from '../../../images/sea.jpg'

const MovieDetailsModal = () => {

    const { modal, setModal } = useContext(MovieModalContext)
    const { movieTitle , overview , movieImage, rating, movieDate } = useContext(MovieDetailsContext)
    // const closeModal = () => {
    //     console.log('modal')
    // }

    console.log('rating is here')
    console.log(rating)
    if (modal === true) {
        return (
            <div className="MovieDetailsModal">
                <div className="topMovieDetailsModal">
                    <div className="hh"><SearchBar></SearchBar></div>
                </div>
                <div className="movieDetailsmodalBanner">
                    <button className='backButton'onClick={() => setModal(false) }>
                        <IoArrowBack></IoArrowBack>
                    </button>
                    <img src={`https://image.tmdb.org/t/p/w500${movieImage}`}/>
                    <div className="playerActions">
                        <div className='playModalVideo'><IoPlaySharp></IoPlaySharp></div>
                        <div>Watch Trailer</div>
                    </div>
                </div>
                <div className="movieDescriptionCover">
                    <div className="movieDetailsLeft">
                        <div>
                            <span className="theNameOfTheMovie">{movieTitle}</span>
                            <span>{movieDate}</span>
                        </div>
                        <p>
                            {overview}
                        </p> 
                        <div className="hr"></div>
                        <h4>Director : <span>Not found from api</span></h4>
                        <div className="hr"></div>
                        <h4>Writters : <span>Not found from api</span></h4>
                        <div className="hr"></div>
                        <h4>Store : <span>Null, false</span></h4>
                        <div className="hr"></div>
                        <div className='movieDetailModalFooter'>
                            <button className="tr">Top rated movie #65</button>
                            <button className="nm">Awards 9 nominations</button>
                        </div>
                    </div>
                    <div className="movieDetailsRight">
                        <div className="tokens">
                            <IoShareSocialOutline></IoShareSocialOutline>
                            <span style={{color: '#DCAE12'}}>
                             <IoStar></IoStar>
                            </span>
                            <span>
                                {rating}
                            </span>
                        </div>
                        <div className="opt">
                            <button>See showtimes</button>
                            <button><IoLibraryOutline></IoLibraryOutline>  More Watch options</button>
                        </div>
                        <div className="optionsImage">
                            <img src={womanImage} alt='woman'></img>
                            <img src={dark}></img>
                            <img src={sea}></img>
                            <div><IoLibraryOutline></IoLibraryOutline> The best movies and shows september</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
        return false
    }

}



export default MovieDetailsModal