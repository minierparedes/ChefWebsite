import axios from "axios";

const RecipesAPI = axios.create({
    baseURL: "http://localhost:4555/api/v1/recipes"
});

const AdminAPI = axios.create({
    baseURL: "http://localhost:4555/api/v1/routes/auth/"
});

export default { RecipesAPI, AdminAPI };
