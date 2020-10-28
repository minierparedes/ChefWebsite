require("dotenv").config();
const express = require("express");
const db = require("../Server/db")
const morgan = require("morgan");


const app = express();


app.use(express.json());

//GET all recipes
app.get("/api/v1/recipes", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM recipes");
        res.status(200).json({
            status: "success",
            results: results.rowCount,
            data: {
                recipes: results.rows
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//GET recipe
app.get("/api/v1/recipes/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM recipes WHERE recipe_id= $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                recipe: results.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
    }


});

//CREATE recipe
app.post("/api/v1/recipes", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO recipes (title, ingredients, directions, video_url) values ($1, $2, $3, $4) returning *", [req.body.title, req.body.ingredients, req.body.directions, req.body.video_url])
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                recipe: results.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
    }


});

//UPDATE recipe
app.put("/api/v1/recipes/:id", async (req, res) => {

    try {
        const results = await db.query("UPDATE recipes SET title = $1, ingredients = $2, directions = $3, video_url =$4 WHERE recipe_id = $5 returning *", [req.body.title, req.body.ingredients, req.body.directions, req.body.video_url, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                recipe: results.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
    }
});

//DELETE recipe
app.delete("/api/v1/recipes/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM recipes WHERE recipe_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    } catch (error) {
        console.log(error);
    }
});

const PORT = process.env.PORT || 3555;
app.listen(PORT, () => {
    console.log(`server is running & listening on port ${PORT}`);
});





/*

json_ul = {
        "menu": [
            {"id":1,"name":"PARENT1","parent":0},
            {"id":2,"name":"child1","parent":1},
            {"id":3,"name":"PARENT2","parent":0 },
            {"id":4,"name":"child1","parent":3},
            {"id":5,"name":"PARENT3","parent":0},
            {"id":6,"name":"child1","parent":5},
            {"id":7,"name":"PARENT4","parent":0},
            {"id":8,"name":"child1","parent":7},
            {"id":9,"name":"PARENT5","parent":0},
            {"id":10,"name":"child1","parent":9}
        ]
    };


*/