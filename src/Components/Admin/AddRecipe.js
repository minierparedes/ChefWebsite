import React, { useContext, useState } from 'react';
import RecipesAPI from '../../API/RecipesAPI';
import { RecipesContext } from '../../Context/RecipesContext';


function AddRecipe() {
    const { addRecipes } = useContext(RecipesContext);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("choose a file");

    const onChange = e => {
        setFilename(e.target.files[0].name);
        setFile(e.target.files[0]);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", filename);
            formData.append("title", title);
            formData.append("ingredients", ingredients);
            formData.append("directions", directions);

            const response = await RecipesAPI.post("/", formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            addRecipes(response.data.data.recipe)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <form enctype="multipart/form-data">
                <div className="form-group" >
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="title" >Recipe title</label>
                                <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" name="title" placeholder="title"></input>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label for="comment" >Recipe comment</label>
                                <input value={comment} onChange={e => setComment(e.target.value)} type="text" className="form-control" name="comment" placeholder="comment"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="ingredients" >Recipe ingredients</label>
                        <input value={ingredients} onChange={e => setIngredients(e.target.value)} type="text" className="form-control" name="ingredients" placeholder="ingredients"></input>
                    </div>
                    <div className="form-group">
                        <label for="directions" >Recipe directions</label>
                        <textarea value={directions} onChange={e => setDirections(e.target.value)} type="text" className="form-control" rows="8" name="directions"></textarea>
                    </div>
                    <div className="form-group">
                        <div class="custom-file">
                            <label class="custom-file-label" htmlFor="customFile" style={{ width: "400px" }}>{filename}</label>
                            <input onChange={onChange} type="file" class="custom-file-input" name="customFile" id="customFile" ></input>
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Post</button>
                </div>
            </form>

        </div>
    );
}

export default AddRecipe;
