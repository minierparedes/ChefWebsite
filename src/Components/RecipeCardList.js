import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesAPI from "../API/RecipesAPI";
import { RecipesContext } from '../Context/RecipesContext';
import './RecipeCardList.css';
import RecipeCard from "../Components/RecipeCard";

function RecipeCardList(props) {
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
        <div className="recipe-card-list-container">
            {recipes.slice(0, 6).map(recipe => (
                <RecipeCard key={recipe.recipe_id} recipe={recipe}
                    title={recipe.title}
                    img="/"
                    body={recipe.directions}
                />
            ))}
        </div>
    )
};

export default RecipeCardList
