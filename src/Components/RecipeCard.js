import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/RecipeCard.css";

function RecipeCard(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src="./img/cards_item_sandwich_01.jpg" alt="recipe picture"></img>
            </div>
            <div className="card-content">
            <div className="card-title"><h3>{props.recipe.title}</h3></div>
            <div className="card-body"><p>{props.body} </p></div>
            </div>
        </div>
    )
}

export default RecipeCard
