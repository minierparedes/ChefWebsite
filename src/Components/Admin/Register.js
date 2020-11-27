import React, { useState } from 'react';
import AdminRecipeList from './AdminRecipeList';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const body = { name, password };
            const response = await AdminRecipeList.post("/", {
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const parseResponse = await response.json();
            console.log(parseResponse);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center my-5" >Register</h1>
                <form onSubmit={handleSubmit}>
                    <input value={name} onChange={e => setName(e.target.value)} className="form-control my-4" type="text" name="name" placeholder="name" />
                    <input value={password} onChange={e => setPassword(e.target.value)} className="form-control my-4" type="password" name="password" placeholder="password" />
                    <button className="btn btn-success btn block" >submit</button>
                </form>
            </div>
        </>
    )
};

export default Register;
