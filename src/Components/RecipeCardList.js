import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesAPI from "../API/RecipesAPI";
import { RecipesContext } from '../Context/RecipesContext';
import './RecipeCardList.css';
import RecipeCard from "../Components/RecipeCard";

function RecipeCardList(props) {
    const { recipes, setRecipes } = useContext(RecipesContext);
    const { images, setImages } = useContext(RecipesContext);

    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipesAPI.get("/");
                setRecipes(response.data.data.recipes);
                console.log(response.data.data.recipes[13].img);
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
        return btoa(binaryStr);
      }

    const handleRecipesSelect = (id) => {
        history.push(`/recipes/${id}`);
    }

    return (
        <div className="recipe-card-list-container">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.recipe_id} recipe={recipe}
                    title={recipe.title}
                    src={recipe.img && `data:image/jpeg;base64,${convertBufferToBase64(recipe.img.data)}`}
                    body={recipe.directions}
                />
            ))}
        </div>
    )
};

export default RecipeCardList
