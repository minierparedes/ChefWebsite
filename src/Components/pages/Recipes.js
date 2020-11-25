import React from 'react';
import "../../App.css";
import HeroSection from "../HeroSection";
import "../HeroSection.css"


export default function Recipes() {
    return (
        <div>
            <HeroSection  src={"/img/recipes.jpg"} title={"Recipes"} />
        </div>
    );
}