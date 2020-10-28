import React, { useEffect } from 'react';
import "../../App.css";
import RecipesAPI from "../../API/RecipesAPI";


export default function Recipes() {

    useEffect(async () => {
        try {
           const response = await RecipesAPI.get("/");
           console.log(response);
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

