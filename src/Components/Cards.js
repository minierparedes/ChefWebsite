import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesAPI from "../API/RecipesAPI";
import { RecipesContext } from '../Context/RecipesContext';
import CardItem from './CardItem';
import "./Cards.css";


function Cards(props) {

    const { recipes, setRecipes } = useContext(RecipesContext);

    let history = useHistory();

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

    const handleRecipesSelect = (id) => {
        history.push(`/recipes/${id}`);
    }

    return (
        <div className="cards">
            <h1>Recipes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {recipes && recipes.map(recipe => {
                            return (
                                <CardItem

                                    key={recipe.recipe_id}
                                    src="./img/cards_item_sandwich_01.jpg"
                                    text={recipe.title}
                                    label="French"
                                    path={`/recipes/${recipe.recipe_id}`}
                                    onClick={() => handleRecipesSelect(recipe.recipe_id)}
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
