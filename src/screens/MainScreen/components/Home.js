import React , { useState , useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

const Home = () => {

    const [ trending, setTrending ] = useState([])
    const [ upcoming, setUpcoming ] = useState([])
    const [ tvseries, setTvseries ] = useState([])

    useEffect(() => {

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODczYmI2OWI5MmY1NDNlNjM0YjMzNmZmOGY3NTI1YyIsInN1YiI6IjYzNzY5ZmU0MjU1ZGJhMDBjZDNlODdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TdR4sS3-c8UVey57mWqcz8fKD1_RLlqslN1g-GxDZyI");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://api.themoviedb.org/3/trending/movie/week", requestOptions)
            .then(response => response.json())
            .then(result => {
                setTrending(result.results)
            })
            .catch(error => console.log('error', error));

            fetch("https://api.themoviedb.org/3/movie/upcoming", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUpcoming(result.results)
            })
            .catch(error => console.log('error', error));

              fetch("https://api.themoviedb.org/3/tv/top_rated", requestOptions)
              .then(response => response.json())
              .then(result => {
                    setTvseries(result.results)
              })
              .catch(error => console.log('error', error));

    },[])

    return (
        <>
            <div className="middleContent">
                <SearchBar></SearchBar>
                <div className="HomeBanner">
                   <div className="bannerButtons">
                        <button><span>Play</span></button>
                        <button><span>More info</span></button>
                    </div>
                </div>
                <h2 className="trackTitle">Trending <span class="seeall">see all</span></h2>
                <div className="track">
                    {
                        trending.filter((item, index) => index < 4).map((card) => (
                            <Card className="card" key={card.id} 
                                title={card.title}
                                image={card.poster_path}
                                description={card.overview}
                                release={card.release_date}
                                rating={card.vote_average}
                                ></Card>
                        ) )
                    }
                </div>
                <h2 className="trackTitle">Upcoming <span class="seeall">see all</span></h2>
                <div className="track">
                    {
                        upcoming.filter((item, index) => index < 4).map((card) => (
                            <Card className="card" key={card.id} 
                                title={card.title}
                                image={card.poster_path}
                                description={card.overview}
                                release={card.release_date}
                                rating={card.vote_average}
                                ></Card>
                        ) )
                    }
                </div>
                <h2 className="trackTitle">Tv series <span class="seeall">see all</span></h2>
                <div className="track">
                    {
                        tvseries.filter((item, index) => index < 4).map((card) => (
                            <Card  key={card.id} 
                                title={card.title}
                                image={card.poster_path}
                                description={card.overview}
                                release={card.release_date}
                                rating={card.vote_average}
                                ></Card>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}




export default Home