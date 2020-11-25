import React from 'react';

function AddRecipe() {
    return (
        <div className=" mb-4">
            <form>
                <div className="form-group" >
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="title" >Recipe title</label>
                                <input type="text" className="form-control" name="title" placeholder="title"></input>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label for="comment" >Recipe comment</label>
                                <input type="text" className="form-control" name="comment" placeholder="comment"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="ingredients" >Recipe ingredients</label>
                        <input type="text" className="form-control" name="ingredients" placeholder="ingredients"></input>
                    </div>
                    <div className="form-group">
                        <label for="directions" >Recipe directions</label>
                        <input type="text" className="form-control" style={{ height: "200px" }} name="directions"></input>
                    </div>
                    <div className="form-group">
                        <div class="custom-file">
                            <label class="custom-file-label" for="image" style={{ width: "400px" }}>Choose file</label>
                            <input type="file" class="custom-file-input" name="image"></input>
                        </div>
                    </div>
                    <button className="btn btn-primary">Post</button>
                </div>
            </form>

        </div>
    );
}

export default AddRecipe;
