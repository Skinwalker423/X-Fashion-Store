import React, {useEffect} from "react";
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect,
    createAuthUserWithEmailAndPassword
 } from "../../utils/firebase/firebase-utils";

 import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
 import FormInput from "../../components/form-input/form-input-component";
 import './sign-in-styles.scss';
 import Button from "../../components/button/button-component";

const SignInForm = () => {

    useEffect(() => {
        const redirectedResults = async() => {
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log(response.user);
            }
        }
        redirectedResults();
        
    }, [])

    const logInGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const credential = GoogleAuthProvider.credentialFromResult(response);

        const token = credential.accessToken;
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }


    return (
        <div className="sign-in-form">
            <form className="sign-in-container">
                <h2>Already have an account?</h2>
                <span>Sign In</span>
                <FormInput
                    // label='Email'
                    // type='email'
                    // onChange={handleInputChange} 
                    // value={email}
                    // name={'email'}
                    // required
                />
                <FormInput
                    // label='Password'
                    // type='password'
                    // onChange={handleInputChange} 
                    // value={password}
                    // name={'password'}
                    // required
                />
                <div className="buttons-container">
                    <Button title={'Sign in with Email'} />
                    <Button title={'Sign in with Google'} onClick={logInGoogleUser} theme={'google'} />
                </div>
                
            </form>
            <SignUpForm logInGoogleUser={logInGoogleUser} />
        </div>
        
    )
}

export default SignInForm;

