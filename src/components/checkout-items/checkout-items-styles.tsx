import styled from "styled-components";

export const CheckoutItemContainer = styled.div` 
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px){
            justify-content: space-between;
            font-size: 15px;
        }
`
export const ImageContainer = styled.div` 
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const Quantity = styled.span` 
        display: flex;
        width: 23%;
`
export const Name = styled.span` 
        width: 23%;
`
export const Price = styled.span` 
        width: 23%;
`
export const Value = styled.span` 
        margin: 0 10px;
`
export const Arrow = styled.div` 
        cursor: pointer;
`

export const RemoveButton = styled.div` 
        padding-left: 12px;
        cursor: pointer;
        color: red;
`
export const Total = styled.div` 
        margin-top: 30px;
        margin-left: auto;
        font-size: 36px;
        font-weight: bolder;

        @media screen and (max-width: 800px){
            margin-left: 0;
            text-align: center;
            color: blue;
        }
`
