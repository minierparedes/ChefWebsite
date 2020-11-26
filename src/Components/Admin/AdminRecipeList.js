import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesAPI from "../../API/RecipesAPI";
import { RecipesContext } from '../../Context/RecipesContext';

function AdminRecipeList(props) {
    const { recipes, setRecipes } = useContext(RecipesContext);
    let history = useHistory();

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

    const handleUpdate = (id) => {
        history.push(`/recipes/${id}/update`);
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
                                <td>{recipe.recipe_date.slice(0, 10)}</td>
                                <td><button onClick={() => handleUpdate(recipe.recipe_id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={() => handleDelete(recipe.recipe_id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default AdminRecipeList;
