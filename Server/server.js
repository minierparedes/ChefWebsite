require("dotenv").config();
const express = require("express");
const db = require("../Server/db")
const morgan = require("morgan");


const app = express();


app.use(express.json());

//GET all recipes
app.get("/api/v1/recipes", async (req, res) => {
    const results = await db.query("select * from recipes");
    console.log(results);

    res.status(200).json({
        status: "success",
        data: {
            recipes: ["Raspberry Danish inspired by Ant Man & The Wasp", "Enchiladas inspired by Schitt's Creek"]
        }
    });
});

//GET recipe
app.get("/api/v1/recipes/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            recipe: "Enchiladas"
        }
    });
});

//CREATE recipe
app.post("/api/v1/recipes", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data: {
            recipe: "Enchiladas"
        }
    });
});

//UPDATE recipe
app.put("/api/v1/recipes/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data: {
            recipe: "Enchiladas"
        }
    });
});

//DELETE recipe
app.delete("/api/v1/recipes/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
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