import React, { useContext} from "react";
import { MovieModalContext } from "../context/MovieModalContext";
import { MovieDetailsContext } from "../context/MovieDetailsContext";

const MovieDetailsModal = () => {

    const { modal, setModal } = useContext(MovieModalContext)
    const { movieTitle , overview , movieImage, rating, movieDate } = useContext(MovieDetailsContext)
    // const closeModal = () => {
    //     console.log('modal')
    // }

    if (modal === true) {
        return (
            <div className="MovieDetailsModal">
                <button onClick={() => setModal(false) }>Back</button>
                <div className="movieDetailsmodalBanner">
                    <img src={`https://image.tmdb.org/t/p/w500${movieImage}`}/>
                    <div className="playerActions">
                        
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
                    </div>
                    <div className="movieDetailsRight">
                            hello
                    </div>
                </div>
            </div>
        )
    }else {
        return false
    }

}



export default MovieDetailsModal