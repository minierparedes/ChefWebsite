require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../Server/db")
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const { response } = require("express");
const app = express();



//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());



//ROUTES

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
        console.error(error.message);
        res.status(500).send("Server error")
    }
});

//GET recipe by id
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
        console.error(error.message);
        res.status(500).send("Server error")
    }


});

// //GET recipe image

// app.get("/api/v1/recipes/:id", async (req, res) => {

//     try {
//         const img = await db.query("SELECT * FROM images WHERE img_id= $1", [req.params.id]);
//         if (img) {
//             const contentType = await FileType.fromBuffer(img.rows[0].img); // get the mimetype of the buffer (in this case its gonna be jpg but can be png or w/e)
//             res.type(contentType.mime); // not always needed most modern browsers including chrome will understand it is an img without this
//             res.end(img.rows[0].img);
//         } else {
//             res.end('No Img with that Id!');
//         }
//     } catch (error) {
//         consolore.error(err.message);
//     res.status(500).send("Server error")
//     }


// });


//CREATE recipe
app.post("/api/v1/recipes", async (req, res) => {
    const { name, data } = req.files.file;
    try {
        const results = await db.query("INSERT INTO recipes (title, ingredients, directions, img_name, img) VALUES ($1, $2, $3, $4, $5) returning *", [req.body.title, req.body.ingredients, req.body.directions, name, data]);
        res.status(201).json({
            status: "success",
            data: {
                recipe: results.rows[0]
            },

        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error")
    }


});


//UPDATE recipe
// app.put("/api/v1/recipes/:id", async (req, res) => {

//     try {
//         const results = await db.query("UPDATE recipes SET title = $1, ingredients = $2, directions = $3, video_url =$4 WHERE recipe_id = $5 returning *", [req.body.title, req.body.ingredients, req.body.directions, req.body.video_url, req.params.id]);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 recipe: results.rows[0]
//             }
//         });
//     } catch (error) {
//         consolore.error(err.message);
//res.status(500).send("Server error")
//     }
// });

//DELETE recipe
app.delete("/api/v1/recipes/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM recipes WHERE recipe_id = $1", [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});



//REGISTER AND LOGGIN ROUTES

//registering

app.post("/api/v1/routes/auth/register", async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log(name);
        const results = await db.query("SELECT * FROM recipes WHERE user_name = $1", [name]);
        res.json(results.rows)
        console.log(results.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
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