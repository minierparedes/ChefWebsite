import axios from "axios";

const RecipesAPI = axios.create({
    baseURL: "http://localhost:4555/api/v1/recipes"
});

const adminAPI = axios.create({
    baseURL: "http://localhost:4555/api/v1/recipes"
});

export default { RecipesAPI, adminAPI };
