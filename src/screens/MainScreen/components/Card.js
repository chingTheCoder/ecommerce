import React, { useContext } from "react";
import { MovieDetailsContext } from "../context/MovieDetailsContext";
import { MovieModalContext } from "../context/MovieModalContext";

const Card = (props) => {

    const { setOveriew, setMovieTitle , setMovieImage, setMovieRating, setMovieDate } = useContext(MovieDetailsContext)
    const { setModal } = useContext(MovieModalContext)

    const popDetails = (data) =>{
        setMovieTitle(data.title)
        setOveriew(data.description)
        setMovieImage(data.image)
        setMovieRating(data.vote_average)
        setMovieDate(data.release_date)
        setModal(true)
    }

    console.log(props)
    return (
        <div onClick={ () => popDetails(props)}>
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`}/>
        </div>
    )
}


export default Card