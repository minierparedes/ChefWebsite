import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import "./Form.css";


function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitForm() {
        setIsSubmitting(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                <img src="./img/kitchen-utensils.svg" alt="logo" className="form-img"/>
                </div>
                {!isSubmitting ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
       </div>
       
        </>
    )
}

export default Form
