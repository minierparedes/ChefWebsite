import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesAPI from "../API/RecipesAPI";
import { RecipesContext } from '../Context/RecipesContext';
import './RecipeCardList.css';
import RecipeCard from "../Components/RecipeCard";

function RecipeCardList() {
    const { recipes, setRecipes } = useContext(RecipesContext);

    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipesAPI.get("/");
                for (let i = 0; i < response.data.data.recipes.length; i++) {
                }
                setRecipes(response.data.data.recipes);
                setRecipes(response.data.data.recipes);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

    }, []);

    function convertBufferToBase64(buffer) {
        let binaryStr = '';
        const byteArray = new Uint8Array(buffer);
        for (let i = 0; i < byteArray.byteLength; i++) {
            binaryStr += String.fromCharCode(byteArray[i]);
        }
        return `data:image/jpeg;base64,${btoa(binaryStr)}`;
    }

    const handleRecipesSelect = (id) => {
        history.push(`/recipes/${id}`);
    };

    return (
        <div className="recipe-card-list-container">
            {recipes.map(recipe => (
                <div onClick={() => handleRecipesSelect(recipe.recipe_id)}>
                    <RecipeCard key={recipe.recipe_id} recipe={recipe}
                        title={recipe.title}
                        src={recipe.img && convertBufferToBase64(recipe.img.data)}
                        date={recipe.recipe_date.slice(0, 10)}
                        body={recipe.directions}
                    />
                </div>
            ))}
        </div>
    )
};

export default RecipeCardList


// 