import React, {useState, ChangeEvent, FormEvent} from "react";
import { useSelector } from "react-redux";
import { selectCurrentPath } from "../../store/currentPath/currentPath.selector";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input-component";
import Button, {BUTTON_THEME} from "../button/button-component";
import { SignInFormContainer, ButtonsContainer } from "./sign-in-form-styles";
import { signInFailed, googleSignInStart, emailSignInStart } from "../../store/user/user.actions";
import { useDispatch } from "react-redux/es/exports";


const defaultSignInFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const dispatch = useDispatch();

    const [signInFormFields, setSignInFormFields] = useState(defaultSignInFormFields);
    const { email, password } = signInFormFields;

    const {currentPath} = useSelector(selectCurrentPath);
    const navigate = useNavigate();



    const resetFormFields = () => {
        setSignInFormFields(defaultSignInFormFields);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignInFormFields({ ...signInFormFields, [name]: value });
    }


    const logInGoogleUser = () => {
        dispatch(googleSignInStart());
    }
    



    const onFormSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            dispatch(emailSignInStart(email, password));
            resetFormFields();
            navigate(currentPath);
            console.log('signed in');
        }catch(error){
            dispatch(signInFailed(error as Error))
        }
    }

    return(
        <SignInFormContainer onSubmit={onFormSubmit}>
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
                <ButtonsContainer>
                    <Button type='submit' title='Sign in with Email' />
                    <Button type='button' title='Sign in with Google' onClick={logInGoogleUser} theme={BUTTON_THEME.google} />
                </ButtonsContainer>  
            </SignInFormContainer>
    )
}

export default SignInForm;

