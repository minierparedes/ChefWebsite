import React, {useState} from 'react';

function Register() {
    const [inputs, setInputs] = useState({name: "", password: ""});
    const { name, password } = inputs;

    return (
        <>
            <div className="container">
                <h1 className="text-center my-5" >Register</h1>
                <form>
                    <input className="form-control my-4" type="text" name="name" placeholder="name" />
                    <input className="form-control my-4" type="password" name="password" placeholder="password" />
                    <button className="btn btn-success btn block" >submit</button>
                </form>
            </div>
        </>
    )
};

export default Register;
