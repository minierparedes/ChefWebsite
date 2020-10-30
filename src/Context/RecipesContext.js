import React, { useState, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesContextProvider = props => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    return (
        <RecipesContext.Provider value={{recipes, setRecipes, selectedRecipe, setSelectedRecipe}} >
            {props.children}
        </RecipesContext.Provider>
    )
}