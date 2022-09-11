import styled from "styled-components";
import Button from "../../components/button/button-component";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px){
        margin 10px 10px;
        width: 90%;
        justify-content: space-between;
    }
`
export const CheckoutHeader = styled.div` 
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgrey;

        @media screen and (max-width: 800px){
            font-size: 10px;
        }
`

export const HeaderBlock = styled.div` 
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`

export const PaymentButton = styled(Button)`
    margin-top: 100px;
    margin-bottom: 100px;
    width: 500px;

    @media screen and (max-width: 800px){
        margin 0;
        width: 100%;
    }
`