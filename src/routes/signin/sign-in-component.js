import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";

const SignInForm = () => {

    const logInGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const credential = GoogleAuthProvider.credentialFromResult(response);

        const token = credential.accessToken;
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <div>Sign In Form</div>
            <button onClick={logInGoogleUser}>Sign in with Google</button>
        </div>
        
    )
}

export default SignInForm;

