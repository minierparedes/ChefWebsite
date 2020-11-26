import React from "react";
import "../../App.css"
import Footer from "../Footer";
import HeroSection from "../HeroSection"
import RecipeCardList from "../RecipeCardList";

function Home() {
    return (
        <>
            <HeroSection src={"/img/img-home.jpg"}  title={"Cook & enjoy"} headline={"simple recipes to follow"} alt={"cooking at the kitchen"}/>
            <RecipeCardList />
            <Footer />
        </>
    )
}

export default Home;