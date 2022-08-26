import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    margin-left: 50px;
    
    
    @media (max-width: 500px) {
        .sign-up-container{
            width: 100%;
            margin: 50px;
        }
    }
    
    h2 {
        margin: 10px 0;
    }
`

