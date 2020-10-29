import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4555/api/v1/recipes"
});

//"http://localhost:4555/api/v1/recipes/recipes/:id/RecipeDetails"
//http://localhost:4555/api/v1/restaurants/restaurant/:id/RecipeDetails