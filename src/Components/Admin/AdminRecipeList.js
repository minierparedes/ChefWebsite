import React, { useEffect, useContext } from 'react';
import RecipesAPI from "../../API/RecipesAPI";
import { RecipesContext } from '../../Context/RecipesContext';

function AdminRecipeList(props) {
    const { recipes, setRecipes } = useContext(RecipesContext);
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
    }, [])


    const handleDelete = async (id) => {
        try {
            const response = await RecipesAPI.delete(`/${id}`);
            setRecipes(recipes.filter(recipe => recipe.recipe_id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <table class="table table-hover" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Recipes title</th>
                        <th scope="col">Post Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes && recipes.map(recipe => {
                        return (
                            <tr key={recipe.recipe_id}>
                                <th scope="row">{recipe.recipe_id}</th>
                                <td>{recipe.title}</td>
                                <td>{recipe.recipe_date}</td>
                                <td><button className="btn btn-warning">Update</button></td>
                                <td><button onClick={() => handleDelete(recipe.recipe_id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default AdminRecipeList;
