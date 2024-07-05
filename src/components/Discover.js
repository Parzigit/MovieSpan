import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies } from "./commit";

import './styles/cards.css';
import './styles/Home.css'
import './styles/discover.css'

const Discover = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    
    useEffect(() => {
        dispatch(requestMovies());
    }, [dispatch]);

    const renderMovie = (x, i) => (
        <div key={x.id}>
            <a href={`https://www.themoviedb.org/movie/${x.id}`} style={{textDecoration: 'none'}}>
                <div className="movie_card">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={`${x.title} poster`} />
                            <h1>{x.title}</h1>
                            <h4>{x.release_date}</h4><br />
                            <div id="iconrow">
                                <div><p className="type">Genre ID: {x.genre_ids[0]}</p></div>
                            </div>
                        </div>
                        <div className="movie_desc">
                            <textarea className="text" readOnly>
                                {x.overview}
                            </textarea>
                        </div>
                        <div className="movie_social">
                        </div>
                    </div>
                    <div className="blur_back" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${x.backdrop_path})`}}></div>
                </div>
            </a>
        </div>
    );

    const { results = [] } = data;

    return (
        <> 
        <div className="listcontainer">
                {results.map(renderMovie)}
            </div>
        </>
    );
}

export default Discover;
