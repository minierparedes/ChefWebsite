import React from 'react'
import useForm from "./useForm";

function FormSignUp() {
    const {handleChange, values} = useForm();
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Sign up to get the latest news and upcoming events</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">name </label>
                    <input id="name" type="text" name="name" className="form-input" placeholder="name" value={values.name} onChange={handleChange} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label">lastname </label>
                    <input id="lastname" type="text" name="lastname" className="form-input" placeholder="lastname" value={values.lastname} onChange={handleChange} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">email</label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="props.email" value={values.email} onChange={handleChange} />
                </div>
                <button className="form-input-btn" type="submit" >Sign up</button>
            </form>
        </div>
    )
}

export default FormSignUp
