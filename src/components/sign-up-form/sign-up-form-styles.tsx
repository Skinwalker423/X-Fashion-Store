import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    margin-left: 0px;
    
    
    @media screen and (max-width: 800px) {
        .sign-up-container{
            width: 70%;
            margin: 50px;
            padding: 10px;
        }
        Button{
            width: 100%;
        }
    }
    
    h2 {
        margin: 10px 0;
    }
`

