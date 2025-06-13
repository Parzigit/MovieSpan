import React from 'react';
import { Link } from "react-router-dom";
import './styles/Home.css';
import './styles/title.css';

export default function Home() {
    return (
        <div className="homebg">
            <h1 className="hometitle">This Is Cinema</h1>
            <button className="button">
                <Link to="/discover" className="explore-link">Explore Now</Link>
            </button>
        </div>
    );
}
