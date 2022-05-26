import React, {useState} from "react";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase-utils";
import { GoogleAuthProvider } from "firebase/auth";


import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";

import './sign-in-form-styles.scss';


const defaultSignInFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [signInFormFields, setSignInFormFields] = useState(defaultSignInFormFields);
    const { email, password } = signInFormFields;


    const resetFormFields = () => {
        setSignInFormFields(defaultSignInFormFields);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignInFormFields({ ...signInFormFields, [name]: value });
    }


    const logInGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential.accessToken;
    }

    const onFormSubmit = async(e) => {
        e.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(auth, email, password );
            console.log(user);
            resetFormFields();
            console.log('signed in');
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <form onSubmit={onFormSubmit} className="sign-in-container">
                <h2>Already have an account?</h2>
                <span>Sign In</span>
                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleInputChange} 
                    value={email}
                    name={'email'}
                    required
                />
                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleInputChange} 
                    value={password}
                    name={'password'}
                    required
                />
                <div className="buttons-container">
                    <Button type='submit' title={'Sign in with Email'} />
                    <Button type='button' title={'Sign in with Google'} onClickHandler={logInGoogleUser} theme={'google'} />
                </div>  
            </form>
    )
}

export default SignInForm;

