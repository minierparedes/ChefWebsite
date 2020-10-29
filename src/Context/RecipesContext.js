import React, { useState, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesContextProvider = props => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState([]);
    return (
        <RecipesContext.Provider value={{recipes, setRecipes, selectedRecipe, setSelectedRecipe}} >
            {props.children}
        </RecipesContext.Provider>
    )
}