import React, { useState, useEffect } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner () {
    const [movie, setMovie] = useState( [] );
    // const [reload, setReload] = useState(0);

    useEffect( () => {
        async function fetchData () {
            const request = await axios.get( requests.fetchTrending );
            setMovie( request.data.results[
                Math.floor( Math.random() * request.data.results.length )
            ]
            );
            return request;
        }
        fetchData();
    }, [] );

    function truncate ( str, n ) {
        return str?.length > n ? str.substr( 0, n - 1 ) + "..." : str;
    } 

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3>
                    {truncate(movie?.overview, 190)}
                </h3>
            </div>
            <div className="banner__fadeBottom"></div>
        </div>    
    );
}

export default Banner;