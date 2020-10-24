import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";


function Cards() {
    return (
        <div className="cards">
            <h1>Recipes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./img/cards_item_sandwich_01.jpg" 
                        text="eggs benedict, breakfast classic is the ideal way to begin an indulgent weekend" 
                        label="French" 
                        path="/services" 
                        />
                        <CardItem 
                        src="./img/cards_item_american_01.jpg" 
                        text="Simple Stake and salad" 
                        label="American" 
                        path="/services" 
                        />
                        <CardItem 
                        src="./img/cards_item_italian_02.jpg" 
                        text="The best gravy you will ever try!" 
                        label="Italian" 
                        path="/services" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
