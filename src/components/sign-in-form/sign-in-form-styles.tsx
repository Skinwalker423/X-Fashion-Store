import styled from "styled-components";

export const SignInFormContainer = styled.form` 
    width: 500px;

    @media (max-width: 700px) {
        width: 100%;
    
    }
`
export const ButtonsContainer = styled.div` 
    display: flex;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`


// .sign-in-container {
//     width: 500px;

//     @media (max-width: 700px) {
//         width: 100%;
    
//     }

// }

// .buttons-container{
//     display: flex;
// }
