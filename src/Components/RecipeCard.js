import React from 'react';
import "../Components/RecipeCard.css";

function RecipeCard(props) {
    console.log(props.src);
    return (
        <div className="card-container">
            <div className="img-container">
                <img className="card-img" src={props.src} alt="recipes"></img>
            </div>
            <div className="card-content">
                <div className="card-title"><h3>{props.title}</h3></div>
                <div className="card-date"><h5>{props.date}</h5></div>
                <div className="card-body"><p>{props.body} </p></div>
            </div>
        </div>
    )
}

export default RecipeCard
