import React from 'react'
import { Link } from "react-router-dom";
import './styles/header.css'

export default function Header() {
    return (
        <div className="header">
            <div><h1 style={{ fontSize: 25 }}>Movie<span>Span</span></h1></div>
            <div id="headernav">
                <div><Link to="/index"><p id="headlink">Home</p></Link></div>
                <div><Link to="/discover"><p id="headlink">Discover</p></Link></div>
            </div>
        </div>
    )
}