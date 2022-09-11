import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, signUpAndSignInFailed } from "../../store/user/user.actions";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { selectCurrentPath } from "../../store/currentPath/currentPath.selector";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";

import { SignUpContainer } from "./sign-up-form-styles";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const {currentPath} = useSelector(selectCurrentPath);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const signUpWithEmailAndPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('password not matching');
            return;
        }
        try {
            dispatch(createUserStart(displayName, email, password));
            resetFormFields();
            navigate(currentPath);

        } catch (error) {
           if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Cannot create user, email already exists')
           } else {
            console.log('user creation encountered an error', error)
            dispatch(signUpAndSignInFailed(error as AuthError))
           }
        }

    }

    return (

        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={signUpWithEmailAndPassword}>
                <FormInput
                    label='Display name'
                    type='text'
                    onChange={handleInputChange} 
                    value={displayName}
                    name={'displayName'}
                    required
                />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    onChange={handleInputChange} 
                    value={confirmPassword}
                    name={'confirmPassword'}
                    required
                />
                <Button title='Submit' />
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;