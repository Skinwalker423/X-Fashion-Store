import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesSampleContainer = styled.div` 
    margin: 50px 0;
`

export const ProductTitle = styled.div` 
        font-size: x-large;
        font-weight: bolder;
        color: red;
        text-transform: uppercase;
        font-family: 'Times New Roman', Times, serif;
        padding-bottom: 20px;

`

export const CategoryLink = styled(Link)`

`

export const ProductsContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        
    }
`