import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4555/api/v1/recipes"
});
