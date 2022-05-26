import React from "react";
 import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
 import './authorization-styles.scss';
 import SignInForm from "../../components/sign-in-form/sign-in-form-component";

const Authorization = () => {


    return (
        <div className="sign-in-form">
            <SignInForm />
            <SignUpForm />
        </div>
        
    )
}

export default Authorization;

