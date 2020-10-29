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
            const response = await RecipesAPI.
        };
    }, []);

    return (
        <div>
            <h1 className="recipe-detials">HELLO WORLD</h1>

        </div>
    )
}
