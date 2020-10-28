import React, { useContext, useEffect } from 'react';
import RecipesAPI from "../API/RecipesAPI";
import { RecipesContext } from '../Context/RecipesContext';
import CardItem from './CardItem';
import "./Cards.css";


function Cards(props) {

    const { recipes, setRecipes } = useContext(RecipesContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipesAPI.get("/");
                setRecipes(response.data.data.recipes);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

    }, []);

    return (
        <div className="cards">
            <h1>Recipes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {recipes && recipes.map(recipe => {
                            return (
                                <CardItem
                            src="./img/cards_item_sandwich_01.jpg"
                            text={recipe.title}
                            label="French"
                            path="/Recipes"
                        />
                            )
                        })}
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
