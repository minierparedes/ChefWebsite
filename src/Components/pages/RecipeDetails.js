import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesAPI from '../../API/RecipesAPI';
import "../../App.css";
import { RecipesContext } from '../../Context/RecipesContext';
import Footer from '../Footer';

export default function RecipeDetails() {
    const { id } = useParams();
    const { selectedRecipe, setSelectedRecipe } = useContext(RecipesContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RecipesAPI.get(`/${id}`);
                setSelectedRecipe(response.data.data.recipe);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="recipe-detials">{selectedRecipe && selectedRecipe.title}</h1>

        </div>
    )
}
