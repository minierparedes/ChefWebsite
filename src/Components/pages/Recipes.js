import React, { useContext, useEffect } from 'react';
import "../../App.css";
import RecipesAPI from "../../API/RecipesAPI";
import { RecipesContext } from '../../Context/RecipesContext';
import Cards from '../Cards';


export default function Recipes(props) {

    const { recipes, setRecipes } = useContext(RecipesContext)

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
        <div>
           <h1>Hello world Recipes</h1>
        </div>
    )
}

