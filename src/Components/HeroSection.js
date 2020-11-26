import React from 'react'
import "../App"
import "./HeroSection.css";

const HeroSection = (props) => {
    return (
        <div className="hero-container">
            <img src={props.src} alt={props.img_name}></img>
            <h1>{props.title}</h1>
            <p>{props.headline}</p>
        </div>
    )
}

export default HeroSection
