import React, { useState, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesContextProvider = props => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    

    const addRecipes = recipe => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, selectedRecipe, setSelectedRecipe, addRecipes }} >
            {props.children}
        </RecipesContext.Provider>
    )
}