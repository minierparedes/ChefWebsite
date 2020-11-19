import React from "react";
import "../../App.css"
import Footer from "../Footer";
import HeroSection from "../HeroSection"
import RecipeCardList from "../RecipeCardList";

function Home() {
    return (
        <>
        <HeroSection />
        <RecipeCardList />
        <Footer />
        </>
    )
}

export default Home;